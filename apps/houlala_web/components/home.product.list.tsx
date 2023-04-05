import ProductGrid from "./product.grid";


export function HomeProductList() {
  const PRODUCT_URL = process.env.NEXT_PUBLIC_PRODUCT_URL;

  return (
    <div>
      <h2>Quelques Fruits & Legumes</h2>
      <ProductGrid url={`${PRODUCT_URL}/category/638d214e9e725bd8c2dca355?size=8`} />
    </div>
  );
}