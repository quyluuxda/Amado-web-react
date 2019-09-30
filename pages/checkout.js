import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../style.css"
import './_document'
import Layout from '../components/MyLayout'
import Checkout from '../comps-checkout/Checkout'
const CheckoutPage = () => (
    <Layout>
      <Checkout/>
    </Layout>
);
export default CheckoutPage;