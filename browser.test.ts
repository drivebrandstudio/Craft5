import { test } from '@playwright/test'

test('test browser', async ({ page }) => {
  // point this to wherever you want
  await page.goto('https://127.0.0.1:32772')

  // keep browser open
  await page.pause()
})