import { invoke } from '@tauri-apps/api/core'

export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  priceLocale: string;
}

export interface PurchaseResult {
  success: boolean;
  transactionId: string | null;
  error: string | null;
}

export interface RestoreResult {
  success: boolean;
  restoredProductIds: string[];
  error: string | null;
}

export async function fetchProducts(productIds: string[]): Promise<Product[]> {
  return invoke('plugin:iap|fetch_products', { productIds });
}

export async function purchaseProduct(productId: string): Promise<PurchaseResult> {
  return invoke('plugin:iap|purchase_product', { productId });
}

export async function restorePurchases(): Promise<RestoreResult> {
  return invoke('plugin:iap|restore_purchases');
}