import { HelpCircle, Calculator, Lightbulb, Truck } from 'lucide-react';
import Tabs from './Tabs';
import UsageGuide from './UsageGuide';
import CalculationRules from './CalculationRules';
import SellingTips from './SellingTips';
import ShippingGuide from './ShippingGuide';

export default function ContentSection() {
  const tabs = [
    {
      id: 'guide',
      label: '使い方ガイド',
      icon: <HelpCircle className="w-4 h-4" />,
      content: <UsageGuide />,
    },
    {
      id: 'rules',
      label: '計算ルール',
      icon: <Calculator className="w-4 h-4" />,
      content: <CalculationRules />,
    },
    {
      id: 'tips',
      label: '販売のコツ',
      icon: <Lightbulb className="w-4 h-4" />,
      content: <SellingTips />,
    },
    {
      id: 'shipping',
      label: '配送ガイド',
      icon: <Truck className="w-4 h-4" />,
      content: <ShippingGuide />,
    },
  ];

  return (
    <div className="mt-8">
      <Tabs tabs={tabs} defaultTab="guide" />
    </div>
  );
}
