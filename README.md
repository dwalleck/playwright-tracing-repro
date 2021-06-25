# To reproduce issue

```
    npm install
    npm test
```

You may need to run the tests more than once to trigger
the issue. The stacktrace that is generated looks like
the following:

```
    tracing.stop: file data stream has unexpected number of bytes

      22 |             const { context } = this.global;
      23 |             const { browserName } = this._config
    > 24 |             await context.tracing.stop({ path: `traces/${testName}-${browserName}.zip` });
         |             ^
      25 |         }
      26 |     }
      27 | }

      at Object.captureStackTrace (node_modules/playwright/lib/utils/stackTrace.js:51:19)
      at Connection.sendMessageToServer (node_modules/playwright/lib/client/connection.js:69:48)
      at Proxy.<anonymous> (node_modules/playwright/lib/client/channelOwner.js:64:61)
      at node_modules/playwright/lib/client/tracing.js:34:46
      at BrowserContext._wrapApiCall (node_modules/playwright/lib/client/channelOwner.js:77:28)
      at Tracing.stop (node_modules/playwright/lib/client/tracing.js:30:9)
      at CustomEnvironment.handleTestEvent (customEnvironment.js:24:13)
```