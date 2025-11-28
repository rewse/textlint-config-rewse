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
- textlint-rule-preset-ja-spacing
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

# .textlintrcで使用
{
  "extends": ["textlint-config-rewse"]
}

# textlintの実行
npx textlint <file>
```

### 開発時の注意

- モジュールタイプ: CommonJS (`type: "commonjs"`)
- エントリーポイント: `index.js`
- 設定のエクスポート: `module.exports`形式
