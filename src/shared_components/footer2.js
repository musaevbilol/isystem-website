import "./Layout/index.css";
import Svg from "../svg";

function Footer2() {
  return (
    <div className="footer first-footer md:px-24 px-8 md:pb-8">
      <div className="  grid md:grid-cols-5  md:py-16 ">
        <div className="FooterNumber">
          <h1 className="system-h1 relative">
            <span className="text-i ">i</span>system
            <p className="">IT academy</p>
            <h2 className="text-white absolute top-[8%] left-[49%]">_</h2>
          </h1>
          <h6 className="md:mt-4">+998 99 882 60 60</h6>
          <h6 className="mt-2 mb-4">+998 99 884 60 60</h6>
          <Svg />
        </div>
        
        <div className="info four">
          <h3>Ma'lumotlar</h3>
          <h5>Bog'lanish</h5>
          <h5>FAQ</h5>
        </div>
        <div className="info four">
          <h3>Ta'lim turi</h3>
          <h5>Ofline ta'lim</h5>
          <h5>Online ta'lim</h5>
        </div>
        <div className="info four">
          <h3>Hujjatlar</h3>
          <h5>Oferta shartnomasi</h5>
          <h5>Maxfiylik siyosati</h5>
        </div>
        <div className="address four ">
          <h3>
            “ISYSTEM” MCHJ,<br></br>Stir000000000
          </h3>
          <h3 className="flex flex-wrap">
            Toshkent shahar  Mirzo Ulug’bek tumani  Mustaqillik
            prospekti Mirzo Ulug’bek ko’ch. 54A Ro’yxatdan
            o’tgan raqam 000000
          </h3>
        </div>
      </div>
      <img className="vector" src="./photo/Vector .png"></img>
      <div className="mt-4">
        <p className="footer-p">
          © 2020, isystem.<br></br>
          Barcha huquqlar himoyalangan.
        </p>
      </div>
    </div>
  );
}

export default Footer2;
