# textlint-config-rewse テストケース

## ja-space-around-phrase

### OKケース

これはAPIです。
URLを確認してください。
HTMLタグを使用します。

### NGケース（スペースがあるべきでない）

<!-- textlint-disable ja-space-around-phrase -->
これは API です。
URL を確認してください。
HTML タグを使用します。
<!-- textlint-enable ja-space-around-phrase -->

### OKケース（フレーズ）

これは Hello World です。
New York に行きました。
Good Morning と挨拶する。

### NGケース（スペースがあるべき）

<!-- textlint-disable ja-space-around-phrase -->
これはHello Worldです。
New Yorkに行きました。
Good Morningと挨拶する。
<!-- textlint-enable ja-space-around-phrase -->

## preset-japanese

### max-ten（読点の数）

#### OKケース

これは文章で、読点が3つまで、使われている例です。

#### NGケース

<!-- textlint-disable japanese/max-ten -->
これは文章で、読点が、4つ以上、使われている、例です。
<!-- textlint-enable japanese/max-ten -->

### no-doubled-joshi（二重助詞）

#### OKケース

私は彼が好きです。

#### NGケース

<!-- textlint-disable japanese/no-doubled-joshi,jtf-style/1.1.1.本文 -->
私は彼は好きだ。
<!-- textlint-enable japanese/no-doubled-joshi,jtf-style/1.1.1.本文 -->

### no-dropping-the-ra（ら抜き言葉）

#### OKケース

これは食べられます。
見られる景色が素晴らしいです。

#### NGケース

<!-- textlint-disable japanese/no-dropping-the-ra -->
これは食べれる。
見れる景色が素晴らしい。
<!-- textlint-enable japanese/no-dropping-the-ra -->

### sentence-length（文の長さ）

#### OKケース

これは適切な長さの文章です。読みやすく、理解しやすい長さに収まっています。

#### NGケース

<!-- textlint-disable japanese/sentence-length,japanese/max-ten,ja-technical-writing/sentence-length,ja-technical-writing/max-ten -->
これは非常に長い文章で、読点や接続詞を使って延々と続けられており、読者にとって理解しづらく、また途中で何を言いたいのか分からなくなってしまうような、避けるべき文章の典型的な例であり、このような文章は分割することが推奨されます。
<!-- textlint-enable japanese/sentence-length,japanese/max-ten,ja-technical-writing/sentence-length,ja-technical-writing/max-ten -->

## preset-jtf-style

### 句読点

#### OKケース

これは文章です。正しい句読点を使用しています。

### カタカナの長音

#### OKケース

コンピューター、サーバー、ユーザー

## preset-ja-technical-writing

### max-kanji-continuous-len（連続する漢字）

#### OKケース

この文章は適切です。

#### NGケース

<!-- textlint-disable ja-technical-writing/max-kanji-continuous-len -->
此文章漢字多用。
<!-- textlint-enable ja-technical-writing/max-kanji-continuous-len -->

### ja-no-successive-word（連続する単語）

#### OKケース

これは正しい文章です。

#### NGケース

<!-- textlint-disable ja-technical-writing/ja-no-successive-word -->
これはは間違った文章です。
<!-- textlint-enable ja-technical-writing/ja-no-successive-word -->

### ja-unnatural-alphabet（不自然なアルファベット）

#### OKケース

これはAPIです。

#### NGケース

<!-- textlint-disable ja-technical-writing/ja-unnatural-alphabet,jtf-style/2.1.9.アルファベット -->
これはＡＰＩです。
<!-- textlint-enable ja-technical-writing/ja-unnatural-alphabet,jtf-style/2.1.9.アルファベット -->

## ja-no-abusage（よくある誤用）

### OKケース

設定を適用する。
値を返す。
例外を捕捉する。

### NGケース

<!-- textlint-disable ja-technical-writing/ja-no-abusage,ja-no-abusage -->
設定を適応する。
値を返却する。
例外を補足する。
<!-- textlint-enable ja-technical-writing/ja-no-abusage,ja-no-abusage -->

## prefer-tari-tari

### OKケース

プログラムを書いたり、文章を書いたりする。
トイレに行ったり、ご飯を食べたりする時間もない。

### NGケース

<!-- textlint-disable prefer-tari-tari -->
プログラムを書いたり、文章を書いている。
トイレに行ったり、ご飯を食べる時間もない。
<!-- textlint-enable prefer-tari-tari -->

## preset-ai-writing

### no-ai-list-formatting

#### OKケース

- 重要な項目についての説明
- 完了した項目についての説明

#### NGケース

<!-- textlint-disable ai-writing/no-ai-list-formatting,ai-writing/no-ai-emphasis-patterns,ja-technical-writing/no-mix-dearu-desumasu,ja-space-around-phrase -->
- **重要**: これは重要な項目です
- ✅ 完了した項目
<!-- textlint-enable ai-writing/no-ai-list-formatting,ai-writing/no-ai-emphasis-patterns,ja-technical-writing/no-mix-dearu-desumasu,ja-space-around-phrase -->

### no-ai-hype-expressions

#### OKケース

効果的な技術で業界に変化をもたらします。
高いパフォーマンスを実現します。

#### NGケース

<!-- textlint-disable ai-writing/no-ai-hype-expressions -->
革命的な技術で業界を変えます。
究極のパフォーマンスを実現します。
<!-- textlint-enable ai-writing/no-ai-hype-expressions -->

### no-ai-emphasis-patterns

#### OKケース

これは重要な項目です。

#### NGケース

<!-- textlint-disable ai-writing/no-ai-emphasis-patterns -->
これは**非常に**重要な項目です。
<!-- textlint-enable ai-writing/no-ai-emphasis-patterns -->
