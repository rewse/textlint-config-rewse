---
inclusion: always
---

# textlint-config-rewse ルールガイド

このドキュメントでは、`textlint-config-rewse`に含まれる各ルールの詳細を説明します。

## 含まれるルールとプリセット

### textlint-rule-preset-japanese

日本語向けの一般的な文書で利用するためのルール集です。明らかな誤検知が少ないルールに限定されています。

#### 含まれるルール

- **max-ten**: 一文で使える読点（、）の数を制限（デフォルト: 3つまで）
- **no-doubled-conjunctive-particle-ga**: 逆接の接続助詞「が」が同一文中に複数回出現していないかチェック
- **no-doubled-conjunction**: 同じ接続詞で開始されていることを検出
- **no-double-negative-ja**: 二重否定の検出
- **no-doubled-joshi**: 二重助詞の検出（連続して同じ助詞が出た場合）
- **sentence-length**: 一文の最大の長さ（デフォルト: 100文字）
- **no-dropping-the-ra**: ら抜き言葉を使用しない
- **no-mix-dearu-desumasu**: 文の敬体（ですます調）、常体（である調）の混合をチェック
- **no-nfd**: Mac OS XでPDFやFinderからのコピペで発生する濁点のチェック
- **no-invalid-control-character**: 制御文字の検出
- **no-zero-width-spaces**: ゼロ幅スペースの検出
- **no-kangxi-radicals**: 康煕部首の検出

### textlint-rule-preset-jtf-style

