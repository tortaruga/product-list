import ProductSection from './ProductSection';
import SummarySection from './SummarySection';
import { useState } from 'react';
import '../styles/main-styles.css';

export default function Main() {
   const [productsAdded, setProductsAdded] = useState({});

   function resetProductQuantity(product) {
    setProductsAdded(prevProducts => {
        const { [product]: _, ...newProducts} = prevProducts;
        return newProducts;
        })
   }

   function reset() {
       setProductsAdded({});
   }

   function handleAddToCart(product, quantity) {
    setProductsAdded(prevProducts => {
        return {
            ... prevProducts,
            [product]: (prevProducts[product] || 0) + quantity
        }
    })
   }

    return (
        <main>
            <ProductSection productsAdded={productsAdded} handleAddToCart={handleAddToCart} />
            <SummarySection productsAdded={productsAdded} handleAddToCart={handleAddToCart}
                    resetProductQuantity={resetProductQuantity} reset={reset}/>    
        </main>
    )
}