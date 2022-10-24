function Hamkorlarimiz() {
  return (
    <>
      <div className="pb-16">
        <div className="container mx-auto pt-16">
          <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 sm:mb-10 mb-16">
            <h1 className="hamkor md:px-16">Hamkorlarimiz</h1>
            <p className="lorem md:px-16">
              Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            </p>
          </div>
          <div className="xl:py-8 lg:py-12 md:py-12 sm:py-12 px-15 flex flex-wrap">
            <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pb-10 pb-16 items-center">
              <img
                className="img-atto"
                src="./photo/svgimage.png"
                alt="atto"
                id="atto"
              />
            </div>
            <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pb-10 pb-16 items-center">
              <img
                className="img-apaya"
                src="./photo/apaya.png"
                alt="apaya"
              />
            </div>
            <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pb-10 pb-16 pt-4 items-center">
              <img
                className="img-omni"
                src="./photo/omni.png"
                alt="Omni"
              />
            </div>
            <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pb-10 pb-16 items-center">
              <img
                className="w-[178px] h-[59.44px] img-freego"
                src="./photo/freego.png"
                alt="Freego"
              />
            </div>
            <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 items-center">
              <img
                className="img-okai"
                src="./photo/okaiimage.png"
                alt="GS1"
              />
            </div>
            <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 items-center">
              <img
                className="img-obb"
                src="./photo/obb.png"
                alt="BlackBerry"
              />
            </div>
            <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 lg:pt-10 md:pt-2 pt-16">
              <img
                className="img-payfort"
                src="./photo/payfort.png"
                alt="Mini"
              />
            </div>
            <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 lg:pt-10 md:pt-2 pt-16">
              <img
                className="img-checkout"
                src="./photo/checkout.png"
                alt="checkout"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ---------we helps choose to you----------- */}

      <div className="container my-[10px]  md:mx-auto md:px-4 md:mb-24 choose-main">
        <section className="mb-32 pt-12">
          <div className="flex flex-wrap">
            <div className=" mb-6 md:mb-0 w-full md:w-6/12 md:mx-2 lg:px-6">
              <h2 className="choose-h2 mb-8">
                Biz sizga tanlashda yordam beramiz!
              </h2>
              <p className="choose-p mb-8 ">
                Savollaringiz bo'lsa yoki nimani tanlashni bilmasangiz,raqamingizni qoldiring: biz barcha savollaringizga javob berish uchun qo'ng'iroq qilamiz.
              </p>
            </div>
            <div className="px-4">
              <form
                method="POST"
              >
                <div className="mb-6">
                  <input
                    type="text"
                    className="choose-input"
                    id="exampleInput7"
                    placeholder="Ismingiz"
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    type="email"
                    className="choose-input"
                    id="exampleInput8"
                    placeholder="Telefon"
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    className="choose-input"
                    id="exampleFormControlinput13"
                    rows="3"
                    placeholder="E-mail"
                  ></input>
                </div>
                <p className="choose-pp mb-8">
                  Shaxsiy ma’luotlarni qayta ishlash va foydalanish shartlariga
                  roziman
                </p>
                <button
                  type="submit"
                  className="
                  choose-button
            w-[450px]
            h-[50px]"
                >
                  Jo'natish
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Hamkorlarimiz;
