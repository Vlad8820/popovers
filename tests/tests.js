const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:8080');

    // Click the button to show the popover
    await page.click('#popover-btn');

    // Check if the popover is visible
    const popoverVisible = await page.evaluate(() => {
        const popover = document.getElementById('popover');
        return window.getComputedStyle(popover).display === 'block';
    });

    console.log(popoverVisible ? 'Test passed' : 'Test failed');

    await browser.close();
})();
