export default function SellingTips() {
  return (
    <div className="space-y-6">
        <article className="border-l-4 border-mercari-red pl-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">1. 適切な価格設定で利益を最大化</h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            メルカリで利益を出すためには、適切な価格設定が重要です。類似商品の価格を調査し、
            市場価格を把握した上で、手数料や送料を考慮した価格を設定しましょう。
          </p>
          <p className="text-gray-700 leading-relaxed">
            この計算ツールの「目標金額からの逆算」機能を活用することで、
            希望する利益を確保するために必要な販売価格を簡単に算出できます。
            利益率が20%以上になるよう価格設定することで、安定した収益を得られます。
          </p>
        </article>

        <article className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">2. 配送方法の選び方でコスト削減</h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            商品のサイズや重量に応じて、最もコストパフォーマンスの良い配送方法を選択することが、
            利益率向上の鍵となります。小さな商品であれば「ゆうパケットポストmini」や「ネコポス」、
            大きめの商品には「宅急便」など、適切な配送方法を選びましょう。
          </p>
          <p className="text-gray-700 leading-relaxed">
            この計算ツールで各配送方法の送料合計を比較することで、
            最も効率的な配送方法を選択できます。送料が安い配送方法を選ぶことで、
            利益率を数パーセント向上させることが可能です。
          </p>
        </article>

        <article className="border-l-4 border-green-500 pl-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">3. 原価管理で正確な利益計算</h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            仕入れ値や梱包資材費などの原価を正確に記録することで、
            実際の利益を正確に把握できます。見落としがちな梱包資材費も忘れずに計上しましょう。
          </p>
          <p className="text-gray-700 leading-relaxed">
            この計算ツールでは、仕入れ値と梱包資材費を別々に入力できるため、
            詳細な原価管理が可能です。すべてのコストを正確に入力することで、
            販売前に実際の利益を予測し、適切な価格設定ができます。
          </p>
        </article>

        <div className="bg-gradient-to-r from-mercari-red/10 to-red-50 rounded-md p-4 mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">まとめ</h3>
          <p className="text-gray-700 leading-relaxed">
            メルカリで安定した利益を得るためには、価格設定、配送方法の選択、原価管理の3つが重要です。
            この計算ツールを活用して、販売前に利益をシミュレーションし、
            最適な販売戦略を立てることをおすすめします。
          </p>
        </div>
    </div>
  );
}

