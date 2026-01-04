export default function PrivacyPolicy() {
  return (
    <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          メルカリ利益計算機（以下「当サイト」）は、利用者のプライバシーを尊重し、
          個人情報の保護に努めています。本プライバシーポリシーは、当サイトにおける
          個人情報の取り扱いについて説明するものです。
        </p>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">個人情報の収集</h3>
          <p>
            当サイトは、利用者が入力した計算データ（販売価格、仕入れ値、送料など）を
            ブラウザのローカルストレージに保存する場合があります。
            これらのデータは、利用者の利便性向上のため、ブラウザ内にのみ保存され、
            当サイトのサーバーには送信されません。
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Cookie・アクセス解析</h3>
          <p>
            当サイトでは、サービス向上のため、Google Analyticsなどのアクセス解析ツールを
            使用する場合があります。これらのツールは、Cookieを使用して利用者の情報を収集しますが、
            個人を特定する情報は含まれません。
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">広告配信について</h3>
          <p>
            当サイトでは、第三者配信の広告サービス（Google AdSense等）を利用する場合があります。
            これらの広告配信事業者は、利用者の興味に応じた広告を表示するため、
            Cookieを使用することがあります。詳細については、各広告配信事業者の
            プライバシーポリシーをご確認ください。
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">個人情報の利用目的</h3>
          <p>
            当サイトで収集した情報は、以下の目的で利用します：
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>計算ツールの機能提供</li>
            <li>サービスの改善・向上</li>
            <li>アクセス解析による利用状況の把握</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">個人情報の第三者提供</h3>
          <p>
            当サイトは、法令に基づく場合を除き、利用者の個人情報を第三者に提供することはありません。
            ただし、広告配信事業者やアクセス解析ツールの提供者には、
            匿名化された情報が提供される場合があります。
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">プライバシーポリシーの変更</h3>
          <p>
            当サイトは、必要に応じて本プライバシーポリシーを変更する場合があります。
            変更後のプライバシーポリシーは、当サイト上に掲載した時点で効力を生じるものとします。
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">お問い合わせ</h3>
          <p>
            プライバシーポリシーに関するお問い合わせは、当サイトの運営者までご連絡ください。
          </p>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mt-6">
          <p className="text-sm text-blue-800">
            <strong>最終更新日:</strong> 2026年1月
          </p>
        </div>
    </div>
  );
}

