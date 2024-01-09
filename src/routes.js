import './styles/global.css'
import Checkout from './pages/checkout';
import Petshop from './pages/petshop';
import Home from '../../web/src/pages/home/index'
import Cadastro from './pages/cadastro';
import Sidebar from './components/sidebar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


const RoutesPage = () =>{
    return(
       <Router>
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/petshop/:id" exact element={<Petshop/>}/>
            <Route path="/checkout" exact element={<Checkout/>}/>
            <Route path="/cadastro" exact element={<Cadastro/>}/>
        </Routes>
        <Sidebar/>
     </Router>
    )
}
export default RoutesPage;