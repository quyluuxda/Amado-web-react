class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    closeForm=(value)=>{
        this.props.onClickClose(value)
    }
    render() {
        return (
            <div className="search-wrapper section-padding-50">
                <div onClick={this.closeForm} className="search-close">
                    <i className="fa fa-close" aria-hidden="true" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="search-content">
                                <form action="#" method="get">
                                    <input type="search" name="search" id="search" placeholder="Type your keyword..." />
                                    <button type="submit"><img src="static/img/core-img/search.png" alt="true" /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}
export default Search;