## Contributing Notes

### How to build lock files for npm, yarn and pnpm

To update lock files for different package managers, you must have them installed on your machine. A quick way is using corepack.

```sh
# YARN
yarn install --mode=update-lockfile

# PNPM
pnpm i --lockfile-only

# NPM
npm i --package-lock-only
```

You don't need to build to the npm one since we don't include it in starters.
