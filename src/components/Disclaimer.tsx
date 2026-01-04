export default function Disclaimer() {
  return (
    <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          本サイト（メルカリ利益計算機）は、メルカリ出品者が商品の販売利益を計算するためのツールを提供しています。
          以下の免責事項をご確認の上、ご利用ください。
        </p>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">計算結果について</h3>
          <p>
            本ツールで表示される計算結果は、入力された情報に基づく目安であり、
            実際の販売における手数料や送料とは異なる場合があります。
            メルカリの手数料率や配送業者の料金体系は変更される可能性があるため、
            最新の情報についてはメルカリの公式サイトでご確認ください。
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">正確性について</h3>
          <p>
            本ツールは、一般的な計算ロジックに基づいて利益を算出していますが、
            実際の販売における各種費用や手数料の詳細な計算とは異なる場合があります。
            特に、特別割引やキャンペーン適用時の計算には対応していません。
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">責任の範囲</h3>
          <p>
            本サイトの利用により生じた損害や損失について、当サイト運営者は一切の責任を負いません。
            計算結果を参考にした販売価格設定や販売戦略に関する判断は、
            利用者自身の責任において行ってください。
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">サービスの変更・終了</h3>
          <p>
            当サイトは、予告なくサービスの内容を変更したり、提供を終了したりする場合があります。
            これにより利用者に生じた損害について、当サイト運営者は責任を負いません。
          </p>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mt-6">
          <p className="text-sm text-yellow-800">
            <strong>重要:</strong> 本ツールは参考情報としてご利用ください。
            実際の販売に関する重要な判断は、<a href="https://www.mercari.com/jp/help_center/" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-900">メルカリの公式サイト</a>で最新の規約・手数料体系を確認した上で行ってください。
            メルカリの手数料率や配送料金は予告なく変更される可能性があります。
          </p>
        </div>
    </div>
  );
}

