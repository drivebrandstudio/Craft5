<?php

namespace modules\revalidate;

use Craft;
use yii\base\Module as BaseModule;
use craft\services\Elements;
use yii\base\Event;
use craft\queue\BaseJob;
use GuzzleHttp\Client;

/**
 * Revalidate module
 *
 * @method static Revalidate getInstance()
 */
class Revalidate extends BaseModule
{
    public function init()
    {
        parent::init();

        // Register the event listener
        Event::on(
            Elements::class,
            Elements::EVENT_AFTER_SAVE_ELEMENT,
            function(Event $event) {
                $this->handleAfterSave($event);
            }
        );
    }

    protected function handleAfterSave(Event $event)
    {
        $element = $event->element;

        // Check if the element is not a draft or revision and if it has a URI
        if (!$element->getIsDraft() && !$element->getIsRevision() && $element->uri !== null) {
            // Push a job to the queue to handle revalidation asynchronously
            Craft::$app->queue->push(new RevalidateJob([
                'uri' => $element->uri,
            ]));
        }
    }
}

// Define the queue job class
class RevalidateJob extends BaseJob
{
    public $uri;

    // Ensure the method signature matches the interface
    public function execute($queue): void
    {
        $client = new Client();
        // TODO STARTUP: Swap this URL and secret for your site 
        $url = 'https://www.[REPLACE_your_website]/api/revalidate?uri=';

        $url .= urlencode($this->uri);
        $url .= '&secret=[REPLACE_WITH_env.MY_SECRET_TOKEN]';

        try {
            $response = $client->post($url);
            if ($response->getStatusCode() === 200) {
                Craft::info('Next.js revalidation successful.', __METHOD__);
            } else {
                Craft::error('Next.js revalidation failed: ' . $response->getBody(), __METHOD__);
            }
        } catch (\Exception $e) {
            Craft::error('Next.js revalidation error: ' . $e->getMessage(), __METHOD__);
        }
    }

    protected function defaultDescription(): string
    {
        return 'Revalidating Next.js for URI: ' . $this->uri;
    }
}
