# textlint-config-rewse

A shareable textlint config for Japanese technical documents, published to npm as `textlint-config-rewse`. It bundles `preset-ai-writing`, `preset-ja-technical-writing`, `preset-japanese`, `ja-no-abusage`, `ja-space-around-phrase`, and `prefer-tari-tari`, plus the `allowlist` and `comments` filters. `textlint`, the rules, and the filters are all peer dependencies, because textlint resolves rule names from the user's project root and would silently load a different top-level copy instead of one nested under this package. Add new rules to `peerDependencies`, not `dependencies`.

## Configuration

`index.js` (CommonJS `module.exports`) is the only definition of the config and the package entry point. Users load it from a `.textlintrc.js` with `require`, and `test/.textlintrc.js` does the same with `require('../index.js')`.

textlint only evaluates a `.textlintrc.js` it finds on its own; passing one through `--config` reads it as plain text and loads no rules. That is why `npm test` runs `cd test && textlint test.md` instead of using `--config`.

## Testing

`npm test` lints `test/test.md` with `test/.textlintrc.js`. Each rule section in `test/test.md` has OK cases that must pass and NG cases wrapped in `<!-- textlint-disable <rule> -->` / `<!-- textlint-enable <rule> -->` so the suite stays green. Add both kinds of case when adding or changing a rule.

## ja-space-around-phrase

This rule decides spacing between full-width text and a half-width string by whether the half-width string itself contains a space. A single token takes no surrounding space (`これはAPIです`); a multi-word phrase takes a space on each side (`これは Hello World です`). Links, images, blockquotes, code, and headings are not checked.

## Releasing

Versions follow SemVer, where a major bump means a config change that breaks existing users' documents. `npm run release:<patch|minor|major>` bumps the version, commits, tags, and pushes. The `v*` tag triggers `.github/workflows/release.yml`, which tests, creates the GitHub release with git-cliff notes, and publishes to npm through Trusted Publishing, so do not run `npm publish` locally.

## Supply-Chain Security

Keep `ignore-scripts=true` in `.npmrc`. If a dependency ever needs install scripts, such as a native module, allow that package by name with `@lavamoat/allow-scripts` instead of lifting the setting.

Workflows that run `npm ci` install Aikido Safe Chain first. The release workflow sets `SAFE_CHAIN_MINIMUM_PACKAGE_AGE_HOURS: 96` to block packages published within the last four days; keep that value.

When adding or updating a dependency, avoid versions published less than 96 hours ago, read the changelog, and run `osv-scanner --lockfile package-lock.json` and `npm test`. Fix vulnerable transitive dependencies by raising the floor in `overrides` in `package.json`.

Report vulnerabilities in this project through GitHub Security Advisories, not public issues.

## Validation

Before pushing, run `uvx pre-commit run --all-files` and `npm test`, and commit any files the hooks reformat. Stage new files first, because `--all-files` skips untracked files. CI runs the same hooks, and `core.hooksPath` points at git-defender, so `pre-commit install` cannot run them at commit time.
