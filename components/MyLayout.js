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
        };
    }
    handleToogleForm = () => {
        this.setState({
            isShowForm: !this.state.isShowForm,
        })
    }

    closeForm = () => {
        this.setState({
            isShowForm: !this.state.isShowForm,
        })
    }

    render() {
        let { isShowForm } = this.state
        let ElmForm = null
        let showHideSearch = null
        if (isShowForm) {
            ElmForm = <Search onClickClose={this.closeForm} />
            showHideSearch = "search-wrapper-on"
        }
        return (
            <div className={showHideSearch}>
                <div >
                    {ElmForm}
                </div>
                <div className="main-content-wrapper d-flex clearfix">
                    <MobileNav />
                    <Header
                        onClickToggleSearch={this.handleToogleForm}
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