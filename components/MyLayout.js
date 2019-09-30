import Search from './Search';
import MobileNav from './MobileNav';
import Header from './Header';
import Subscribe from './Subscribe';
import Footer from './Footer';

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowForm: false,
            isShowNav: false,
        };
    }
    handleToogleForm = () => {
        this.setState({
            isShowForm: !this.state.isShowForm,
        })
    }

    handleNav = () => {
        this.setState({
            isShowNav: !this.state.isShowNav,
        })
    }

    closeForm = () => {
        this.setState({
            isShowForm: !this.state.isShowForm,
        })
    }

    closeNav = () => {
        this.setState({
            isShowNav: !this.state.isShowNav,
        })
    }

    render() {
        let { isShowForm, isShowNav } = this.state
        let ElmForm = null
        let showHideNav = "header-area clearfix"
        let showHideSearch = null
        if (isShowForm) {
            showHideSearch = "search-wrapper-on"
        }
        if (isShowNav) {
            showHideNav = "header-area clearfix bp-xs-on"
        }
        return (
            <div className={showHideSearch}>
                <div >
                <Search onClickClose={this.closeForm} />
                </div>
                <div className="main-content-wrapper d-flex clearfix">
                    <MobileNav
                        onClickNav={this.handleNav}
                    />
                    <Header onClickClose={this.closeNav}
                        onClickToggleSearch={this.handleToogleForm}
                        showHideNav = {showHideNav}
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