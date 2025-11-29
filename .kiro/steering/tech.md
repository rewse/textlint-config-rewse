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

## リリース方法

### バージョン管理

このプロジェクトは[Semantic Versioning](https://semver.org/)に従う。

- MAJOR: 破壊的変更（既存の設定との互換性がない変更）
- MINOR: 新機能追加（後方互換性あり）
- PATCH: バグ修正（後方互換性あり）

### リリース手順

1. **変更内容の確認**

```bash
# 変更されたファイルを確認
git status

# 差分を確認
git diff
```

2. **テストの実行**

```bash
# テストファイルでルールが正しく動作することを確認
npx textlint --config test/.textlintrc.json test/test.md
```

3. **バージョンの更新**

```bash
# パッチバージョンを上げる（バグ修正）
npm version patch

# マイナーバージョンを上げる（新機能追加）
npm version minor

# メジャーバージョンを上げる（破壊的変更）
npm version major
```

`npm version`コマンドは以下を自動的に実行する:
- `package.json`と`package-lock.json`のバージョン更新
- Gitコミットの作成
- バージョンタグの作成

4. **変更のプッシュ**

```bash
# コミットとタグをプッシュ
git push origin main
git push origin --tags
```

5. **npmへの公開**

```bash
# npmレジストリに公開
npm publish
```

初回公開時は`npm login`でログインが必要。

### リリース前のチェックリスト

- [ ] テストが通ることを確認
- [ ] README.mdが最新の状態か確認
- [ ] CHANGELOG（もしあれば）を更新
- [ ] package.jsonのバージョンが適切か確認
- [ ] 不要なファイルが含まれていないか確認（.npmignoreまたは.gitignore）

### トラブルシューティング

#### 公開権限がない場合

```bash
# パッケージのオーナーを確認
npm owner ls textlint-config-rewse

# オーナーを追加（既存のオーナーが実行）
npm owner add <username> textlint-config-rewse
```

#### タグの削除が必要な場合

```bash
# ローカルのタグを削除
git tag -d v1.0.0

# リモートのタグを削除
git push origin :refs/tags/v1.0.0
```

#### npmから公開を取り消す場合

```bash
# 公開後24時間以内のみ可能
npm unpublish textlint-config-rewse@1.0.0

# パッケージ全体を削除（注意: 復元不可）
npm unpublish textlint-config-rewse --force
```
