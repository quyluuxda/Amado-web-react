class MobileNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

openNav=()=>{
    this.props.onClickNav()
}

render(){
    return(
    <div className="mobile-nav">
        <div className="amado-navbar-brand">
            <a href="index.html"><img src="/static/img/core-img/logo.png" alt="true" /></a>
        </div>
        <div onClick={this.openNav} className="amado-navbar-toggler">
            <span /><span /><span />
        </div>
    </div>
)};
} 
export default MobileNav;