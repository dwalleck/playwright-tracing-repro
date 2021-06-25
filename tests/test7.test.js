jest.setTimeout(40 * 1000)

describe("Test7", () => {

    it("should go to the expected website - 7", async () => {
        await page.goto('https://playwright.dev/');
        await page.click('[placeholder="Search"]');
        await page.fill('[placeholder="Search"]', 'tracing');
        await page.click('div[role="option"] >> :nth-match(svg, 2)');
        expect(page.url()).toBe('https://playwright.dev/docs/api/class-tracing');
    })
});