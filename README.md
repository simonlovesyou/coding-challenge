# coding-challenge
This coding challenge has been implemented as a mono repository. All auxiliary packages can be found in `packages/`, the script package can be found in `bin/` and the library implementing the main functionality of the program can be found in `lib/`

## Prerequisites
### yarn
This project uses the latest yarn version (v3.1.0) as a package manager, and is included in the repository. Make sure you have [latest 1.22.15 version of `yarn` installed on your system](https://classic.yarnpkg.com/lang/en/docs/install/) so that it can interop to the bundled yarn.

### node
Node version v16.13.0 was used during development, but it may or may not work with older version of node; YMMV.

## Setup
Install all dependencies
```
yarn install
```

## Usage
Send your matrix test cases through stdin to `./node_modules/.bin/distance-map-test`

## Testing
To run all tests for all packages, run `yarn test` in the root repository. To run tests for an auxiliary package, either navigate to that package and run `yarn test` or run `yarn workspace {WORKSPACE_NAME} run test` in repository root.