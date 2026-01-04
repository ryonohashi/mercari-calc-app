import Accordion from './Accordion';
import Disclaimer from './Disclaimer';
import PrivacyPolicy from './PrivacyPolicy';

export default function Footer() {
  const accordionItems = [
    {
      id: 'disclaimer',
      title: '免責事項',
      content: <Disclaimer />,
    },
    {
      id: 'privacy',
      title: 'プライバシーポリシー',
      content: <PrivacyPolicy />,
    },
  ];

  return (
    <footer className="mt-12 py-8 border-t border-gray-200">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-sm text-gray-500">
            ※計算結果は目安です。実際の手数料や送料は変動する可能性があります。
          </p>
        </div>
        
        <Accordion items={accordionItems} />
        
        <div className="text-center mt-6">
          <p className="text-xs text-gray-400">
            © 2026 メルカリ利益計算機. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
