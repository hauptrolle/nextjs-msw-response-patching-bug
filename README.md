# Reproduction repository for msw bug with nextjs

> This repository is based on the next-with-msw example

When adding the `response patching` feature it throws the following error: `FetchError: request to API_URL_HERE failed, reason: Request with GET/HEAD method cannot have body`

## Steps to reproduce

- clone this repository
- yarn install
- yarn dev
- try to open http://localhost:3000/test

## Infos

The line `const originalResponse = await ctx.fetch(req);` produces the error. If it is changed to `const originalResponse = await ctx.fetch(req.url.href);` everything works fine. (mocks/handlers.js)
