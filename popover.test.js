const puppeteer = require('puppeteer');

test('popover переключается при клике на кнопку', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:8080');

    const button = await page.$('#popover-button');
    await button.click();
    let popover = await page.$('#popover.show');
    expect(popover).not.toBeNull();

    await button.click();
    popover = await page.$('#popover.show');
    expect(popover).toBeNull();

    await browser.close();
});
