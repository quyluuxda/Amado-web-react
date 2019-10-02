import Link from 'next/link';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    toggleSearch=()=>{
        this.props.onClickToggleSearch()
    }

    closeNav=(value)=>{
        this.props.onClickClose(value)
    }

    render() {
        return (
            <header className={this.props.showHideNav}>
                <div onClick={this.closeNav} className="nav-close">
                    <i className="fa fa-close" aria-hidden="true" />
                </div>
                <div className="logo">
                    <a href="index.html"><img src="/static/img/core-img/logo.png" alt="true" /></a>
                </div>
                <nav className="amado-nav">
                    <ul>
                        <Link href="/">
                            <li className="active"><a>Home</a></li>
                        </Link>
                        <Link href="/shop">
                            <li><a>Shop</a></li>
                        </Link>
                        <Link href="/cart">
                            <li><a>Cart</a></li>
                        </Link>
                        <Link href="/checkout">
                            <li><a>Checkout</a></li>
                        </Link>
                    </ul>
                </nav>
                <div className="amado-btn-group mt-30 mb-100">
                    <a href="#" className="btn amado-btn mb-15">%Discount%</a>
                    <a href="#" className="btn amado-btn active">New this week</a>
                </div>
                <div className="cart-fav-search mb-100">
                    <Link href="/cart"><a className="cart-nav"><img src="/static/img/core-img/cart.png" alt="true" /> Cart <span>(0)</span></a></Link>
                    <a href="#" className="fav-nav"><img src="/static/img/core-img/favorites.png" alt="true" /> Favourite</a>
                    <a onClick={this.toggleSearch} className="search-nav"><img src="/static/img/core-img/search.png" alt="true" /> Search</a>
                </div>
                <div className="social-info d-flex justify-content-between">
                    <a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a>
                    <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a>
                    <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                    <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                </div>
            </header>
        )
    }
};

export default Header;