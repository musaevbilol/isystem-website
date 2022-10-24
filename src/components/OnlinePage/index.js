function OnlinePage() {
  return (
    <>
      <section className="md:mx-14 mx-8">
        <div className="container  py-4">
          <div className="flex flex-col text-left w-full mb-8">
            <h1 className="text-grid1 py-4">Bizning kurslar</h1>
            <p className="text-grid2">O'zingizga mos Kursni tanlang</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex">
                <img
                  alt="gallery"
                  className=" object-cover object-center"
                  src="./photo/grid1.png"
                />
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex">
                <img
                  alt="gallery"
                  className=" object-cover object-center"
                  src="./photo/grid2.png"
                />
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex">
                <img
                  alt="gallery"
                  className=" object-cover object-center"
                  src="./photo/grid3.png"
                />
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex">
                <img
                  alt="gallery"
                  className=" object-cover object-center"
                  src="./photo/program.png"
                />
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex">
                <img
                  alt="gallery"
                  className=" object-cover object-center"
                  src="./photo/found.png"
                />
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex">
                <img
                  alt="gallery"
                  className=" object-cover object-center"
                  src="./photo/smm.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 */}

      <div className="flex flex-col mt-14">
        <p className="letter-p md:ml-12 mr-4 ml-8 mb-6">
          Yangi boshlovchilar va amaliyotchilar uchun taniqli<br></br> IT bozordagi
          so'nggi bilimlarni biz bilan o’rganing.
        </p>
        <div className="mt-4 mx-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="">
          <h1 className="number pb-12">6</h1>
          <p className="letter pb-2"> kurslar</p>
          <img src="./photo/line.png" className="line w-[275px]" />
        </div>
        <div className="">
          <h1 className="number pb-12">15</h1>
          <p className="letter pb-2"> Mentorlar</p>
          <img src="./photo/line.png" className=" line w-[275px]" />
        </div>
        <div>
          <h1 className="number pb-12">1000+</h1>
          <p className="letter pb-2"> Bitiruvchilar</p>
          <img src="./photo/line.png" className="line w-[275px]" />
        </div>
        <div>
          <h1 className="number pb-12">150</h1>
          <p className="letter pb-2"> Video darslar</p>
          <img src="./photo/line.png" className="line w-[275px]" />
        </div>
      </div>
      </div>
      
    </>
  );
}

export default OnlinePage;
