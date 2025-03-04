# @verdaccio/server-fastify

## 6.0.0-6-next.33

### Patch Changes

- @verdaccio/core@6.0.0-6-next.52
- @verdaccio/config@6.0.0-6-next.52
- @verdaccio/auth@6.0.0-6-next.31
- @verdaccio/tarball@11.0.0-6-next.21
- @verdaccio/logger@6.0.0-6-next.20
- @verdaccio/store@6.0.0-6-next.32
- @verdaccio/utils@6.0.0-6-next.20

## 6.0.0-6-next.32

### Minor Changes

- a23628be: feat: parse and sanitize on ui

### Patch Changes

- Updated dependencies [4b29d715]
  - @verdaccio/auth@6.0.0-6-next.30
  - @verdaccio/config@6.0.0-6-next.51
  - @verdaccio/core@6.0.0-6-next.51
  - @verdaccio/store@6.0.0-6-next.31
  - @verdaccio/tarball@11.0.0-6-next.20
  - @verdaccio/logger@6.0.0-6-next.19
  - @verdaccio/utils@6.0.0-6-next.19

## 6.0.0-6-next.31

### Patch Changes

- @verdaccio/core@6.0.0-6-next.50
- @verdaccio/config@6.0.0-6-next.50
- @verdaccio/auth@6.0.0-6-next.29
- @verdaccio/tarball@11.0.0-6-next.19
- @verdaccio/logger@6.0.0-6-next.18
- @verdaccio/store@6.0.0-6-next.30
- @verdaccio/utils@6.0.0-6-next.18

## 6.0.0-6-next.30

### Patch Changes

- Updated dependencies [ce013d2f]
  - @verdaccio/store@6.0.0-6-next.29
  - @verdaccio/tarball@11.0.0-6-next.18
  - @verdaccio/core@6.0.0-6-next.49
  - @verdaccio/config@6.0.0-6-next.49
  - @verdaccio/auth@6.0.0-6-next.28
  - @verdaccio/logger@6.0.0-6-next.17
  - @verdaccio/utils@6.0.0-6-next.17

## 6.0.0-6-next.29

### Major Changes

- 9fc2e796: feat(plugins): improve plugin loader

  ### Changes

  - Add scope plugin support to 6.x https://github.com/verdaccio/verdaccio/pull/3227
  - Avoid config collisions https://github.com/verdaccio/verdaccio/issues/928
  - https://github.com/verdaccio/verdaccio/issues/1394
  - `config.plugins` plugin path validations
  - Updated algorithm for plugin loader.
  - improved documentation (included dev)

  ## Features

  - Add scope plugin support to 6.x https://github.com/verdaccio/verdaccio/pull/3227
  - Custom prefix:

  ```
  // config.yaml
  server:
    pluginPrefix: mycompany
  middleware:
    audit:
        foo: 1
  ```

  This configuration will look up for `mycompany-audit` instead `Verdaccio-audit`.

  ## Breaking Changes

  ### sinopia plugins

  - `sinopia` fallback support is removed, but can be restored using `pluginPrefix`

  ### plugin filter

  - method rename `filter_metadata`->`filterMetadata`

  ### Plugin constructor does not merge configs anymore https://github.com/verdaccio/verdaccio/issues/928

  The plugin receives as first argument `config`, which represents the config of the plugin. Example:

  ```
  // config.yaml
  auth:
    plugin:
       foo: 1
       bar: 2

  export class Plugin<T> {
    public constructor(config: T, options: PluginOptions) {
      console.log(config);
      // {foo:1, bar: 2}
   }
  }
  ```

### Minor Changes

- 62c24b63: feat: add passwordValidationRegex property

### Patch Changes

- 43f32687: fix: abbreviated headers handle quality values
- Updated dependencies [43f32687]
- Updated dependencies [9fc2e796]
- Updated dependencies [62c24b63]
  - @verdaccio/core@6.0.0-6-next.48
  - @verdaccio/store@6.0.0-6-next.28
  - @verdaccio/auth@6.0.0-6-next.27
  - @verdaccio/config@6.0.0-6-next.48
  - @verdaccio/utils@6.0.0-6-next.16
  - @verdaccio/tarball@11.0.0-6-next.17
  - @verdaccio/logger@6.0.0-6-next.16
  - @verdaccio/readme@11.0.0-6-next.6

