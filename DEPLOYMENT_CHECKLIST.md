# デプロイ前チェックリスト

## ✅ 完了した項目

### 1. 入力バリデーションとUX
- ✅ 販売価格の範囲チェック（300円〜9,999,999円）を実装
- ✅ 入力途中ではエラーを表示せず、onBlur時のみ表示
- ✅ エラー状態の時に計算結果が表示されない
- ✅ 全角数字やカンマの自動変換機能を追加

### 2. 配送ガイド
- ✅ 表形式で配送方法を網羅的に表示
- ✅ 厚さ制限（1cm以内、3cm以内、3cm以上）を明記
- ✅ 専用箱の必要性を記載

### 3. SEOとメタ情報
- ✅ `<title>` と `<meta name="description">` を設定
- ✅ OGPタグ（og:title, og:description, og:type）を設定
- ✅ Twitter Cardタグを設定
- ⚠️ **要対応**: `og:url` を実際のドメインに変更してください
- ⚠️ **要対応**: `og:image` と `twitter:image` の画像ファイル（1200x630px推奨）を `/public/og-image.png` に配置してください

### 4. 法的・信頼性情報
- ✅ 免責事項にメルカリ公式サイトへのリンクを追加
- ✅ プライバシーポリシーにCookie使用について記載
- ✅ 最終更新日を2026年1月に更新

### 5. レスポンシブと表示速度
- ✅ 表に `overflow-x-auto` を設定し、横スクロール対応
- ✅ console.logは使用されていないことを確認

## ⚠️ デプロイ前に必要な作業

### 1. ファビコンとOGP画像の準備
以下のファイルを `/public` ディレクトリに配置してください：

- `favicon.ico` (16x16, 32x32, 48x48のマルチサイズ)
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png` (180x180px)
- `og-image.png` (1200x630px推奨) - SNSシェア時に表示される画像

### 2. index.htmlの修正
`index.html` の以下の部分を実際のドメインに変更してください：

```html
<meta property="og:url" content="https://your-domain.com" />
```

### 3. ビルドとテスト
```bash
npm run build
npm run preview
```

ビルド後、`preview`コマンドで本番環境と同様の状態で動作確認を行ってください。

### 4. 実機テスト
- iPhone（Safari）
- Android（Chrome）
- iPad（Safari）

で実際に表示を確認し、表が横に突き抜けていないか確認してください。

## 📝 追加の推奨事項

### パフォーマンス最適化
- 画像の最適化（WebP形式の使用を検討）
- コード分割の確認（Viteが自動で行います）

### セキュリティ
- HTTPSの使用を確認
- CSP（Content Security Policy）の設定を検討

### アクセシビリティ
- スクリーンリーダーでの動作確認
- キーボード操作での全機能アクセス確認

