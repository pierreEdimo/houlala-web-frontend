import ProductGrid from "./product.grid";


export function HomeProductList() {
  const PRODUCT_URL = process.env.NEXT_PUBLIC_PRODUCT_URL;

  return (
    <div>
      <h2>Quelques Fruits & Legumes</h2>
      <ProductGrid url={`${PRODUCT_URL}/category/6436fdeabbea9bd0d7924268?size=8`} />
    </div>
  );
}