## 6.0.0-6-next.28

### Patch Changes

- @verdaccio/core@6.0.0-6-next.47
- @verdaccio/config@6.0.0-6-next.47
- @verdaccio/auth@6.0.0-6-next.26
- @verdaccio/tarball@11.0.0-6-next.16
- @verdaccio/logger@6.0.0-6-next.15
- @verdaccio/store@6.0.0-6-next.27
- @verdaccio/utils@6.0.0-6-next.15

## 6.0.0-6-next.27

### Patch Changes

- Updated dependencies [b849128d]
  - @verdaccio/core@6.0.0-6-next.8
  - @verdaccio/store@6.0.0-6-next.26
  - @verdaccio/auth@6.0.0-6-next.25
  - @verdaccio/config@6.0.0-6-next.17
  - @verdaccio/tarball@11.0.0-6-next.15
  - @verdaccio/logger@6.0.0-6-next.14
  - @verdaccio/utils@6.0.0-6-next.14
  - @verdaccio/readme@11.0.0-6-next.6

## 6.0.0-6-next.26

### Patch Changes

- 351aeeaa: fix(deps): @verdaccio/utils should be a prod dep of local-storage
- Updated dependencies [351aeeaa]
  - @verdaccio/auth@6.0.0-6-next.24
  - @verdaccio/core@6.0.0-6-next.7
  - @verdaccio/readme@11.0.0-6-next.6
  - @verdaccio/tarball@11.0.0-6-next.14
  - @verdaccio/logger@6.0.0-6-next.13
  - @verdaccio/store@6.0.0-6-next.25
  - @verdaccio/config@6.0.0-6-next.16
  - @verdaccio/utils@6.0.0-6-next.13

## 6.0.0-6-next.25

### Minor Changes

