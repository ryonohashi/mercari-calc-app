import { useState, useEffect } from 'react';
import type { ShippingMethod } from '../types';
import { calculateTotalShipping, calculateRequiredPrice } from '../utils/calculations';

interface ReverseCalculatorProps {
  shippingMethod: ShippingMethod;
  customShippingFee?: number;
  purchasePrice: number;
  packagingCost: number;
}

export default function ReverseCalculator({
  shippingMethod,
  customShippingFee,
  purchasePrice,
  packagingCost,
}: ReverseCalculatorProps) {
  const [targetProfit, setTargetProfit] = useState<number>(0);
  const [requiredPrice, setRequiredPrice] = useState<number | null>(null);

  useEffect(() => {
    if (targetProfit > 0) {
      const totalShipping = calculateTotalShipping(shippingMethod, customShippingFee);
      const price = calculateRequiredPrice(targetProfit, totalShipping, purchasePrice, packagingCost);
      setRequiredPrice(price);
    } else {
      setRequiredPrice(null);
    }
  }, [targetProfit, shippingMethod, customShippingFee, purchasePrice, packagingCost]);

  const handleTargetProfitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    if (value >= 0) {
      setTargetProfit(value);
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY',
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">目標金額からの逆算</h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="targetProfit" className="block text-sm font-medium text-gray-700 mb-2">
            手元に残したい利益
          </label>
          <div className="relative">
            <input
              type="number"
              id="targetProfit"
              inputMode="numeric"
              min="0"
              value={targetProfit || ''}
              onChange={handleTargetProfitChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-mercari-red focus:border-transparent"
              placeholder="0"
            />
            <span className="absolute right-3 top-2 text-gray-500">円</span>
          </div>
        </div>

        {requiredPrice !== null && requiredPrice > 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
            <div className="text-sm text-gray-600 mb-1">必要な販売価格</div>
            <div className="text-2xl font-bold text-mercari-red">
              {formatCurrency(requiredPrice)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

