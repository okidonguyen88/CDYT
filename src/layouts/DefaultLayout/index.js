import Header from "~/layouts/LayoutElements/Header";
import Footer from "~/layouts/LayoutElements/Footer";
import MainMenu from "~/components/MainMenu";
import {trangchuMenu as menuItems} from "~/data";

function DefaultLayout({children}) {
    
    return ( <div>
        <Header/>        
        <MainMenu menuItems={menuItems} color={"#288b6c"}/>           
        <div style={{minHeight:"500px"}}>{children}</div>
        <Footer/>
    </div> );
}

export default DefaultLayout;