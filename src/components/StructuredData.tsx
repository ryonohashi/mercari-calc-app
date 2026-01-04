export default function StructuredData() {
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "メルカリ利益計算機",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "JPY"
    },
    "description": "メルカリ出品者が販売価格から手数料や送料を差し引いた正確な利益を計算するためのWebアプリケーション。ゆうパケット、ネコポス、宅急便など全配送方法に対応。",
    "featureList": [
      "リアルタイム利益計算",
      "配送方法別送料計算",
      "目標利益からの逆算機能",
      "初心者向け配送ガイド"
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "メルカリ利益計算機の使い方",
    "description": "メルカリ出品時の利益を正確に計算する方法",
    "step": [
      {
        "@type": "HowToStep",
        "name": "販売価格を入力",
        "text": "メルカリに出品する予定の商品価格を入力してください。最低300円から9,999,999円まで入力可能です。"
      },
      {
        "@type": "HowToStep",
        "name": "配送方法を選択",
        "text": "商品のサイズや重量に応じて、最適な配送方法を選択してください。ゆうパケットポストmini、ネコポス、宅急便など、7種類の配送方法から選択できます。"
      },
      {
        "@type": "HowToStep",
        "name": "原価情報を入力",
        "text": "仕入れ値と梱包資材費を入力してください。これらの情報を正確に入力することで、より正確な利益計算が可能になります。"
      },
      {
        "@type": "HowToStep",
        "name": "計算結果を確認",
        "text": "入力が完了すると、自動的に利益と利益率が計算されます。利益率が20%以上の場合、緑色で表示され、十分な利益が確保できていることを示します。"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
    </>
  );
}

