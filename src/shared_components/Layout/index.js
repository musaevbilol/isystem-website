import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout(props) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar/>
        <div className="flex-1">
          <h1>{props.children}</h1>
        </div>
        <Footer/>
      </div>
    );
  }
  
  export default Layout;
  