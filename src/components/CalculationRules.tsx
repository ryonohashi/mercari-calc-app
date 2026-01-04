export default function CalculationRules() {
  return (
    <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">販売手数料（10%）</h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            メルカリでは、商品が売れた際に販売価格の10%が手数料として差し引かれます。
            この計算ツールでは、販売価格に0.1を掛けて計算し、小数点以下は切り捨てて表示します。
          </p>
          <div className="bg-gray-50 rounded-md p-3 mt-2">
            <p className="text-sm text-gray-600">
              <strong>計算例:</strong> 販売価格が1,000円の場合、手数料は100円（1,000 × 0.1 = 100）
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">送料の計算</h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            送料は、選択した配送方法によって異なります。各配送方法には「送料」と「箱代（またはシール代）」が含まれています。
            計算ツールでは、これらを合計した金額を「送料合計」として表示します。
          </p>
          <div className="bg-gray-50 rounded-md p-3 mt-2">
            <p className="text-sm text-gray-600 mb-2">
              <strong>主な配送方法の送料合計:</strong>
            </p>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>ゆうパケットポストmini: 180円（送料160円 + 箱代20円）</li>
              <li>ネコポス: 210円（送料210円 + 箱代0円）</li>
              <li>ゆうパケットポスト: 220円（送料215円 + シール代5円）</li>
              <li>宅急便コンパクト: 520円（送料450円 + 箱代70円）</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">販売利益の計算式</h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            販売利益は、以下の計算式で求められます：
          </p>
          <div className="bg-gray-50 rounded-md p-4 mt-2">
            <p className="text-sm font-mono text-gray-800 mb-2">
              販売利益 = 販売価格 - 販売手数料 - 送料合計 - 仕入れ値 - 梱包資材費
            </p>
            <p className="text-xs text-gray-600">
              この計算式により、実際に手元に残る金額を正確に把握できます。
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">利益率の計算</h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            利益率は、販売価格に対する利益の割合をパーセンテージで表示します。
            利益率が高いほど、効率的な販売ができていることを示します。
          </p>
          <div className="bg-gray-50 rounded-md p-3 mt-2">
            <p className="text-sm text-gray-600">
              <strong>計算式:</strong> 利益率 = (販売利益 ÷ 販売価格) × 100
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mt-4">
          <h3 className="text-lg font-semibold text-yellow-900 mb-2">注意事項</h3>
          <p className="text-yellow-800 leading-relaxed text-sm">
            この計算ツールで表示される結果は目安です。実際の手数料や送料は、
            メルカリの規約や配送業者の料金体系により変動する可能性があります。
            正確な金額については、メルカリの公式サイトでご確認ください。
          </p>
        </div>
    </div>
  );
}

