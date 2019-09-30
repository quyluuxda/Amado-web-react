import ShopItems from "./ShopItems"
import ShopSidebar from "./ShopSidebar"

const ContentShop = () => (
  <div>
    <div className="shop_sidebar_area">
      <ShopSidebar />
    </div>
    <div class="amado_product_area section-padding-100">
      <ShopItems />
    </div>
  </div>
);

export default ContentShop;