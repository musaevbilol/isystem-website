import { Link } from "react-router-dom";
import Hamkorlarimiz from "../../components/Hamkorlarimiz";
import OnlinePage from "../../components/OnlinePage";
import KaryeraMentor from "../../components/OnlinePage/KaryeraMentor";
import SliderComponent from "../../components/swiper/swiper";
import SwiperComponent from "../../components/swiper1/swiper1";
import Swiper2 from "../../components/swiper2/swiper2";
import Layout from "../../shared_components/Layout";

function Online() {
  return (
    <Layout>
        <>
        <div className="md:ml-8 md:mr-12">
        <section className="bg-white dark:bg-black mx-4 page-1">
        <div className="gap-4 items-center py-8 pl-2  lg:grid lg:grid-cols-2 lg:py-16 lg:mx-[30px]">
          <div className="text-res">
            <h2 className="">
              <span className="Talim">T</span>a'lim bu ishonchli sarmoya
            </h2>
            <p className="dasturlash">
              Dasturlash sohasida talab darajasi yuqori<br></br>bo'lgan
              yo'nalishlarni biz bilan o'rganing.
            </p>
            <Link to="/" className="ariza">
              Ariza qoldirish
            </Link>
          </div>
          <div className=" flex  md:gap-12 gap-8 mt-8">
            <img
              className="boy"
              src="./photo/boy1.png"
              alt="office content 1"
            />
            <img
              className="girl"
              src="./photo/girl.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-black mx-4 md:hidden block page-2">
        <div className="gap-4 items-center py-8 pl-2  lg:grid lg:grid-cols-2 lg:py-14 lg:mx-[30px]">
         
          <div className=" flex  md:gap-12 gap-8 mt-8">
            <img
              className="boy"
              src="./photo/boy1.png"
              alt="office content 1"
            />
            <img
              className="girl"
              src="./photo/girl.png"
              alt="office content 2"
            />
          </div>
          <div className="text-res mt-4">
            <h2>
              <span className="Talim">T</span>a'lim bu ishonchli sarmoya
            </h2>
            <p className="dasturlash">
              Dasturlash sohasida talab darajasi yuqori<br></br>bo'lgan
              yo'nalishlarni biz bilan o'rganing.
            </p>
            <Link to="/" className="ariza">
              Ariza qoldirish
            </Link>
          </div>
        </div>
      </section>
      <OnlinePage/>
        </div>
        <KaryeraMentor/>
        <SwiperComponent/>
        <Swiper2/>
        <SliderComponent/>
        <Hamkorlarimiz/>
        
      </>
    </Layout>
  );
}

export default Online;
