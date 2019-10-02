import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../style.css"
import '../_document'
import Layout from '../../components/MyLayout'
import ShopSidebar from '../../comps-shop/ShopSidebar'
import ShopItems from '../../comps-shop/ShopItems'
const Shop = () => (
    <Layout>
      <ShopSidebar/>
      <ShopItems/>
    </Layout>
);

export default Shop;