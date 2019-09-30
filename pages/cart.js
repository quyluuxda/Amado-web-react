import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../style.css"
import './_document'
import Layout from '../components/MyLayout'
import MainCart from '../comps-cart/MainCart'
const Cart = () => (
    <Layout>
      <MainCart/>
    </Layout>
);

export default Cart;