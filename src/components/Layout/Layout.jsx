import Header from "../Header/Header"
import { Outlet } from "react-router-dom";
import Herocmp from '../Herocmp/Herocmp';
import Footer from "../Footer/Footer";
const Layout=()=>{
    return(
        <div>
        <Header/>
<Herocmp style={{marginTop:'-40px'}} />
        <main style={{width:'100%',marginLeft:'0',marginRight:'0',marginTop:'60px',marginBottom:'10px'}}>
      
        <Outlet className="outlet-design"/>
        </main>
        <div>
        <Footer/>
        </div>
       
        </div>
    )
}

export default Layout;