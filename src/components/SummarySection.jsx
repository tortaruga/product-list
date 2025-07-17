import { useState, useEffect } from 'react';
import productData from '../../data.json';
import ProductSummary from './ProductSummary';
import ModalConfirm from './ModalConfirm';
import { calculateTotalPrice } from '../../utility-functions';
import emptyCartImg from '/assets/images/illustration-empty-cart.svg';
import carbonNeutralIcon from '/assets/images/icon-carbon-neutral.svg';
import '../styles/cart-styles.css';

export default function SummarySection(props) {
   const [showModal, setShowModal] = useState(false);
    
   const totalProductsInCart = () => {
    return Object.values(props.productsAdded)
           .filter(value => value !== undefined && value !== null)
           .reduce((sum, value) => sum + value, 0);
   } 

    const productSummaries = Object.keys(props.productsAdded).map(productName => {
        const productPrice = productData.find(item => item.name === productName).price;
        return (
            <ProductSummary key={productName} 
                        name={productName} 
                        quantity={props.productsAdded[productName]}
                        price={productPrice}
                        total={props.productsAdded[productName] * productPrice}
                        resetProductQuantity={props.resetProductQuantity} 
                        />
        )
    })

    function handleShow() {
        setShowModal(true);
    }

    function handleClose() {
        setShowModal(false);
        props.reset();
    }

    useEffect(() => {
        document.querySelector('body').style.overflow = showModal ? 'hidden' : 'auto'
    }, [showModal])

    return (
        <section className="summary-section">
            <div className="cart">
                <h1 className='cart-title'>Your Cart ({totalProductsInCart()})</h1>
                {Object.values(props.productsAdded).some(quantity => quantity !== 0 && quantity !== null && quantity !== undefined) ? (
                   <div className='full-cart'>
                   
                    <div className="products">
                    {productSummaries}
                    </div>
                   
                    <p className='cart-total'>Order Total <span>{calculateTotalPrice(props.productsAdded).toFixed(2)}$</span></p>
                   
                    <div className="cabon-neutral-disclaimer">
                     <img src={carbonNeutralIcon} alt="carbon neutral delivery icon" aria-hidden="true"/>
                     <p>This is a <strong>carbon-neutral</strong> delivery</p>
                    </div>
                   
                    <button className="confirm-btn" onClick={handleShow} aria-controls='confirmation-modal'>
                     Confirm Order
                    </button>
                
                    {showModal && <div className="backdrop"></div>}
                    {showModal && (
                    <ModalConfirm handleClose={handleClose} showModal={showModal} productsAdded={props.productsAdded}/>
                    )}
                    
               </div>
                ) : (
                    <div className="empty-cart">
                    <img src={emptyCartImg} alt="empty cart image" className='empty-cart-img' aria-hidden="true" />
                    <p className='empty-cart-p'>Your added items will appear here</p>
                  </div> 
                )}
                    
            </div>
        </section>
    )
}
