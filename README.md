# textlint-config-rewse

日本語の技術文書向けに、文法、表記、スペース、AI らしい文章表現をまとめてチェックするtextlintの共有設定です。

## 必要環境

- Node.js 20 以上
- textlint 15 以上
- npm 7 以上（ピア依存を自動でインストールするため）

## インストール

textlint本体と各ルールはピア依存です。npm 7 以降では、各ルールもプロジェクト直下に自動でインストールされます。

```bash
npm install --save-dev textlint textlint-config-rewse
```

## 使い方

### .textlintrc.js で読み込む

設定をそのまま使う場合は、プロジェクトのルートに置いた `.textlintrc.js` から読み込みます。textlint は `.textlintrc.js` を `--config` で渡すと正しく読み込めないため、ルートに置いて自動で見つけさせてください。

```javascript
module.exports = require('textlint-config-rewse');
```

一部のルールだけ変える場合は、スプレッド構文で上書きします。

```javascript
const config = require('textlint-config-rewse');

module.exports = {
  ...config,
  rules: {
    ...config.rules,
    'preset-ja-technical-writing': {
      ...config.rules['preset-ja-technical-writing'],
      'sentence-length': { max: 150 }
    }
  }
};
```

### 実行

```bash
npx textlint README.md docs/
npx textlint --fix README.md
```

## 含まれるルール

| ルール | 内容 |
| --- | --- |
| [preset-ai-writing](https://github.com/textlint-ja/textlint-rule-preset-ai-writing) | 機械的なリスト表記、誇張表現、過剰な強調など、AI生成文章に多いパターンを検出 |
| [preset-ja-technical-writing](https://github.com/textlint-ja/textlint-rule-preset-ja-technical-writing) | 文の長さ、漢字の連続、冗長な表現など、技術文書向けのルール |
| [preset-japanese](https://github.com/textlint-ja/textlint-rule-preset-japanese) | 読点の数、二重助詞、ら抜き言葉、敬体と常体の混在など、日本語の基本的なルール |
| [ja-no-abusage](https://github.com/textlint-ja/textlint-rule-ja-no-abusage) | 「適応」と「適用」のような、よくある誤用を検出 |
| [ja-space-around-phrase](https://github.com/rewse/textlint-rule-ja-space-around-phrase) | 全角文字と半角文字列の間のスペースを制御 |
| [prefer-tari-tari](https://github.com/textlint-ja/textlint-rule-prefer-tari-tari) | 「〜たり〜たりする」の片方が欠けた表現を検出 |

上流のデフォルトから変えている主な点は次のとおりです。

- `sentence-length` の上限を200文字に緩めている
- `ja-no-mixed-period`、`ja-no-weak-phrase`、`no-exclamation-question-mark` を無効にしている

### ja-space-around-phrase

半角文字列にスペースが含まれるかどうかで、前後のスペースの有無を決めます。

```markdown
これはAPIです
これは Hello World です
```

`API` のような単語は日本語に溶け込ませ、`Hello World` のようなフレーズはスペースで区切ります。リンク、画像、引用、コード、見出しはチェックしません。

## チェックの除外

コメントで範囲を指定して、チェックを止められます。

```markdown
<!-- textlint-disable -->
この部分はチェックされません
<!-- textlint-enable -->

<!-- textlint-disable prefer-tari-tari -->
このルールだけ止めます
<!-- textlint-enable prefer-tari-tari -->
```

特定の語句を常に除外したい場合は、`filters.allowlist.allow` に文字列か `/正規表現/` を追加します。

```javascript
const config = require('textlint-config-rewse');

module.exports = {
  ...config,
  filters: {
    ...config.filters,
    allowlist: { allow: ['特定の単語', '/正規表現パターン/'] }
  }
};
```

## ライセンス

MIT
