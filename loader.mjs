export async function load() {
  // uncomment one of the followings:
  const format = 'module' // hello from loader.mjs
  // const format = 'commonjs' // hello from index.js

  console.log({ format })

  return {
    format,
    shortCircuit: true,
    source: `console.log("hello from loader.mjs");`,
  }
}
