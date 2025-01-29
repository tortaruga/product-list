import productData from '../../data.json';
import ProductCard from './ProductCard';
import '../styles/product-section-styles.css';

export default function ProductSection(props) {
    const cards = productData.map((item, index) => {
        return (
            <ProductCard key={index} 
                    {...item} 
                    handleAddToCart={props.handleAddToCart}
                    productsAdded={props.productsAdded} /> 
        )
    })

    return (
        <section className="product-section">
            <h1 className='title'>Desserts</h1>
            <div className="product-cards-container">
              {cards}
            </div>
        </section>
    )
}
