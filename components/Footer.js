import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Footer() {
    const router = useRouter();
    const menu = [
      {title:'Home', href:'/'},
      {title:'Shop', href:'/shop'},
      {title:'Cart', href:'/cart'},
      {title:'Checkout', href:'/checkout'},
  ];
  
  let menuItems = [];
  for (const item of menu){
      menuItems.push(
          <li 
          key={item.href} 
          className={item.href === router.pathname ? 'nav-item active' : 'nav-item'}
          >
              <Link href={item.href} as={item.href}>
                  <a className="nav-link">{item.title}</a>
              </Link>
          </li>
      )
  }
  return (
    <footer className="footer_area clearfix">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-lg-4">
                    <div className="single_widget_area">
                        <div className="footer-logo mr-50">
                            <Link href="/"><a><img src="/static/img/core-img/logo2.png" alt="true" /></a></Link>
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
                                <div className="collapse navbar-collapse" id="footerNavContent">
                                    <ul className="navbar-nav">
                                        {menuItems}
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
)};

