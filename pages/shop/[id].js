import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../style.css"
import '../_document'
import Layout from '../../components/MyLayout'
import MyCarousel from "../../comps-shop/My Carousel"
const Product = () => (
    <Layout>
        <div className="single-product-area section-padding-100-0 clearfix">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mt-50">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Furniture</a></li>
                                <li className="breadcrumb-item"><a href="#">Chairs</a></li>
                                <li className="breadcrumb-item active" aria-current="page">white modern chair</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <MyCarousel/>
                    </div>
                    <div className="col-12 col-lg-5">
                        <div className="single_product_desc">
                            <div className="product-meta-data">
                                <div className="line" />
                                <p className="product-price">$180</p>
                                <a href="product-details.html">
                                    <h6>White Modern Chair</h6>
                                </a>
                                <div className="ratings-review mb-15 d-flex align-items-center justify-content-between">
                                    <div className="ratings">
                                        <i className="fa fa-star" aria-hidden="true" />
                                        <i className="fa fa-star" aria-hidden="true" />
                                        <i className="fa fa-star" aria-hidden="true" />
                                        <i className="fa fa-star" aria-hidden="true" />
                                        <i className="fa fa-star" aria-hidden="true" />
                                    </div>
                                    <div className="review">
                                        <a href="#">Write A Review</a>
                                    </div>
                                </div>
                                <p className="avaibility"><i className="fa fa-circle" /> In Stock</p>
                            </div>
                            <div className="short_overview my-5">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?</p>
                            </div>
                            <form className="cart clearfix" method="post">
                                <div className="cart-btn d-flex mb-50">
                                    <p>Qty</p>
                                    <div className="quantity">
                                        <span className="qty-minus q-product"><i className="fa fa-caret-down" aria-hidden="true" /></span>
                                        <input type="number" className="qty-text" id="qty" step={1} min={1} max={300} name="quantity" defaultValue={1} />
                                        <span className="qty-plus q-product"><i className="fa fa-caret-up" aria-hidden="true" /></span>
                                    </div>
                                </div>
                                <button type="submit" name="addtocart" value={5} className="btn amado-btn">Add to cart</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
);

export default Product;