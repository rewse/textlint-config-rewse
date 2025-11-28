# textlint-config-rewse

rewse用の日本語技術文書向け共有可能なtextlint設定パッケージ

## 概要

rewseが日本語の技術文書やドキュメントを書く際に、一貫性のある品質の高い文章を維持するための包括的なルールセットを提供します。

## 特徴

- 複数のtextlintプリセットを統合した設定
- 日本語の文法、スタイル、スペーシングルールを包括的にカバー
- AI生成文章の検出と改善提案
- フィルタールールによる柔軟な除外設定

## インストール

```bash
npm install --save-dev textlint-config-rewse
```

## 使い方

### CLIで直接指定

```bash
# ファイルをチェック
npx textlint --config textlint-config-rewse README.md

# ディレクトリをチェック
npx textlint --config textlint-config-rewse docs/

# 自動修正
npx textlint --config textlint-config-rewse --fix README.md
```

### 設定ファイルで使用

`.textlintrc.json`を作成して、必要なルールのみを有効化：

```json
{
  "rules": {
    "ja-space-around-phrase": true,
    "preset-japanese": true,
    "preset-ja-technical-writing": {
      "sentence-length": {
        "max": 100
      }
    }
  }
}
```

設定ファイルを作成した場合は、`--config`オプションなしで実行できます：

```bash
npx textlint README.md
```

## 含まれるルールセット

### preset-japanese

日本語の基本的な文法チェック

- 一文で使える読点の数を制限
- 二重助詞の検出
- ら抜き言葉の検出
- 敬体・常体の混在チェック

### preset-jtf-style

JTF日本語標準スタイルガイド準拠

- 句読点の統一
- 全角・半角の使い分け
- カタカナ語の表記ルール

### preset-ja-technical-writing

技術文書向けルール

- 文の長さ制限
- 漢字の連続制限
- 弱い表現の検出
- 冗長な表現のチェック

### ja-no-abusage

よくある日本語の誤用検出

- 「適応」と「適用」の誤用
- 「補足」と「捕捉」の誤用

### prefer-tari-tari

「〜たり〜たり」の正しい使用をチェック

### preset-ai-writing

AI生成文章の検出と改善提案

- 機械的なリスト表現の検出
- 過度な誇張表現の検出
- 不自然な強調パターンの検出

### ja-space-around-phrase

全角文字とフレーズ（複数単語の半角文字列）の間のスペースを制御

- スペースを含まない半角文字列（例: `API`, `URL`）と全角文字の間はスペースなし
- スペースを含む半角文字列（例: `Hello World`, `New York`）と全角文字の間はスペースあり

### カスタマイズ

個別のルールを上書きすることができます。

```json
{
  "rules": {
    "preset-ja-technical-writing": {
      "sentence-length": {
        "max": 150
      },
      "ja-no-weak-phrase": false
    }
  }
}
```

## フィルタールール

### コメントによる無効化

```markdown
<!-- textlint-disable -->
この部分はチェックされません
<!-- textlint-enable -->

<!-- textlint-disable rule-name -->
特定のルールのみ無効化
<!-- textlint-enable rule-name -->
```

### 許可リスト

特定の単語やパターンをチェック対象から除外できます。

```json
{
  "filters": {
    "allowlist": {
      "allow": [
        "特定の単語",
        "/正規表現パターン/"
      ]
    }
  }
}
```
