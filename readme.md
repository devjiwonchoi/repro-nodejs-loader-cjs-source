## Issue

> [!NOTE]
> This issue is present on Node.js v18. Works fine on v20. (v19 doesn't support `module.register` API.)

The Node.js loader hook function `load` can return properties: `format` and `source`. When running on Node.js v18 with `format` set to `commonjs`, the `source` property is ignored and has no effect on the loaded module.

### Reproduction

#### Run with `--import ./register.js`

```
node --import ./register.js ./index.js
```

#### Run with `--loader ./loader.mjs`

```
node --loader ./loader.mjs ./index.js
```

### Expected 

When format within the `loader.mjs` file is `module`, the stdout should be:

```
{ format: 'module' }
hello from loader.mjs
```

as the "modified" `source` property is provided from the loader.

However, when change the format to `commonjs`, the stdout is:

```
{ format: 'commonjs' }
hello from index.js
```

which is the original `source` from `index.js`.