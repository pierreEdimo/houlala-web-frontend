import ProductGrid from "../../grid/product.grid";


export function HomeProductList() {
  const PRODUCT_URL = process.env.NEXT_PUBLIC_PRODUCT_URL;

  return (
    <div>
      <h2>Quelques Fruits & Legumes</h2>
      <ProductGrid url={`${PRODUCT_URL}/categories/1/size/8`} />
    </div>
  );
}