# プロジェクト構造

## ディレクトリ構成

```
textlint-config-rewse/
├── .kiro/              # Kiro設定とステアリングルール
│   └── steering/       # AIアシスタント向けガイドライン
├── .vscode/            # VSCode設定
│   └── settings.json   # エディタ設定（ファイル関連付けなど）
├── node_modules/       # npmパッケージ
├── .gitignore          # Git除外設定
├── .textlintrc.sample  # textlint設定のサンプルファイル
├── index.js            # メインエントリーポイント（設定のエクスポート）
├── LICENSE             # MITライセンス
├── README.md           # プロジェクトドキュメント
├── package.json        # パッケージメタデータと依存関係
└── package-lock.json   # 依存関係のロックファイル
```

## 主要ファイル

### index.js

textlint設定オブジェクトをエクスポートするメインファイル。

構造:
- `filters`: フィルタールールの設定
  - `allowlist`: 許可リスト
  - `comments`: コメントによる無効化
- `rules`: 各ルールとプリセットの設定

### .textlintrc.sample

ユーザーがこの設定パッケージを使用する際の参考となるサンプル設定ファイル。

内容:
- 基本的な`extends`の使い方
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

### .vscode/settings.json

VSCode用のエディタ設定ファイル。

設定内容:
- `.textlintrc.sample`をJSONコメント付き（jsonc）として認識させる

## 設計パターン

### 共有可能な設定パターン

このパッケージは「共有可能な設定」として設計されており、他のプロジェクトから`extends`で参照される。

### 設定の上書き

ユーザーは個別のルールを上書き可能:

```json
{
  "extends": ["textlint-config-rewse"],
  "rules": {
    "preset-ja-technical-writing": {
      "sentence-length": {
        "max": 150
      }
    }
  }
}
```

## 命名規則

- パッケージ名: `textlint-config-<name>`形式
- ファイル名: kebab-case
- 設定キー: kebab-case
