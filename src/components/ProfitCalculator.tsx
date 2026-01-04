import { useState, useEffect, useCallback } from 'react';
import { ShippingMethod, CalculationResult } from '../types';
import { SHIPPING_METHODS, MIN_SELLING_PRICE, MAX_SELLING_PRICE } from '../constants/shipping';
import { calculateAll } from '../utils/calculations';

interface ProfitCalculatorProps {
  onCalculate: (result: CalculationResult | null) => void;
  onValidationError?: (error: string | null) => void;
  onInputChange?: (data: {
    selectedShippingId: string;
    customShippingFee: number | undefined;
    purchasePrice: number;
    packagingCost: number;
  }) => void;
}

export default function ProfitCalculator({ onCalculate, onValidationError, onInputChange }: ProfitCalculatorProps) {
  const [sellingPrice, setSellingPrice] = useState<number>(0);
  const [hasBlurred, setHasBlurred] = useState<boolean>(false);
  const [selectedShippingId, setSelectedShippingId] = useState<string>(SHIPPING_METHODS[0].id);
  const [customShippingFee, setCustomShippingFee] = useState<number | undefined>(undefined);
  const [purchasePrice, setPurchasePrice] = useState<number>(0);
  const [packagingCost, setPackagingCost] = useState<number>(0);

  const selectedShipping = SHIPPING_METHODS.find(s => s.id === selectedShippingId) || SHIPPING_METHODS[0];

  // バリデーション関数（useCallbackでメモ化）
  const validateAndCalculate = useCallback((price: number, showError: boolean) => {
    if (price === 0) {
      onCalculate(null);
      if (showError && onValidationError) {
        onValidationError(null);
      }
      return;
    }

    const isValid = price >= MIN_SELLING_PRICE && price <= MAX_SELLING_PRICE;

    if (!isValid) {
      onCalculate(null);
      if (showError && onValidationError) {
        onValidationError(`${MIN_SELLING_PRICE.toLocaleString()}円〜${MAX_SELLING_PRICE.toLocaleString()}円の間で入力してください`);
      }
      return;
    }

    // 正常範囲内の場合はエラーをクリア
    if (onValidationError) {
      onValidationError(null);
    }

    const result = calculateAll(
      price,
      selectedShipping,
      purchasePrice,
      packagingCost,
      customShippingFee
    );
    onCalculate(result);
  }, [selectedShipping, purchasePrice, packagingCost, customShippingFee, onCalculate, onValidationError]);

  // 計算は常に実行（エラー表示は制御）
  useEffect(() => {
    validateAndCalculate(sellingPrice, hasBlurred);
  }, [sellingPrice, hasBlurred, validateAndCalculate]);

  useEffect(() => {
    if (onInputChange) {
      onInputChange({
        selectedShippingId,
        customShippingFee,
        purchasePrice,
        packagingCost,
      });
    }
  }, [selectedShippingId, customShippingFee, purchasePrice, packagingCost, onInputChange]);

  const handleSellingPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 全角数字やカンマを除去して半角数字のみを取得
    let rawValue = e.target.value;
    
    // 全角数字を半角に変換
    rawValue = rawValue.replace(/[０-９]/g, (char) => {
      return String.fromCharCode(char.charCodeAt(0) - 0xFEE0);
    });
    
    // カンマを除去
    rawValue = rawValue.replace(/[，,]/g, '');
    
    // 数値以外の文字を除去（負の符号は許可しない）
    rawValue = rawValue.replace(/[^0-9]/g, '');
    
    const value = parseInt(rawValue) || 0;
    setSellingPrice(value);
    // 入力値が正常範囲内に戻ったら即座にエラーをクリア
    if (value >= MIN_SELLING_PRICE && value <= MAX_SELLING_PRICE && onValidationError) {
      onValidationError(null);
    }
  };

  const handleSellingPriceBlur = () => {
    setHasBlurred(true);
  };

  const isPriceValid = sellingPrice === 0 || (sellingPrice >= MIN_SELLING_PRICE && sellingPrice <= MAX_SELLING_PRICE);
  const shouldShowError = hasBlurred && sellingPrice > 0 && !isPriceValid;

  const handlePurchasePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    if (value >= 0) {
      setPurchasePrice(value);
    }
  };

  const handlePackagingCostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    if (value >= 0) {
      setPackagingCost(value);
    }
  };

  const handleCustomShippingFeeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    if (value >= 0) {
      setCustomShippingFee(value);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">入力項目</h2>
      
      <div className="space-y-5">
        <div>
          <label htmlFor="sellingPrice" className="block text-sm font-medium text-gray-700 mb-2">
            販売価格 <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="number"
              id="sellingPrice"
              inputMode="numeric"
              min={MIN_SELLING_PRICE}
              max={MAX_SELLING_PRICE}
              value={sellingPrice || ''}
              onChange={handleSellingPriceChange}
              onBlur={handleSellingPriceBlur}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:border-transparent ${
                shouldShowError
                  ? 'border-red-300 focus:ring-red-500 bg-red-50'
                  : 'border-gray-300 focus:ring-mercari-red'
              }`}
              placeholder="300〜9,999,999"
            />
            <span className="absolute right-3 top-2 text-gray-500">円</span>
          </div>
          <p className={`mt-1 text-xs min-h-[1rem] ${
            shouldShowError ? 'text-red-600 font-medium' : 'text-gray-500'
          }`}>
            {MIN_SELLING_PRICE.toLocaleString()}円〜{MAX_SELLING_PRICE.toLocaleString()}円
            {shouldShowError && (
              <span className="ml-2">※範囲外の値です</span>
            )}
          </p>
        </div>

        <div>
          <label htmlFor="shippingMethod" className="block text-sm font-medium text-gray-700 mb-2">
            配送方法
          </label>
          <select
            id="shippingMethod"
            value={selectedShippingId}
            onChange={(e) => setSelectedShippingId(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-mercari-red focus:border-transparent"
          >
            {SHIPPING_METHODS.map((method) => (
              <option key={method.id} value={method.id}>
                {method.name} {method.id !== 'other' && `(${(method.shippingFee + method.boxFee).toLocaleString()}円)`}
              </option>
            ))}
          </select>
        </div>

        {selectedShippingId === 'other' && (
          <div>
            <label htmlFor="customShippingFee" className="block text-sm font-medium text-gray-700 mb-2">
              送料（手入力）
            </label>
            <div className="relative">
              <input
                type="number"
                id="customShippingFee"
                inputMode="numeric"
                min="0"
                value={customShippingFee || ''}
                onChange={handleCustomShippingFeeChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-mercari-red focus:border-transparent"
                placeholder="0"
              />
              <span className="absolute right-3 top-2 text-gray-500">円</span>
            </div>
          </div>
        )}

        <div>
          <label htmlFor="purchasePrice" className="block text-sm font-medium text-gray-700 mb-2">
            仕入れ値
          </label>
          <div className="relative">
            <input
              type="number"
              id="purchasePrice"
              inputMode="numeric"
              min="0"
              value={purchasePrice || ''}
              onChange={handlePurchasePriceChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-mercari-red focus:border-transparent"
              placeholder="0"
            />
            <span className="absolute right-3 top-2 text-gray-500">円</span>
          </div>
        </div>

        <div>
          <label htmlFor="packagingCost" className="block text-sm font-medium text-gray-700 mb-2">
            梱包資材費
          </label>
          <div className="relative">
            <input
              type="number"
              id="packagingCost"
              inputMode="numeric"
              min="0"
              value={packagingCost || ''}
              onChange={handlePackagingCostChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-mercari-red focus:border-transparent"
              placeholder="0"
            />
            <span className="absolute right-3 top-2 text-gray-500">円</span>
          </div>
        </div>
      </div>
    </div>
  );
}

