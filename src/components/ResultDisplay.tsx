import { CalculationResult } from '../types';

interface ResultDisplayProps {
  result: CalculationResult | null;
  validationError: string | null;
}

export default function ResultDisplay({ result, validationError }: ResultDisplayProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY',
      minimumFractionDigits: 0,
    }).format(value);
  };

  const getProfitColor = () => {
    if (!result) return 'text-gray-700';
    if (result.profitRate < 0) return 'text-red-600';
    if (result.profitRate >= 20) return 'text-green-600';
    return 'text-gray-700';
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">計算結果</h2>
      
      {/* エラー表示エリア（Layout Shift防止のため常に存在） */}
      <div 
        className={`overflow-hidden transition-all duration-200 ${
          validationError ? 'mb-4' : 'mb-0'
        }`}
        style={{ 
          maxHeight: validationError ? '200px' : '0',
          opacity: validationError ? 1 : 0
        }}
      >
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <p className="text-red-800 font-medium">入力エラー</p>
          </div>
          <p className="text-red-700 text-sm">{validationError}</p>
        </div>
      </div>

      {!result && !validationError && (
        <div className="text-center py-12 text-gray-400">
          <p className="text-sm">左側のフォームに入力すると、</p>
          <p className="text-sm">ここに計算結果が表示されます</p>
        </div>
      )}

      {result && !validationError && (
        <div className="space-y-4">
          <div className="border-b pb-4">
            <div className="text-sm text-gray-600 mb-1">販売利益</div>
            <div className={`text-3xl font-bold ${getProfitColor()}`}>
              {formatCurrency(result.profit)}
            </div>
            <div className={`text-lg font-medium mt-1 ${getProfitColor()}`}>
              利益率: {result.profitRate.toFixed(1)}%
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">販売価格</span>
              <span className="font-medium">{formatCurrency(result.sellingPrice)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">販売手数料 (10%)</span>
              <span className="font-medium">{formatCurrency(result.commission)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">送料合計</span>
              <span className="font-medium">{formatCurrency(result.totalShipping)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">仕入れ値</span>
              <span className="font-medium">{formatCurrency(result.purchasePrice)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">梱包資材費</span>
              <span className="font-medium">{formatCurrency(result.packagingCost)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