- 37274e4c: feat: implement abbreviated manifest

  Enable abbreviated manifest data by adding the header:

  ```
  curl -H "Accept: application/vnd.npm.install-v1+json" https://registry.npmjs.org/verdaccio
  ```

  It returns a filtered manifest, additionally includes the [time](https://github.com/pnpm/rfcs/pull/2) field by request.

  Current support for packages managers:

  - npm: yes
  - pnpm: yes
  - yarn classic: yes
  - yarn modern (+2.x): [no](https://github.com/yarnpkg/berry/pull/3981#issuecomment-1076566096)

  https://github.com/npm/registry/blob/master/docs/responses/package-metadata.md#abbreviated-metadata-format

### Patch Changes

- Updated dependencies [37274e4c]
  - @verdaccio/store@6.0.0-6-next.24
  - @verdaccio/auth@6.0.0-6-next.23
  - @verdaccio/core@6.0.0-6-next.6
  - @verdaccio/readme@11.0.0-6-next.5
  - @verdaccio/tarball@11.0.0-6-next.13
  - @verdaccio/logger@6.0.0-6-next.12

## 6.0.0-6-next.24

### Minor Changes

- 00d1d2a1: chore: env variable for launch fastify

  - Update fastify to major release `v4.3.0`
  - Update CLI launcher

  via CLI

  ```
  VERDACCIO_SERVER=fastify verdaccio
  ```

  with docker

  ```
  docker run -it --rm --name verdaccio \
    -e "VERDACCIO_SERVER=8080" -p 8080:8080 \
    -e "VERDACCIO_SERVER=fastify" \
    verdaccio/verdaccio
  ```

### Patch Changes

- Updated dependencies [292c0a37]
- Updated dependencies [a3a209b5]
- Updated dependencies [00d1d2a1]
  - @verdaccio/auth@6.0.0-6-next.23
  - @verdaccio/config@6.0.0-6-next.15
  - @verdaccio/core@6.0.0-6-next.6
  - @verdaccio/readme@11.0.0-6-next.5
  - @verdaccio/tarball@11.0.0-6-next.13
  - @verdaccio/logger@6.0.0-6-next.12
  - @verdaccio/store@6.0.0-6-next.23
  - @verdaccio/utils@6.0.0-6-next.12

## 6.0.0-6-next.23

### Patch Changes

- Updated dependencies [d43894e8]
- Updated dependencies [d08fe29d]
  - @verdaccio/config@6.0.0-6-next.14
  - @verdaccio/auth@6.0.0-6-next.22
  - @verdaccio/store@6.0.0-6-next.22
  - @verdaccio/core@6.0.0-6-next.5
  - @verdaccio/readme@11.0.0-6-next.4
  - @verdaccio/tarball@11.0.0-6-next.12
  - @verdaccio/logger@6.0.0-6-next.11

## 6.0.0-6-next.22

### Patch Changes

- Updated dependencies [82cb0f2b]
- Updated dependencies [5167bb52]
  - @verdaccio/config@6.0.0-6-next.13
  - @verdaccio/core@6.0.0-6-next.5
  - @verdaccio/logger@6.0.0-6-next.11
  - @verdaccio/store@6.0.0-6-next.21
  - @verdaccio/auth@6.0.0-6-next.21
  - @verdaccio/tarball@11.0.0-6-next.12
  - @verdaccio/utils@6.0.0-6-next.11
  - @verdaccio/readme@11.0.0-6-next.4

## 6.0.0-6-next.21

### Patch Changes

- @verdaccio/auth@6.0.0-6-next.20
- @verdaccio/store@6.0.0-6-next.20

## 6.0.0-6-next.20

### Patch Changes

- Updated dependencies [aeff267d]
  - @verdaccio/auth@6.0.0-6-next.19

## 6.0.0-6-next.19

### Patch Changes

- Updated dependencies [b78f3525]
  - @verdaccio/logger@6.0.0-6-next.10
  - @verdaccio/auth@6.0.0-6-next.18
  - @verdaccio/store@6.0.0-6-next.19

## 6.0.0-6-next.18

### Patch Changes

- Updated dependencies [730b5d8c]
  - @verdaccio/logger@6.0.0-6-next.9
  - @verdaccio/auth@6.0.0-6-next.17
  - @verdaccio/store@6.0.0-6-next.18

## 6.0.0-6-next.17

### Major Changes

- a828271d: refactor: download manifest endpoint and integrate fastify

  Much simpler API for fetching a package

  ```
   const manifest = await storage.getPackageNext({
        name,
        uplinksLook: true,
        req,
        version: queryVersion,
        requestOptions,
   });
  ```

  > not perfect, the `req` still is being passed to the proxy (this has to be refactored at proxy package) and then removed from here, in proxy we pass the request instance to the `request` library.

  ### Details

  - `async/await` sugar for getPackage()
  - Improve and reuse code between current implementation and new fastify endpoint (add scaffolding for request manifest)
  - Improve performance
  - Add new tests

  ### Breaking changes

  All storage plugins will stop to work since the storage uses `getPackageNext` method which is Promise based, I won't replace this now because will force me to update all plugins, I'll follow up in another PR. Currently will throw http 500

### Patch Changes

- Updated dependencies [a828271d]
- Updated dependencies [24b9be02]
- Updated dependencies [e75c0a3b]
- Updated dependencies [b13a3fef]
  - @verdaccio/tarball@11.0.0-6-next.11
  - @verdaccio/store@6.0.0-6-next.17
  - @verdaccio/utils@6.0.0-6-next.10
  - @verdaccio/core@6.0.0-6-next.4
  - @verdaccio/logger@6.0.0-6-next.8
  - @verdaccio/auth@6.0.0-6-next.16
  - @verdaccio/config@6.0.0-6-next.12
  - @verdaccio/readme@11.0.0-6-next.4

## 6.0.0-6-next.16

### Minor Changes

- f86c31ed: feat: migrate web sidebar endpoint to fastify

  reuse utils methods between packages

- 20c9e43e: dist tags Implementation on Fastify

### Patch Changes

- Updated dependencies [f86c31ed]
- Updated dependencies [20c9e43e]
  - @verdaccio/store@6.0.0-6-next.16
  - @verdaccio/utils@6.0.0-6-next.9
  - @verdaccio/auth@6.0.0-6-next.15
  - @verdaccio/config@6.0.0-6-next.11
  - @verdaccio/tarball@11.0.0-6-next.10

## 6.0.0-6-next.15

### Patch Changes

- Updated dependencies [6c1eb021]
  - @verdaccio/core@6.0.0-6-next.3
  - @verdaccio/logger@6.0.0-6-next.7
  - @verdaccio/auth@6.0.0-6-next.14
  - @verdaccio/config@6.0.0-6-next.10
  - @verdaccio/tarball@11.0.0-6-next.9
  - @verdaccio/store@6.0.0-6-next.15
  - @verdaccio/utils@6.0.0-6-next.8

## 6.0.0-6-next.14

### Major Changes

- 794af76c: Remove Node 12 support

  - We need move to the new `undici` and does not support Node.js 12

### Minor Changes

- b702ea36: abort search request support for proxy
- 154b2ecd: refactor: remove @verdaccio/commons-api in favor @verdaccio/core and remove duplications

### Patch Changes

- Updated dependencies [794af76c]
- Updated dependencies [b702ea36]
- Updated dependencies [154b2ecd]
  - @verdaccio/auth@6.0.0-6-next.13
  - @verdaccio/config@6.0.0-6-next.9
  - @verdaccio/logger@6.0.0-6-next.6
  - @verdaccio/store@6.0.0-6-next.14

## 6.0.0-6-next.13

### Patch Changes

- Updated dependencies [2c594910]
  - @verdaccio/logger@6.0.0-6-next.5
  - @verdaccio/auth@6.0.0-6-next.12
  - @verdaccio/store@6.0.0-6-next.13

## 6.0.0-6-next.12

### Major Changes

- 459b6fa7: refactor: search v1 endpoint and local-database

  - refactor search `api v1` endpoint, improve performance
  - remove usage of `async` dependency https://github.com/verdaccio/verdaccio/issues/1225
  - refactor method storage class
  - create new module `core` to reduce the ammount of modules with utilities
  - use `undici` instead `node-fetch`
  - use `fastify` instead `express` for functional test

  ### Breaking changes

  - plugin storage API changes
  - remove old search endpoint (return 404)
  - filter local private packages at plugin level

  The storage api changes for methods `get`, `add`, `remove` as promise base. The `search` methods also changes and recieves a `query` object that contains all query params from the client.

  ```ts
  export interface IPluginStorage<T> extends IPlugin {
    add(name: string): Promise<void>;
    remove(name: string): Promise<void>;
    get(): Promise<any>;
    init(): Promise<void>;
    getSecret(): Promise<string>;
    setSecret(secret: string): Promise<any>;
    getPackageStorage(packageInfo: string): IPackageStorage;
    search(query: searchUtils.SearchQuery): Promise<searchUtils.SearchItem[]>;
    saveToken(token: Token): Promise<any>;
    deleteToken(user: string, tokenKey: string): Promise<any>;
    readTokens(filter: TokenFilter): Promise<Token[]>;
  }
  ```

### Patch Changes

- Updated dependencies [459b6fa7]
  - @verdaccio/auth@6.0.0-6-next.11
  - @verdaccio/config@6.0.0-6-next.8
  - @verdaccio/store@6.0.0-6-next.12
  - @verdaccio/logger@6.0.0-6-next.4

## 6.0.0-6-next.11

### Patch Changes

- df0da3d6: Added core-js missing from dependencies though referenced in .js sources
  - @verdaccio/auth@6.0.0-6-next.10
  - @verdaccio/store@6.0.0-6-next.11

## 6.0.0-6-next.10

### Minor Changes

- 55ee3fdd: [Fastify] Add ping endpoint
