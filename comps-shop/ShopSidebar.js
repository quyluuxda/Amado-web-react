// import RangeSlide from "./RangeSlide"
const ShopSidebar = () => (
  <div className="shop_sidebar_area">
    <div className="widget catagory mb-50">
      <h6 className="widget-title mb-30">Catagories</h6>
      <div className="catagories-menu">
        <ul>
          <li className="active"><a href="#">Chairs</a></li>
          <li><a href="#">Beds</a></li>
          <li><a href="#">Accesories</a></li>
          <li><a href="#">Furniture</a></li>
          <li><a href="#">Home Deco</a></li>
          <li><a href="#">Dressings</a></li>
          <li><a href="#">Tables</a></li>
        </ul>
      </div>
    </div>
    <div className="widget brands mb-50">
      <h6 className="widget-title mb-30">Brands</h6>
      <div className="widget-desc">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" defaultValue id="amado" />
          <label className="form-check-label" htmlFor="amado">Amado</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" defaultValue id="ikea" />
          <label className="form-check-label" htmlFor="ikea">Ikea</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" defaultValue id="furniture" />
          <label className="form-check-label" htmlFor="furniture">Furniture Inc</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" defaultValue id="factory" />
          <label className="form-check-label" htmlFor="factory">The factory</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" defaultValue id="artdeco" />
          <label className="form-check-label" htmlFor="artdeco">Artdeco</label>
        </div>
      </div>
    </div>
    <div className="widget color mb-50">
      <h6 className="widget-title mb-30">Color</h6>
      <div className="widget-desc">
        <ul className="d-flex">
          <li><a href="#" className="color1" /></li>
          <li><a href="#" className="color2" /></li>
          <li><a href="#" className="color3" /></li>
          <li><a href="#" className="color4" /></li>
          <li><a href="#" className="color5" /></li>
          <li><a href="#" className="color6" /></li>
          <li><a href="#" className="color7" /></li>
          <li><a href="#" className="color8" /></li>
        </ul>
      </div>
    </div>
    <div className="widget price mb-50">
      <h6 className="widget-title mb-30">Price</h6>
      {/* <RangeSlide/> */}
    </div>
  </div>
);

export default ShopSidebar;