
##### Last reviewed 8/21/2024

# Drive Brand Studio CraftCMS v5 template

### Features
- Live preview
- Revalidate Front End data on save in CraftCMS

### Contributor & Developer Resources & Guides
   - Docker to containerize shizz 🐳 — [Docker Installation](https://ddev.readthedocs.io/en/latest/users/install/docker-installation/)
   - DDEV to build our Docker servers for us 🤓 — [DDEV Installation](https://ddev.readthedocs.io/en/latest/users/install/ddev-installation/#wsl2-docker-desktop-install-script)
   - Vite to bundle up our code ⚡ — [VITE](https://vitejs.dev/)
   - Twig as our templating engine 🏎️ — [Twig PHP](https://twig.symfony.com/doc/3.x/)
   - Sass — [SCSS](https://sass-lang.com/documentation/syntax/)
   - Javascript 🤮 — [Mozilla's Excellent JavaScript documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
   - NPM for managing Node packages 📦 — [NPM](https://docs.npmjs.com/cli/v9)
   - Composer to manage php packages 🎼 — [Composer](https://getcomposer.org/doc/)
   - MakeFile for easily running bulk scripts 🚚 — [MakeFile](https://www.gnu.org/software/make/manual/make.html)
   - CraftCMS for managing content 📝 — [CraftCMS](https://craftcms.com/docs/)
   - .env 🦺 — [.env](https://www.dotenv.org/docs)
   - Prettier... But be warned 🧹 — [prettier](https://prettier.io/)
   - Prettier Plugin by Melody  — [prettier-plugin-twig-melody](https://github.com/trivago/prettier-plugin-twig-melody?tab=readme-ov-file#install)
   - Node V14+, I recommend using NVM to install and manage — [NVM]([https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating))
   - React
   - GraphQL

## Requirements
1. Computer with MINIMUM 8gb RAM, modern OS (so Windows, Linux or Mac) 
1. NodeJS version 14+
2. Ubuntu
3. PHP 8.1+
4. DDEV
5. Docker

## Steps 
1. Use the scaffold to start a templated github repo
1. Add empty .env file to the root of the project (next to .env.example)
1. Add CRAFT_ENVIRONMENT=dev
2. Change web > .htaccess_dev into .htaccess (or prod if you are putting this on your production server)
1. Configure the project
     ```shell
     ddev config
     ```
1. Start the DB server
     ```shell
     ddev start
     ```
1. In .ddev > apache > apache-site.conf
   2. Delete `#DDEV-generated`
   2. Copy contents of .htaccess_dev and paste outside of the <VirtualHost> tags
5. Install necessary packages
   ```shell
   composer install
   ```
5. Install craft
   ```shell
   ddev exec php craft setup
   ```
5. Configure craft
   ```shell
   ddev launch
   ```
8. In the GraphQL tab, select Schemas and in the Private Schema, select all checkboxes.
9. Then, select the Tokens tab and create a new token. Name it something like 'Private'.
10. Copy that token and paste it into L57 in index.tsx for `Authorization: "Bearer [PUT_IT_HERE]"`. When you copy with CraftCMS's copy button, you get the whole line. You only need the token value after `Bearer`.

## Repository Structure
   `/.ddev/` — We utilize DDEV to handle self-hosting of the dev environment. </br>
   `/config/` — CraftCMS config. This should be mostly left alone.    </br>
   `/src/` — Un-minified JS, JSX and SCSS files </br>
   `/templates/` — Source code for our front-end, written in Twig. </br>
   `/web/` — the folder containing the generated minified documents for the website, as well as local assets (images, videos, etc) that are stored on the webserver (preferably, store them somewhere where storage is cheaper and make a network request to fetch I.E. put a video on youtube instead of in here)

   
### Style Guide
   - DBS Twig template folder structuring is inspired by the [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/). We rename these primatives to fit into the CraftCMS /templates/ folder structer of:
        <pre>
            templates
            ├── 404.twig
            ├── _components  -- ATOMS
            ├── _includes   -- MOLECULES
            │   ├── background.twig
            │   ├── bodyEnd.twig
            │   ├── footer.twig
            │   ├── head.twig
            │   ├── header.twig
            │   └── socials.twig
            ├── _layouts   -- TEMPLATES/PAGES
            │   ├── _entrytype
            │   │   ├── [some_entry_type].twig
            │   │   ├── .....
            │   ├── base.twig
            │   └── ....
            ├── error.twig  -- Craft Error Boundary
            └── index.twig  -- App entry point
        </pre>
        Aligning Designers and Developers is a good way to make groovy stuff quickly :D
   - Prettier works (most of the time), so format on save
   - We have no linter yet 😬
   - Follow 'prior art' by referencing existing code within the codebase   

## FAQ/Tips
### Errors during install
1. Follow the DDEV instructions slowly and carefully. Read each line all the way through, it's faster than skimming and hitting an error and having to debug...
2. Uninstall Ubuntu (all programs related to Ubuntu: Ubuntu, 'install REALEASE (Ubuntu)', .... )
### Prettier
1. You will need to restart the vscode window from the Command Palette (ctrl+shift+p) 
```shell 
Developer: reload window
```
After the reload, let vscode finish loading and indexing, then attempt to use Prettier

## Known pitfalls
1. to be explored more.....

