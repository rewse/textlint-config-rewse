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
- textlint-rule-ja-space-around-phrase

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

`.textlintrc.json.sample`をコピーして使用:

```bash
cp node_modules/textlint-config-rewse/.textlintrc.json.sample .textlintrc.json
```

必要に応じて設定を調整する。

textlintの実行:

```bash
npx textlint <file>
```

### テスト

カスタムルールのテスト:

```bash
# テストファイルのチェック
npx textlint --config test/.textlintrc.json test/test.md
```

テストファイルの構成:
- `test/.textlintrc.json`: テスト用のtextlint設定ファイル
- `test/test.md`: テストケースを含むMarkdownファイル

テストケースには以下が含まれる:
- OKケース: ルールに準拠した正しい例
- NGケース: ルール違反でエラーが検出されるべき例

### 開発時の注意

- モジュールタイプ: CommonJS (`type: "commonjs"`)
- エントリーポイント: `index.js`
- 設定のエクスポート: `module.exports`形式
- サンプルファイル: `.textlintrc.json.sample`を提供し、ユーザーが直接コピーして使用できるようにする
