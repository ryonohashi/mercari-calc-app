import type { ShippingMethod } from '../types';

export const SHIPPING_METHODS: ShippingMethod[] = [
  { id: 'yuupacket-mini', name: 'ゆうパケットポストmini', shippingFee: 160, boxFee: 20 },
  { id: 'nekopos', name: 'ネコポス', shippingFee: 210, boxFee: 0 },
  { id: 'yuupacket-post', name: 'ゆうパケットポスト', shippingFee: 215, boxFee: 5 },
  { id: 'takkyubin-compact', name: '宅急便コンパクト', shippingFee: 450, boxFee: 70 },
  { id: 'yuupacket-plus', name: 'ゆうパケットプラス', shippingFee: 455, boxFee: 65 },
  { id: 'takkyubin-60', name: '宅急便 60サイズ', shippingFee: 750, boxFee: 0 },
  { id: 'other', name: 'その他 (手入力)', shippingFee: 0, boxFee: 0 },
];

export const MIN_SELLING_PRICE = 300;
export const MAX_SELLING_PRICE = 9999999;
export const COMMISSION_RATE = 0.1; // 10%

