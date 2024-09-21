# GSolid App Starter (Minimal Typescript)

Install dependencies:

```sh
pnpm i
yarn install
bun i
```

Build the app:

```sh
pnpm build
yarn build
bun run build.ts # Don't need ts-node
```

Run the app:

```sh
pnpm run
yarn run
bun run start
```

## What's included

- Minimal app written in TSX (`index.tsx`)
- Build script (`build.ts`)
- TypeScript configuration (`tsconfig.json`)
- Lock files for pnpm, yarn and bun. (`pnpm-lock.yaml`, `yarn.lock`, `bun.lockb`)

## Sidenotes

- We have different lock files for pnpm,yarn and bun. You may want to delete the ones you won't use.
