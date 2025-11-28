# ja-space-around-half-width-with-spaces テストケース

## スペースを含まない半角文字列（スペースなし）

### OK

- これはAPIです
- URLを確認してください
- HTMLタグを使用します
- CSSで装飾する
- JSONデータを送信

### NG

- これは API です（不要なスペース）
- URL を確認してください（不要なスペース）
- HTML タグを使用します（不要なスペース）

## スペースを含む半角文字列（スペースあり）

### OK

- これは Hello World です
- New York に行きました
- Good Morning と挨拶する

### NG

- これはHello Worldです（スペースが必要）
- New Yorkに行きました（スペースが必要）
- Good Morningと挨拶する（スペースが必要）

## 混在パターン

### OK

- APIを使って Hello World を表示
- URLは New York のサーバー
- HTMLで Good Morning を表示

### NG

- API を使ってHello Worldを表示（前半に不要なスペース、後半にスペースが必要）

## 半角コロンの後のスペース

### OK

- 例: これは正しい
- 注意: スペースが入っている
- 結果: 成功しました

### NG

- 例:これは間違い（スペースが必要）
- 注意:スペースがない（スペースが必要）
- 結果:失敗（スペースが必要）
