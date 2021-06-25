const PlaywrightEnvironment = require("jest-playwright-preset/lib/PlaywrightEnvironment")
    .default

class CustomEnvironment extends PlaywrightEnvironment {
    constructor(config, context) {
        super(config, context)
    }
    async setup() {
        await super.setup()
        const { context } = this.global;
        await context.tracing.start({ screenshots: true, snapshots: true });
    }

    async teardown() {
        await super.teardown()
    }

    async handleTestEvent(event) {

        if (event.name === "test_done") {
            const testName = event.test.name.replace(/ /g, "_")
            const { context } = this.global;
            const { browserName } = this._config
            await context.tracing.stop({ path: `traces/${testName}-${browserName}.zip` });
        }
    }
}

module.exports = CustomEnvironment