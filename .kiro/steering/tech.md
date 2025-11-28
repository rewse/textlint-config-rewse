# 技術スタック

## 言語とランタイム

- JavaScript (CommonJS)
- Node.js

## 主要な依存関係

### textlint本体

- textlint

### フィルタールール

- textlint-filter-rule-allowlist
- textlint-filter-rule-comments

### ルールとプリセット

- textlint-rule-preset-japanese
- textlint-rule-preset-jtf-style
- textlint-rule-preset-ja-technical-writing
- textlint-rule-ja-no-abusage
- textlint-rule-prefer-tari-tari
- textlint-rule-preset-ai-writing

## パッケージ管理

- npm (package-lock.jsonを使用)

## よく使うコマンド

### インストール

```bash
npm install
```

### 使用方法

このパッケージは共有可能な設定として使用される。

```bash
# 他のプロジェクトでインストール
npm install --save-dev textlint-config-rewse
```

`.textlintrc.js`で使用:

```javascript
// 基本的な使い方
module.exports = require('textlint-config-rewse');

// カスタマイズする場合
const config = require('textlint-config-rewse');

module.exports = {
  ...config,
  rules: {
    ...config.rules,
    "preset-ja-technical-writing": {
      ...config.rules["preset-ja-technical-writing"],
      "sentence-length": {
        "max": 150
      }
    }
  }
};
```

textlintの実行:

```bash
npx textlint <file>
```

### テスト

カスタムルールのテスト:

```bash
# ja-space-around-half-width-with-spacesルールのテスト
npx textlint --config .textlintrc.test.js rules/ja-space-around-half-width-with-spaces.test.md
```

テストファイルの構成:
- `.textlintrc.test.js`: テスト用のtextlint設定ファイル
- `rules/ja-space-around-half-width-with-spaces.test.md`: テストケースを含むMarkdownファイル

テストケースには以下が含まれる:
- OKケース: ルールに準拠した正しい例
- NGケース: ルール違反でエラーが検出されるべき例

### 開発時の注意

- モジュールタイプ: CommonJS (`type: "commonjs"`)
- エントリーポイント: `index.js`
- 設定のエクスポート: `module.exports`形式
- **重要**: textlintは現在、`.textlintrc.json`での`extends`による共有可能な設定の継承をサポートしていない（[textlint#210](https://github.com/textlint/textlint/issues/210)）。そのため、ユーザーは`.textlintrc.js`で`require()`を使用する必要がある
