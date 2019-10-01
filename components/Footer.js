import Link from 'next/link';
const Footer = () => (
    <footer className="footer_area clearfix">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-lg-4">
                    <div className="single_widget_area">
                        <div className="footer-logo mr-50">
                            <a href="index.html"><img src="/static/img/core-img/logo2.png" alt="true" /></a>
                        </div>
                        <p className="copywrite" >
                            Copyright &copy; 2019 All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a> & Re-distributed by <a href="https://themewagon.com/" target="_blank">Themewagon</a>
                        </p>
                    </div>
                </div>
                <div className="col-12 col-lg-8">
                    <div className="single_widget_area">
                        <div className="footer_menu">
                            <nav className="navbar navbar-expand-lg justify-content-end">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#footerNavContent" aria-controls="footerNavContent" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" /></button>
                                <div className="collapse navbar-collapse" id="footerNavContent">
                                    <ul className="navbar-nav ml-auto">
                                        <Link href="/">
                                            <li className="nav-item active"><a className="nav-link">Home</a></li>
                                        </Link>
                                        <Link href="/shop">
                                            <li className="nav-item"><a className="nav-link">Shop</a></li>
                                        </Link>
                                        {/* <Link href="/product">
                                            <li className="nav-item"><a className="nav-link">Product</a></li>
                                        </Link> */}
                                        <Link href="/cart">
                                            <li className="nav-item"><a className="nav-link">Cart</a></li>
                                        </Link>
                                        <Link href="/checkout">
                                            <li className="nav-item"><a className="nav-link">Checkout</a></li>
                                        </Link>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;