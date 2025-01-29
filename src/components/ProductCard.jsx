import '../styles/product-card-styles.css';  

export default function ProductCard(props) {
    return (
        <div className="product-card">
            <div className='img-wrapper'>
                <picture>
                  <source srcSet={props.image.desktop} media="(min-width: 700px)" />
                  <source srcSet={props.image.tablet} media="(min-width: 500px)" />
                  <img src={props.image.mobile} 
                    alt='product image' 
                    className={props.productsAdded[props.name] > 0 ? 'product-img selected' : 'product-img'}/>
                </picture>

             {props.productsAdded[props.name] > 0 ? (
                  <div className="select-quantity">
                  <button className='decrease-btn' onClick={() => {props.handleAddToCart(props.name, -1)}} aria-label='decrement item quantity'>
                      <div className="minus-icon"></div>
                  </button>
                  <span>{props.productsAdded[props.name]}</span> 
                  <button className='increase-btn' onClick={() => {props.handleAddToCart(props.name, 1)}} aria-label='increment item quantity'>
                      <div className="plus-icon"></div>
                  </button>
                </div>
             ) : (
                <button className='add-to-cart-btn' onClick={() => {props.handleAddToCart(props.name, 1)}} aria-label='add item to cart'>  
                  <div className="cart-icon"></div>
                  <span>Add to Cart</span>
                </button>
             )}
            </div>

            <div className="info">
                <p className="product-category">{props.category}</p>
                <h1 className="product-name">{props.name}</h1>
                <p className="product-price">${props.price.toFixed(2)}</p>
            </div>
        </div>
    )
}