import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import '../swiper1/swiper1.css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'
const SwiperComponent = () => {
  const swiperRef = useRef()
  const sliderSettings = {
    360: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    375: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    440: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    680: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  }

  return (
    <div className='swiper1-main  md:mx-24  mt-8'>
      <h1 className='swiper-title mb-12 mx-8'>Mentorlar</h1>
      <Swiper 
      className='grid-container'
        slidesPerView={4}
        breakpoints={sliderSettings}
        pagination={{
          clickable: true,
          type: 'fraction',
        }}
        modules={[Pagination]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
      >
        <SwiperSlide>
         <div className='main1 ml-4'>
         <img 
            className="w-[270px] h-[350px] object-cover azamjon"
            src="./photo/azamjon.png"
            alt="dlkgfksd"
          />
          <h3 className="azam mt-4 mb-4">
             Azamjon<br></br> Nemadaliyev
           </h3>
           <svg
             width="252"
             height="2"
             viewBox="0 0 252 2"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path d="M1 1H251" stroke="black" strokeLinecap="round" />
           </svg>
           <p className="mt-6 ozod">Software Engineering</p>
         </div>
        </SwiperSlide>
        <SwiperSlide>
      <div className='mr-4'>
      <img
            className="w-[270px] h-[350px] object-cover ozodbek"
            src="./photo/ozodbek.png"
            alt="dlkgfksd"
          />
          <h3 className="azam mt-4 mb-4">
             Ozodbek<br></br>Oripjonov
           </h3>
           <svg
             width="252"
             height="2"
             viewBox="0 0 252 2"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path d="M1 1H251" stroke="black" strokeLinecap="round" />
           </svg>
          <p className="mt-6 ozod">Midle Frontend</p>
      </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[270px] h-[350px] object-cover"
            src="./photo/jasurbek.png"
            alt="dlkgfksd"
          />
           <h3 className="azam mt-4 mb-4">
             Jasurbek<br></br>Abdulxasanov
           </h3>
           <svg
             width="252"
             height="2"
             viewBox="0 0 252 2"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path d="M1 1H251" stroke="black" strokeLinecap="round" />
           </svg>
           <p className="mt-6 ozod">Web Desigener<br></br>UI/UX</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[270px] h-[350px] object-cover"
            src="./photo/fozilbek.png"
            alt="dlkgfksd"
          />
           <h3 className="azam mt-4 mb-4">
             Fozilbek<br></br> Imomov
           </h3>
           <svg
             width="252"
             height="2"
             viewBox="0 0 252 2"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path d="M1 1H251" stroke="black" strokeLinecap="round" />
           </svg>
         <p className="mt-6 ozod">Android<br></br>Devolper</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[270px] h-[350px] object-cover"
            src="./photo/fozilbek.png"
            alt="dlkgfksd"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[270px] h-[350px] object-cover"
            src="https://i.postimg.cc/0yCnR6K3/photo-2022-10-20-13-05-02.jpg"
            alt="dlkgfksd"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[270px] h-[350px] object-cover"
            src="https://i.postimg.cc/0yCnR6K3/photo-2022-10-20-13-05-02.jpg"
            alt="dlkgfksd"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[270px] h-[350px] object-cover"
            src="https://i.postimg.cc/0yCnR6K3/photo-2022-10-20-13-05-02.jpg"
            alt="dlkgfksd"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[270px] h-[350px] object-cover"
            src="https://i.postimg.cc/0yCnR6K3/photo-2022-10-20-13-05-02.jpg"
            alt="dlkgfksd"
          />
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-center space-x-12 mt-5 relative">
        <button
          className="swiper-button-prev-custom "
          onClick={() => swiperRef.current?.slidePrev()}
        ></button>
        <button
          className="swiper-button-next-custom "
          onClick={() => swiperRef.current?.slideNext()}
        ></button>
      </div>
    </div>
  )
}

export default SwiperComponent
