/**
 * @file page.js
 * @description Vendor product management page — list all products with edit and delete actions.
 * @module app/dashboard/products/page
 */

import ProductHeader from '@/components/dashboard/product/product-header';
import ProductTable from '@/components/dashboard/product/ProductTable';

export default function Products() {
  return (
    <div className="w-full pt-6 px-2">
      <ProductTable />
    </div>
  );
}
