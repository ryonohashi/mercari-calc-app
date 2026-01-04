import { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import ProfitCalculator from './components/ProfitCalculator';
import ResultDisplay from './components/ResultDisplay';
import ReverseCalculator from './components/ReverseCalculator';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';
import StructuredData from './components/StructuredData';
import type { CalculationResult } from './types';
import { SHIPPING_METHODS } from './constants/shipping';

function App() {
  const [calculationResult, setCalculationResult] = useState<CalculationResult | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [selectedShippingId, setSelectedShippingId] = useState<string>(SHIPPING_METHODS[0].id);
  const [customShippingFee, setCustomShippingFee] = useState<number | undefined>(undefined);
  const [purchasePrice, setPurchasePrice] = useState<number>(0);
  const [packagingCost, setPackagingCost] = useState<number>(0);

  const selectedShipping = useMemo(
    () => SHIPPING_METHODS.find(s => s.id === selectedShippingId) || SHIPPING_METHODS[0],
    [selectedShippingId]
  );

  const handleCalculate = (result: CalculationResult | null) => {
    setCalculationResult(result);
  };

  const handleInputChange = (data: {
    selectedShippingId: string;
    customShippingFee: number | undefined;
    purchasePrice: number;
    packagingCost: number;
  }) => {
    setSelectedShippingId(data.selectedShippingId);
    setCustomShippingFee(data.customShippingFee);
    setPurchasePrice(data.purchasePrice);
    setPackagingCost(data.packagingCost);
  };

  // SEO対策: メタタグの動的更新
  useEffect(() => {
    document.title = 'メルカリ利益計算機 | 手数料・送料・利益率を瞬時にシミュレーション';
    
    // descriptionメタタグの更新
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'メルカリ出品者必見！販売価格から手数料(10%)や送料を差し引いた正確な利益を計算します。ゆうパケット、ネコポス、宅急便など全配送方法に対応。目標利益からの逆算機能や、初心者向けの配送ガイドも完備。');
  }, []);

  return (
    <div className="min-h-screen bg-bg-light">
      <StructuredData />
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 2カラムレイアウト（PC表示） */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          {/* 左カラム: 入力フォーム */}
          <div className="space-y-6">
            <ProfitCalculator 
              onCalculate={handleCalculate}
              onValidationError={setValidationError}
              onInputChange={handleInputChange}
            />
            
            <ReverseCalculator
              shippingMethod={selectedShipping}
              customShippingFee={customShippingFee}
              purchasePrice={purchasePrice}
              packagingCost={packagingCost}
            />
          </div>

          {/* 右カラム: 計算結果（Sticky） */}
          <div className="lg:sticky lg:top-8 lg:self-start mt-6 lg:mt-0">
            <ResultDisplay result={calculationResult} validationError={validationError} />
          </div>
        </div>

        {/* コンテンツセクション（全幅） */}
        <ContentSection />
        
        {/* フッター */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
