import ProductGrid from "./product.grid";


export function HomeProductList() {
  const PRODUCT_URL = process.env.NEXT_PUBLIC_PRODUCT_URL;

  return (
    <div>
      <h2>Quelques Fruits & Legumes</h2>
      <ProductGrid url={`${PRODUCT_URL}/category/6443faff8c04e0c6cc8a4e43?size=8`} />
    </div>
  );
}