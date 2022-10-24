
// import "swiper/css/pagination";
// import { Pagination } from "swiper";
// import "swiper/css";

// function SWIPER() {
//   return (
//     <>
//     <div className="mx-24 mt-12"><h1 className="mentorlar">Mentorlar</h1>
// </div>
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={10}
//         pagination={{
//           clickable: true,
//         }}
//         breakpoints={{
//           "@0.00": {
//             slidesPerView: 1,
//             spaceBetween: 10,
//           },
//           "@0.75": {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           "@1.00": {
//             slidesPerView: 3,
//             spaceBetween: 40,
//           },
//           "@1.50": {
//             slidesPerView: 4,
//             spaceBetween: 50,
//           },
//         }}
//         modules={[Pagination]}
//         className="md:mt-14 mySwiper"
//       >
//         <SwiperSlide>
//           <img src="./photo/azamjon.png"></img>
//           /         </SwiperSlide>
//         <SwiperSlide>
//           <img src="./photo/ozodbek.png" />
//           
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="./photo/jasurbek.png" />
//          
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="./photo/fozilbek.png" />
//          
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="./photo/girl.png" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="./photo/girl.png" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="./photo/girl.png" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="./photo/girl.png" />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

// export default SWIPER;
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './slider.css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'
const SliderComponent = () => {
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
    <div className='md:p-20  mx-4 mt-8'>
      <h1 className='swiper-title mb-12 mx-2'>O'quvchilar murojaati</h1>
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
          <img
            className="md:w-[260px] h-[340px] object-cover"
            src="./photo/aziz.png"
            alt="dlkgfksd"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[260px] h-[350px] object-cover"
            src="./photo/umidjon.png"
            alt="dlkgfksd"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[260px] h-[350px] object-cover"
            src="./photo/jamshid.png"
            alt="dlkgfksd"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[260px] h-[350px] object-cover"
            src="./photo/islombek.png"
            alt="dlkgfksd"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[260px] h-[350px] object-cover"
            src="./photo/fozilbek.png"
            alt="dlkgfksd"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[260px] h-[350px] object-cover"
            src="https://i.postimg.cc/0yCnR6K3/photo-2022-10-20-13-05-02.jpg"
            alt="dlkgfksd"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[260px] h-[350px] object-cover"
            src="https://i.postimg.cc/0yCnR6K3/photo-2022-10-20-13-05-02.jpg"
            alt="dlkgfksd"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[260px] h-[350px] object-cover"
            src="https://i.postimg.cc/0yCnR6K3/photo-2022-10-20-13-05-02.jpg"
            alt="dlkgfksd"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[260px] h-[350px] object-cover"
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

export default SliderComponent
