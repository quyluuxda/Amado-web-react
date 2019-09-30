import Search from './Search';
import MobileNav from './MobileNav';
import Header from './Header';
import Subscribe from './Subscribe';
import Footer from './Footer';

// const Layout = props => (
//     <body>
//         <div className="search-wrapper section-padding-100">
//             <Search />
//         </div>
//         <div className="main-content-wrapper d-flex clearfix">
//             <MobileNav />
//             <Header />
//             {props.children}
//         </div>
//         <Subscribe />
//         <Footer />
//     </body>
// );

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showHideSearch: "search-wrapper-on",
        };
        // this.handleClick = this.handleClick.bind(this);
    }
    
    render() {
        const { showHideSearch } = this.state
        return (
            <div className={this.state.showHideSearch}>
                <div className="search-wrapper section-padding-100">
                    <Search />
                </div>
                <div className="main-content-wrapper d-flex clearfix">
                    <MobileNav />
                    <Header 
                    showHideSearch = {showHideSearch}
                    // toggleSearch={this.toggleSearch.bind(this)}
                    />
                    {this.props.children}
                </div>
                <Subscribe />
                <Footer />
            </div>
        )
    }
}


export default Layout;