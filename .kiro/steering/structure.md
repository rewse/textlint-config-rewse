# プロジェクト構造

## ディレクトリ構成

```
textlint-config-rewse/
├── .git/                   # Gitリポジトリ
├── .kiro/                  # Kiro設定とステアリングルール
├── .vscode/                # VSCode設定
├── node_modules/           # npmパッケージ
├── test/                   # テストファイル
│   ├── .textlintrc.json    # テスト用textlint設定
│   └── test.md             # テストケース
├── .gitignore              # Git除外設定
├── .textlintrc.json.sample # textlint設定のサンプルファイル（JSON形式）
├── index.js                # メインエントリーポイント（設定のエクスポート）
├── LICENSE                 # MITライセンス
├── README.md               # プロジェクトドキュメント
├── package.json            # パッケージメタデータと依存関係
└── package-lock.json       # 依存関係のロックファイル
```

## 主要ファイル

### index.js

textlint設定オブジェクトをエクスポートするメインファイル。

構造:
- `filters`: フィルタールールの設定
  - `allowlist`: 許可リスト
  - `comments`: コメントによる無効化
- `rules`: 各ルールとプリセットの設定

### .textlintrc.json.sample

ユーザーがこの設定パッケージを使用する際の参考となるサンプル設定ファイル（JSON形式）。

内容:
- 基本的な設定構造
- よく調整される設定項目の例
- ルールの個別カスタマイズ方法
- フィルタールールの使用例

### package.json

npmパッケージの定義ファイル。

重要なフィールド:
- `name`: パッケージ名
- `main`: エントリーポイント
- `dependencies`: 必要なtextlintルール
- `keywords`: 検索用キーワード
- `repository`: GitHubリポジトリ情報

## 設計パターン

### 共有可能な設定パターン

このパッケージは「共有可能な設定」として設計されている。ユーザーは以下の方法で使用できる:

1. `.textlintrc.js`で`require()`して使用
2. `.textlintrc.json`で直接ルールを記述（サンプルファイルを参考）

### 設定の上書き

#### JavaScript形式（.textlintrc.js）

スプレッド構文を使って個別のルールを上書き可能:

```javascript
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

#### JSON形式（.textlintrc.json）

サンプルファイルをコピーして、必要な部分を修正する。

## 命名規則

- パッケージ名: `textlint-config-<name>`形式
- ファイル名: kebab-case
- 設定キー: kebab-case
