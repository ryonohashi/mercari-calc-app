import { DollarSign, Truck, Package, TrendingUp } from 'lucide-react';

export default function UsageGuide() {
  return (
    <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-mercari-red" aria-hidden="true" />
            ステップ1: 販売価格を入力
          </h3>
          <p className="text-gray-700 leading-relaxed">
            メルカリに出品する予定の商品価格を入力してください。最低300円から9,999,999円まで入力可能です。
            販売価格は、商品の市場価値や類似商品の価格を参考に設定することをおすすめします。
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Truck className="w-5 h-5 text-mercari-red" aria-hidden="true" />
            ステップ2: 配送方法を選択
          </h3>
          <p className="text-gray-700 leading-relaxed">
            商品のサイズや重量に応じて、最適な配送方法を選択してください。
            ゆうパケットポストmini、ネコポス、宅急便など、7種類の配送方法から選択できます。
            「その他」を選択した場合は、手動で送料を入力することができます。
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Package className="w-5 h-5 text-mercari-red" aria-hidden="true" />
            ステップ3: 原価情報を入力
          </h3>
          <p className="text-gray-700 leading-relaxed">
            仕入れ値と梱包資材費を入力してください。仕入れ値は商品を購入した際の価格、
            梱包資材費はダンボールや緩衝材などの費用です。これらの情報を正確に入力することで、
            より正確な利益計算が可能になります。
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-mercari-red" aria-hidden="true" />
            ステップ4: 計算結果を確認
          </h3>
          <p className="text-gray-700 leading-relaxed">
            入力が完了すると、自動的に利益と利益率が計算されます。
            利益率が20%以上の場合、緑色で表示され、十分な利益が確保できていることを示します。
            逆に、利益率が0%未満の場合は赤字で表示され、価格設定の見直しが必要です。
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mt-4">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">便利機能: 目標利益からの逆算</h3>
          <p className="text-blue-800 leading-relaxed">
            「目標金額からの逆算」セクションでは、手元に残したい利益を入力することで、
            必要な販売価格を自動計算できます。これにより、効率的な価格設定が可能になります。
          </p>
        </div>
    </div>
  );
}