[JTF日本語標準スタイルガイド（翻訳用）](https://www.jtf.jp/tips/styleguide)に基づくルールプリセットです。

#### 主要なルール

- **文体**: 敬体・常体の統一
- **句読点**: 全角の「、」と「。」を使用
- **文字種**: 
  - カタカナ: 全角、長音は省略しない
  - 算用数字: 半角
  - アルファベット: 半角
- **スペース**: 
  - 全角と半角の間: スペースなし
  - 全角どうし: スペースなし
  - カタカナ語間: 中黒または半角スペース
- **記号**: 
  - 感嘆符（！）、疑問符（？）: 全角、和文では多用しない
  - 中黒（・）: 全角
  - 波線（〜または～）: 全角
  - コロン（：）: 全角、和文では多用しない
- **かっこ**: 
  - 丸かっこ（）: 全角
  - 大かっこ［］: 全角
  - かぎかっこ「」: 全角
  - 二重かぎかっこ『』: 全角

### textlint-rule-preset-ja-technical-writing

技術文書向けのルールプリセットです。全体的に厳しめの設定がデフォルト値となっています。

#### 主要なルール

- **sentence-length**: 1文の長さは100文字以下
- **max-comma**: カンマは1文中に3つまで
- **max-ten**: 読点は1文中に3つまで
- **max-kanji-continuous-len**: 連続できる最大の漢字長は6文字まで
- **arabic-kanji-numbers**: 漢数字と算用数字を使い分ける
- **no-mix-dearu-desumasu**: 「ですます調」、「である調」を統一
- **ja-no-mixed-period**: 文末の句点記号として「。」を使用
- **no-double-negative-ja**: 二重否定は使用しない
- **no-dropping-the-ra**: ら抜き言葉を使用しない
- **no-doubled-conjunctive-particle-ga**: 逆接の接続助詞「が」を連続して使用しない
- **no-doubled-conjunction**: 同じ接続詞を連続して使用しない
- **no-doubled-joshi**: 同じ助詞を連続して使用しない
- **no-nfd**: UTF8-MAC 濁点を使用しない
- **no-invalid-control-character**: 不必要な制御文字を使用しない
- **no-zero-width-spaces**: 不必要なゼロ幅スペースを使用しない
- **no-exclamation-question-mark**: 感嘆符!！、疑問符?？を使用しない
- **no-hankaku-kana**: 半角カナを使用しない
- **ja-no-weak-phrase**: 弱い日本語表現を使用しない
- **ja-no-successive-word**: 同一の単語を間違えて連続しているのをチェック
- **ja-no-abusage**: よくある日本語の誤用をチェック
- **ja-no-redundant-expression**: 冗長な表現をチェック
- **ja-unnatural-alphabet**: 入力ミスで発生する不自然なアルファベットをチェック
- **no-unmatched-pair**: 対になっていない括弧をチェック

### textlint-rule-preset-ja-spacing

日本語周りにおけるスペースの有無を決定するルールプリセットです。

#### 含まれるルール

- **ja-space-between-half-and-full-width**: 半角文字と全角文字の間にスペースを入れるかどうか（デフォルト: 入れない）
- **ja-no-space-between-full-width**: 全角文字同士の間にスペースを入れない
- **ja-nakaguro-or-halfwidth-space-between-katakana**: カタカナ語間は中黒または半角スペースで区切る
- **ja-no-space-around-parentheses**: かっこの外側、内側ともにスペースを入れない
- **ja-space-after-exclamation**: 文末の感嘆符の後に全角スペースを挿入
- **ja-space-after-question**: 文末の疑問符の後に全角スペースを挿入
- **ja-space-around-code**: インラインコードの周りをスペースで囲むかどうか（デフォルト: 無効）
- **ja-space-around-link**: リンクの周りをスペースで囲むかどうか（デフォルト: 無効）

### textlint-rule-ja-no-abusage

よくある日本語の誤用をチェックするルールです。

#### 検出される誤用例

- 「適応」と「適用」の誤用
  - 設定は「適用」するもの
- 「値を返却する」の誤用
  - 正しくは「値を返す」
- 「可変する」の誤用
  - 「可変」は形容動詞で「する」は不要
- 「例外を補足する」の誤用
  - 正しくは「例外を捕捉する」

詳細は辞書の定義を参照:
- [dict/prh.yml](https://github.com/textlint-ja/textlint-rule-ja-no-abusage/blob/master/dict/prh.yml)
- [src/dictionary.ts](https://github.com/textlint-ja/textlint-rule-ja-no-abusage/blob/master/src/dictionary.ts)

### textlint-rule-prefer-tari-tari

「〜たり〜たりする」の使い方をチェックするルールです。

#### 検出される例

**NG**:
```
プログラムを書いたり、文章を書いている
トイレに行ったり、ご飯を食べる時間もない。
階段を上がったり、下がる。
```

**OK**:
```
プログラムを書いたり、提出する文章を書いたりする
トイレに行ったり、ご飯を食べたりする時間もない。
週末は買い物をしたりカフェに行ったりします。
```

例示・並列表現の「～たり、（～たり）する」において、片方が「〜たり」表現なのにもかかわらず、もう片方の動詞が「〜たり」ではない場合をエラーとします。

### textlint-rule-preset-ai-writing

AIが生成した文章によく見られる記述パターンを検出し、より自然な日本語表現を促すルールプリセットです。

#### 含まれるルール

- **no-ai-list-formatting**: リストアイテムで機械的な印象を与える記述パターンを検出
  - 例: `- **重要**: これは重要な項目です` → `- 重要な項目: これは重要な項目です`
  - 例: `- ✅ 完了した項目` → `- 完了した項目`

- **no-ai-hype-expressions**: AIライティングで過度に使用されがちな誇張表現を検出
  - 例: `革命的な技術で業界を変えます` → `効果的な技術で業界に変化をもたらします`
  - 例: `究極のパフォーマンスを実現します` → `高いパフォーマンスを実現します`

- **no-ai-emphasis-patterns**: AIが機械的に生成しがちな強調パターンを検出
  - 例: `これは**非常に**重要な項目です` → `これは重要な項目です`
  - 例: `# **重要なお知らせ**` → `# 重要なお知らせ`

- **no-ai-colon-continuation**: コロンの直後にブロック要素が続く英語的なパターンを検出
  - 例: `実行します:` → `実行方法は以下の通りです。`
  - 形態素解析を使用して、述語で終わる表現のみを検出

- **ai-tech-writing-guideline**: テクニカルライティングのベストプラクティスに基づく改善提案
  - 簡潔性: 冗長表現の排除（`まず最初に` → `まず`）
  - 明確性: 能動態の使用推奨
  - 具体性: 抽象的表現の具体化
  - 一貫性: 用語と表現の統一
  - 構造化: 文の長さと情報整理

### textlint-rule-ja-space-around-half-width-with-spaces

全角文字と半角文字列の間のスペースを、半角文字列にスペースが含まれるかどうかで制御するカスタムルールです。

#### ルールの詳細

このルールは、全角文字と半角文字列の間のスペースの有無を、半角文字列の内容に応じて判定します。

##### スペースを含まない半角文字列

スペースを含まない半角文字列（例: `API`, `URL`, `HTML`）と全角文字の間には、スペースを入れません。

**OK**:
```
これはAPIです
URLを確認してください
HTMLタグを使用します
```

**NG**:
```
これは API です
URL を確認してください
HTML タグを使用します
```

##### スペースを含む半角文字列

スペースを含む半角文字列（例: `Hello World`, `New York`）と全角文字の間には、スペースを入れます。

**OK**:
```
これは Hello World です
New York に行きました
Good Morning と挨拶する
```

**NG**:
```
これはHello Worldです
New Yorkに行きました
Good Morningと挨拶する
```

##### 設計の意図

- 単語レベルの半角文字列（技術用語、略語など）は日本語の一部として扱い、スペースなしで自然に読める
- フレーズレベルの半角文字列（複数単語）は独立した要素として扱い、スペースで区切ることで可読性を向上

##### 除外対象

以下の要素内では検査を行いません：

- リンク
- 画像
- 引用
- コードブロック
- 見出し

## 参考リンク

- [textlint-rule-preset-japanese](https://github.com/textlint-ja/textlint-rule-preset-japanese)
- [textlint-rule-preset-jtf-style](https://github.com/textlint-ja/textlint-rule-preset-JTF-style)
- [textlint-rule-preset-ja-technical-writing](https://github.com/textlint-ja/textlint-rule-preset-ja-technical-writing)
- [textlint-rule-preset-ja-spacing](https://github.com/textlint-ja/textlint-rule-preset-ja-spacing)
- [textlint-rule-ja-no-abusage](https://github.com/textlint-ja/textlint-rule-ja-no-abusage)
- [textlint-rule-prefer-tari-tari](https://github.com/textlint-ja/textlint-rule-prefer-tari-tari)
- [textlint-rule-preset-ai-writing](https://github.com/textlint-ja/textlint-rule-preset-ai-writing)
