import Link from 'next/link';
const MainHome = () => (
    <div className="products-catagories-area clearfix">
        <div className="amado-pro-catagory row clearfix">
            <div className="single-products-catagory col-lg-4 clearfix">
                <Link href="/shop/[id]" as={`/shop/1`}>
                    <a href="">
                            <img src="static/img/product-img/pro-big-1.jpg" alt="true" />
                           
                        <div className="hover-content">
                            <div className="line" />
                            <p>From $180</p>
                            <h4>Modern Chair</h4>
                        </div>
                    </a>
                </Link>   
            </div>
            <div className="single-products-catagory col-lg-4 clearfix">
                <Link href="/shop/[id]" as={`/shop/2`}> 
                    <a href="">
                        <img src="static/img/product-img/pro-big-5.jpg" alt="true" />
                        <div className="hover-content">
                            <div className="line" />
                            <p>From $180</p>
                            <h4>Minimalistic Plant Pot</h4>
                        </div>
                    </a>
                </Link>
            </div>
            <div className="single-products-catagory col-lg-4 clearfix">
                <Link href="/shop/[id]" as={`/shop/3`}>
                    <a href="">
                        <img src="static/img/bg-img/3.jpg" alt="true" />
                        <div className="hover-content">
                            <div className="line" />
                            <p>From $180</p>
                            <h4>Modern Chair</h4>
                        </div>
                    </a>
                </Link>
            </div>
            <div className="single-products-catagory col-lg-4 clearfix">
                <Link href="/shop/[id]" as={`/shop/4`}>
                    <a href="">
                        <img src="static/img/bg-img/4.jpg" alt="true" />
                        <div className="hover-content">
                            <div className="line" />
                            <p>From $180</p>
                            <h4>Night Stand</h4>
                        </div>
                    </a>
                </Link>                  
            </div>
            <div className="single-products-catagory col-lg-4 clearfix">
                <Link href="/shop/[id]" as={`/shop/5`}>
                    <a href="">
                        <img src="static/img/bg-img/5.jpg" alt="true" />
                        <div className="hover-content">
                            <div className="line" />
                            <p>From $18</p>
                            <h4>Plant Pot</h4>
                        </div>
                    </a>
                </Link>
            </div>
            <div className="single-products-catagory col-lg-4 clearfix">
                <Link href="/shop/[id]" as={`/shop/6`}>
                    <a href="">
                        <img src="static/img/bg-img/6.jpg" alt="true" />
                        <div className="hover-content">
                            <div className="line" />
                            <p>From $320</p>
                            <h4>Small Table</h4>
                        </div>
                    </a>
                </Link>
            </div>
            <div className="single-products-catagory col-lg-4 clearfix">
                <Link href="/shop/[id]" as={`/shop/7`}>
                    <a href="">
                        <img src="static/img/product-img/pro-big-3.jpg" alt="true" />
                        <div className="hover-content">
                            <div className="line" />
                            <p>From $318</p>
                            <h4>Metallic Chair</h4>
                        </div>
                    </a>
                </Link>
            </div>
            <div className="single-products-catagory col-lg-4 clearfix">
                <Link href="/shop/[id]" as={`/shop/8`}>
                    <a href="">
                        <img src="static/img/product-img/pro-big-2.jpg" alt="true" />
                        <div className="hover-content">
                            <div className="line" />
                            <p>From $318</p>
                            <h4>Modern Rocking Chair</h4>
                        </div>
                    </a>
                </Link>
            </div>
            <div className="single-products-catagory col-lg-4 clearfix">
                <Link href="/shop/[id]" as={`/shop/9`}>
                    <a href="">
                        <img src="static/img/bg-img/9.jpg" alt="true" />
                        <div className="hover-content">
                            <div className="line" />
                            <p>From $318</p>
                            <h4>Home Deco</h4>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    </div>
);

export default MainHome;