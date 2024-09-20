# Vite Federation + SDK

This is a small proof of concept for a federated frontend using:
* React
* Vite Plugin:  https://github.com/module-federation/vite
* dynamic federation: https://module-federation.io/guide/basic/runtime.html
* MUI (inside SDK)

The purpose of this repo is to evaluate the usage of a React (+ Material UI) based SDK shared between the host and remote app while the SDK offers multiple entry points.

## Start and Reproduce

install dependencies
````bash
pnpm install
````
build sdk
````bash
pnpm run build-sdk
````
run app
````bash
pnpm run dev-all
````

now open:
* http://localhost:5000 for host app
* http://localhost:5001 for remote app
