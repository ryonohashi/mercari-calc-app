// 配送方法の型定義
export type ShippingMethod = {
  id: string;
  name: string;
  shippingFee: number;  // 送料
  boxFee: number;       // 箱代/シール代
};

// 計算結果の型定義
export type CalculationResult = {
  sellingPrice: number;      // 販売価格
  commission: number;         // 販売手数料
  totalShipping: number;      // 送料合計
  purchasePrice: number;      // 仕入れ値
  packagingCost: number;      // 梱包資材費
  profit: number;             // 販売利益
  profitRate: number;         // 利益率 (%)
};

