jest.setTimeout(40 * 1000)

describe("Test1", () => {

    it("should go to the expected website - 1", async () => {
        await context.tracing.start({ screenshots: true, snapshots: true });
        await page.goto('https://playwright.dev/');
        await page.click('[placeholder="Search"]');
        await page.fill('[placeholder="Search"]', 'tracing');
        await page.click('div[role="option"] >> :nth-match(svg, 2)');
        expect(page.url()).toBe('https://playwright.dev/docs/api/class-tracing');
        await context.tracing.stop({ path: 'traces/test1.zip'})
    })
});