import { test, expect } from '@playwright/test'
import uaparser from 'ua-parser-js'

test('verificando el title de Rimac Seguros Vehicular', async ({ page }) => {
    await page.goto('/')
    const userAgent = await page.evaluate(() => navigator.userAgent)
    const infoUserAgent = uaparser(userAgent)
    await page.screenshot({
        path: `test-results/screenshot/${infoUserAgent.browser.name}-${infoUserAgent.os.name}.png`,
    })
    await expect(page).toHaveTitle(/Seguro Vehicular | RIMAC Seguros/)
})
