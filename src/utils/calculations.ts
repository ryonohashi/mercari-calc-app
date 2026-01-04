import type { ShippingMethod, CalculationResult } from '../types';
import { COMMISSION_RATE } from '../constants/shipping';

/**
 * 販売手数料を計算（小数点以下切り捨て）
 */
export const calculateCommission = (sellingPrice: number): number => {
  return Math.floor(sellingPrice * COMMISSION_RATE);
};

/**
 * 送料合計を計算
 */
export const calculateTotalShipping = (
  shippingMethod: ShippingMethod,
  customShippingFee?: number
): number => {
  if (shippingMethod.id === 'other' && customShippingFee !== undefined) {
    return customShippingFee;
  }
  return shippingMethod.shippingFee + shippingMethod.boxFee;
};

/**
 * 販売利益を計算
 */
export const calculateProfit = (
  sellingPrice: number,
  commission: number,
  totalShipping: number,
  purchasePrice: number,
  packagingCost: number
): number => {
  return sellingPrice - commission - totalShipping - purchasePrice - packagingCost;
};

/**
 * 利益率を計算
 */
export const calculateProfitRate = (profit: number, sellingPrice: number): number => {
  if (sellingPrice === 0) return 0;
  return (profit / sellingPrice) * 100;
};

/**
 * 目標利益から必要な販売価格を逆算
 */
export const calculateRequiredPrice = (
  targetProfit: number,
  totalShipping: number,
  purchasePrice: number,
  packagingCost: number
): number => {
  return Math.ceil((targetProfit + totalShipping + purchasePrice + packagingCost) / 0.9);
};

/**
 * 完全な計算結果を生成
 */
export const calculateAll = (
  sellingPrice: number,
  shippingMethod: ShippingMethod,
  purchasePrice: number,
  packagingCost: number,
  customShippingFee?: number
): CalculationResult => {
  const commission = calculateCommission(sellingPrice);
  const totalShipping = calculateTotalShipping(shippingMethod, customShippingFee);
  const profit = calculateProfit(sellingPrice, commission, totalShipping, purchasePrice, packagingCost);
  const profitRate = calculateProfitRate(profit, sellingPrice);

  return {
    sellingPrice,
    commission,
    totalShipping,
    purchasePrice,
    packagingCost,
    profit,
    profitRate,
  };
};

