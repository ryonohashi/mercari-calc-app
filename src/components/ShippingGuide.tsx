import { Package, Mail, Truck, Box } from 'lucide-react';

export default function ShippingGuide() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">配送方法の選び方ガイド</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          商品のサイズや厚さに応じて、最適な配送方法を選択することで送料を抑え、利益率を向上させることができます。
          以下の表を参考に、商品に合った配送方法を選びましょう。
        </p>
      </div>

      {/* 配送方法比較表 */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-lg shadow-sm" role="table" aria-label="配送方法選び方ガイド表">
          <caption className="sr-only">
            商品の種類、サイズ、厚さに応じたおすすめの配送方法と梱包のコツをまとめた比較表
          </caption>
          <thead>
            <tr className="bg-gray-50">
              <th scope="col" className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-700">
                商品の例
              </th>
              <th scope="col" className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-700">
                サイズ・厚さ
              </th>
              <th scope="col" className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-700">
                おすすめの配送方法
              </th>
              <th scope="col" className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-700">
                梱包のコツ
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <th scope="row" className="border border-gray-200 px-4 py-3 text-sm text-gray-700 font-medium">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-500" aria-hidden="true" />
                  <span>トレカ・シール</span>
                </div>
              </th>
              <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                封筒 / 厚さ1cm以内
              </td>
              <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                <span className="font-medium text-mercari-red">普通郵便(84円〜)</span>
                <br />
                <span className="text-xs text-gray-500">※手入力で設定</span>
              </td>
              <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                スリーブと厚紙で折れ対策を
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <th scope="row" className="border border-gray-200 px-4 py-3 text-sm text-gray-700 font-medium">
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-gray-500" aria-hidden="true" />
                  <span>トレカ(匿名希望)</span>
                </div>
              </th>
              <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                封筒 / 厚さ1cm以内
              </td>
              <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                <span className="font-medium">ゆうパケットポストmini(180円)</span>
              </td>
              <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                専用封筒を郵便局で購入
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <th scope="row" className="border border-gray-200 px-4 py-3 text-sm text-gray-700 font-medium">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-gray-500" aria-hidden="true" />
                  <span>衣類・本</span>
                </div>
              </th>
              <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                厚さ3cm以内
              </td>
              <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                <span className="font-medium">ネコポス(210円)</span>
                <br />
                <span className="font-medium">ゆうパケットポスト(220円)</span>
              </td>
              <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                封筒やビニール袋(ショップ袋)でOK
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <th scope="row" className="border border-gray-200 px-4 py-3 text-sm text-gray-700 font-medium">
                <div className="flex items-center gap-2">
                  <Box className="w-4 h-4 text-gray-500" aria-hidden="true" />
                  <span>厚みのある小物</span>
                </div>
              </th>
              <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                厚さ3cm以上
              </td>
              <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                <span className="font-medium">ゆうパケットプラス(520円)</span>
                <br />
                <span className="font-medium">宅急便コンパクト(520円)</span>
              </td>
              <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                専用箱が必要です
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 補足情報 */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-4">
        <h3 className="text-lg font-semibold text-blue-900 flex items-center gap-2">
          <Package className="w-5 h-5" aria-hidden="true" />
          初心者向け：梱包資材の選び方
        </h3>
        
        <div className="space-y-3 text-sm text-blue-800">
          <div>
            <p className="font-medium mb-1">📮 封筒タイプ（普通郵便・ゆうパケットポストmini）</p>
            <p className="leading-relaxed">
              定形郵便物用の封筒（長形3号、角形2号など）が最適です。郵便局や100円ショップで購入できます。
              トレカやシールなど薄い商品には、スリーブ（保護フィルム）と厚紙を一緒に入れると安心です。
            </p>
          </div>
          
          <div>
            <p className="font-medium mb-1">📦 箱タイプ（宅急便・ゆうパケットプラス）</p>
            <p className="leading-relaxed">
              宅急便コンパクトやゆうパケットプラスには専用の箱が必要です。
              郵便局やコンビニで購入できます。商品が動かないよう、緩衝材（プチプチ、新聞紙など）で隙間を埋めましょう。
            </p>
          </div>
          
          <div>
            <p className="font-medium mb-1">💡 コスト削減のコツ</p>
            <p className="leading-relaxed">
              梱包資材費を抑えるため、再利用できる封筒や箱を活用するのも良い方法です。
              ただし、商品が安全に届くことが最優先です。破損リスクを避けるため、適切な梱包を心がけましょう。
            </p>
          </div>
        </div>
      </div>

      {/* 普通郵便について */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-yellow-900 mb-3 flex items-center gap-2">
          <Mail className="w-5 h-5" aria-hidden="true" />
          普通郵便について
        </h3>
        <div className="space-y-2 text-sm text-yellow-800 leading-relaxed">
          <p>
            普通郵便は最も安価な配送方法ですが、<strong>追跡番号がなく、補償もありません</strong>。
            低価格の商品や、追跡が不要な場合に適しています。
          </p>
          <p>
            <strong>料金目安:</strong> 定形郵便物（25g以内）84円、50g以内94円、100g以内120円
          </p>
          <p className="mt-3">
            <strong>設定方法:</strong> 配送方法で「その他（手入力）」を選択し、
            上記の料金を入力してください。計算ツールでは、この金額が送料として計算されます。
          </p>
        </div>
      </div>
    </div>
  );
}

