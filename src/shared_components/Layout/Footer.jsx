import { Link } from "react-router-dom";
import Svg from "../../svg";
import Footer2 from "../footer2";

function Footer() {


  return (
    <>
<Footer2/>

      <footer className="footer1 ">
        <div className="">
        <div className="px-6">
          <h1 className="system-h1">
            <span className="text-i">i</span>system
            <p>IT academy</p>
          </h1>
          <nav className="">
            <label htmlFor="btn" className="button ">
              Ma'lumotlar
              <span className="">
                <i className="fa fa-chevron-down"></i>
              </span>
              <img
                src="./photo/newline.png"
                className="dropdown mb-4"
                alt="line"
              />
            </label>
            <input className="hidden" type="checkbox" id="btn"></input>
            <ul className="menu">
              <li>
                <Link to="/"></Link>Bog'lanish
              </li>
              <li className="faq">
                <Link to="/"></Link>FAQ
              </li>
            </ul>
            <label htmlFor="btn-2" className="button ">
              Ta'lim turi
              <span className="">
                <i className="fa fa-chevron-down"></i>
              </span>
              <img src="./photo/newline.png" className="mb-4" alt="line" />
            </label>
            <input className="hidden" type="checkbox" id="btn-2"></input>
            <ul className="menu">
              <li>
                <Link to="/"></Link>Online ta'lim
              </li>
              <li className="faq">
                <Link to="/"></Link>Ofline ta'lim
              </li>
            </ul>
            <label htmlFor="btn-3" className="button ">
              Hujjatlar
              <span className="">
                <i className="fa fa-chevron-down"></i>
              </span>
              <img src="./photo/newline.png" className="mb-4" alt="line" />
            </label>
            <input className="hidden" type="checkbox" id="btn-3"></input>
            <ul className="menu" id="last">
              <li>
                <Link to="/"></Link>Oferta shartnomasi
              </li>
              <li className="faq">
                <Link to="/"></Link>Maxfiylik siyosati
              </li>
            </ul>
          </nav>
        </div>
        </div>
        

        <div className="flex justify-center items-center flex-wrap px-6">
          <div className="pl-4">
            <h5 className="py-2 number1">+998 99 882 60 60</h5>
            <h5 className="py-2 number1">+998 99 664 60 60</h5>
            <h3 className="number2">“ISYSTEM” MCHJ, Stir000000000</h3>
            <h3 className="footer-style">
              Toshkent shahar Mirzo Ulug’bek tumani<br></br> Mustaqillik
              prospekti Mirzo Ulug’bek ko’ch. 54A
            </h3>
            <h3 className="footer-style">Ro’yxatdan o’tgan raqam 000000</h3>
          </div>
          <div className="flex justify-center mt-8">
            <Svg />
          </div>
          <img
            src="./photo/newline.png"
            className="image-last mt-4"
            alt="line"
          />
        </div>
        <h6 className="footer-h6 px-6 pt-4">© 2020, isystem.<br></br> Barcha huquqlar himoyalangan.</h6>
      </footer>
    </>
  );
}

export default Footer;
