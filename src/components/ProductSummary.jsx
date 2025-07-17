export default function ProductSummary(props) {
    return (
        <>
        {props.quantity > 0 && (
         <div className="product-summary">
        {props.modal && <img className='product-thumbnail' src={props.thumbnail} aria-hidden="true" />}
         <div className="product-summary-details">
             <h1 className="product-name">{props.name}</h1>
             <div className="product-price-details">
                 <span className="product-quantity">{props.quantity}x</span>
                 <span className="product-price"> @${props.price.toFixed(2)}</span>
                {!props.modal && <span className="total-product-price"> ${props.total.toFixed(2)}</span>}
             </div>
         </div>
         {!props.modal ?  
        <button className="remove-item" onClick={() => props.resetProductQuantity(props.name)} aria-label='remove item from cart'></button> :
         <span className="total-product-price"> ${props.total.toFixed(2)}</span>}
     </div>
        )}
        </>
    )
}