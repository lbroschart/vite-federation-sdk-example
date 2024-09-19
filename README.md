# Vite Federation + SDK

This is a small proof of concept for a federated frontend using:
* React
* Vite Plugin:  https://github.com/module-federation/vite
* dynamic federation: https://module-federation.io/guide/basic/runtime.html
* MUI (inside SDK)

The purpose of this repo is to evaluate the usage of a React (+ Material UI) based SDK shared between the host and remote app while the SDK offers multiple entry points.

Apparently this is not working currently!

## Problem Overview

The remote 'app-broken' component cannot be rendered inside the host app due to missing context while the remote 'app' component works.

The only difference between 'app' and 'app-broken' is the way they import library components from the SDK (different entry point).

The missing Context Providers are configured by using the SDK Wrapper:
* LocalizationProvider (used by MUI DatePicker)
* ThemeProvider (used by every MUI Component)

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

To switch between 'app' and 'app-broken' component inside the host change:
`host/src/remote.tsx` -> toggle between `remote/app-broken` and `remote/app` in line 8.
