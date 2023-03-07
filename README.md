# testing-mono

Created with `yarn init -2`. 

Vanilla CRA App in packages/sb-testing, and then ran `yarn dlx sb@next init` to initialize storybook. 
I did have to remove the `eslint` section added to the package.json, as storybook would fail to load if I left that in (it can't find react-scripts eslint config I'm guessing due to pnp). 

## Running

```
yarn
cd ./packages/sb-testing
yarn start
yarn storybook
```

## Test Runner Bug

To demonstrate the testing bug: 

```
yarn test-storybook
```

Should show a Validation Error: Module jest-serializer-html in the snapshotSerializers option was not found.

The workaround for that bug was to run: 

```
yarn pnpify test-storybook
```

This will fail with `PlaywrightError: jest-playwright-preset: Cannot find playwright package to use chromium`. 
