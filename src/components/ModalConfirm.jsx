import ProductSummary from './ProductSummary';
import productData from  '../../data.json';
import '../styles/modal-styles.css'
import successIcon from '/assets/images/icon-order-confirmed.svg';
import { calculateTotalPrice } from '../../utility-functions';

export default function ModalConfirm(props) {
    const productSummaries = Object.keys(props.productsAdded).map(productName => {
        const productPrice = productData.find(item => item.name === productName).price;
        const index = productData.map(e => e.name).indexOf(productName);
        return (
            <ProductSummary key={productName} 
                        name={productName} 
                        quantity={props.productsAdded[productName]}
                        price={productPrice}
                        total={props.productsAdded[productName] * productPrice}
                        modal='true'
                        thumbnail={productData[index].image.thumbnail} 
                            />
            )
        })
    
    return (
        <div className="modal-confirm" id='confirmation-modal' aria-modal="true" role='dialog' aria-labelledby='modal-title'>
            <img src={successIcon} alt="success icon" />
            <h1 className='modal-h1' id='modal-title'>Order Confirmed</h1>
            <p className='modal-p'>We hope you enjoy your food!</p>
            <div className="summary">
              {productSummaries}
              <p className='cart-total'>Order Total <span>{calculateTotalPrice(props.productsAdded).toFixed(2)}$</span></p>
            </div>
            <button className='modal-btn' onClick={props.handleClose}>Start New Order</button>
        </div>
    )
}