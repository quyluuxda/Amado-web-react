import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../style.css"
import './_document'
import Layout from '../components/MyLayout'
import MainHome from '../components/MainHome'

const Index = () => (
    <Layout>
      <MainHome/>
    </Layout>
);

export default Index;