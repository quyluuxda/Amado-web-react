import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../style.css"
import './_document'
import Layout from '../components/MyLayout'
import ShopSidebar from '../comps-shop/ShopSidebar'
import ShopItems from '../comps-shop/ShopItems'
// import ContentShop from '../comps-shop/ContentShop'
const Shop = () => (
    <Layout>
      <ShopSidebar/>
      <ShopItems/>
      {/* <ContentShop/> */}
    </Layout>
);

export default Shop;