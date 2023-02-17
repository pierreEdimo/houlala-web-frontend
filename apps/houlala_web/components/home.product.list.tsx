import ProductGrid from "./product.grid";


export function HomeProductList() {
    const PRODUCT_URL = process.env.NEXT_PUBLIC_PRODUCT_URL;

    return (
        <div>
            <h2>Fruits & Legumes</h2>
            <ProductGrid url={`${PRODUCT_URL}`}/>
        </div>
    );
}