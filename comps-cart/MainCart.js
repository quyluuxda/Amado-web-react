import CartItems from './CartItems'
import Link from 'next/link'
const MainCart = () => (
    <div className="cart-table-area section-padding-100">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-lg-8">
                    <div className="cart-title mt-50">
                        <h2>Shopping Cart</h2>
                    </div>
                    <CartItems />
                </div>
                <div className="col-12 col-lg-4">
                    <div className="cart-summary">
                        <h5>Cart Total</h5>
                        <ul className="summary-table">
                            <li><span>subtotal:</span> <span>$140.00</span></li>
                            <li><span>delivery:</span> <span>Free</span></li>
                            <li><span>total:</span> <span>$140.00</span></li>
                        </ul>
                        <div className="cart-btn mt-100">
                        <Link href="/checkout"><a className="btn amado-btn w-100">Checkout</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

);

export default MainCart;