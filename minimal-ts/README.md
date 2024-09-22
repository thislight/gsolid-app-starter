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
bun build.ts # Don't need ts-node
```

Run the app:

```sh
pnpm run
yarn run
bun run start
```

Bundle the app into the gresource file:

```sh
pnpm build && pnpm build:gres
yarn build && yarn build:gres
bun build.ts && bun build:gres
```

Run the app in the gresource file as out-of-tree:

```sh
# The file must have the EXE flag
chmod +x install/share/org.example.MyApp/org.example.MyApp

install/share/org.example.MyApp/org.example.MyApp
```

## What's included

- Minimal app written in TSX (`index.tsx`)
- Entrypoint (`entrypoint.ts`)
  - This file will be bundled and placed under `install/share/org.example.MyApp` as `org.example.MyApp`, see the build script.
- Install tree (`install/`)
- Build script (`build.ts`)
- TypeScript configuration (`tsconfig.json`)
- Lock files for pnpm, yarn and bun. (`pnpm-lock.yaml`, `yarn.lock`, `bun.lockb`)

## Sidenotes

- We have different lock files for pnpm,yarn and bun. You may want to delete the ones you won't use.
