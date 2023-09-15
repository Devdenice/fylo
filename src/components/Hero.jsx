import Illustration1 from "../assets/illustration-1.svg";

const Hero = () => {
  return (
    <>
      <div className=" mobile:max-lg:w-10/12 sm:max-md:w-11/12 lg:max-xl:w-10/12 lg:max-xl:h-full lg:max-xl:mt-24 lg:max-xl:flex lg:max-xl:items-center mx-auto">
        <div className="lg:max-xl:order-2">
          <img
            className="flex mobile:max-md:mt-20 sm:max-md:w-9/12 sm:max-md:mx-auto lg:max-xl:w-10/12 lg:max-xl:float-right"
            src={Illustration1}
            alt=""
          />
        </div>
        <div className="lg:max-xl:order-1  lg:max-xl:w-full">
          <h4 className="text-[#070439] mobile:max-md:text-xl sm:max-md:text-3xl mobile:max-md:mt-10 mobile:px-1 mobile:font-bold mobile:text-center lg:max-xl:text-left lg:max-xl:text-3xl">
            All of your files in one secure location, accessible anywhere.
          </h4>
          <p className="text-[#585989] mobile:text-xs sm:max-md:text-base lg:max-xl:text-sm mobile:text-center lg:max-xl:text-left mobile:w-10/12 sm:max-md:w-9/12 lg:max-xl:w-10/12 mobile:mx-auto lg:max-xl:mx-0 mobile:mt-5 ">
            Fylo stores your most important file in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers .
          </p>
          <div className="flex mobile:max-md:flex-col md:max-xl:flex-row mobile:w-10/12 sm:max-md:w-4/6 lg:max-xl:w-full lg:max-xl:items-center mobile:mt-5 mobile:mx-auto">
            <input
              className="border-2 mobile:py-3 lg:max-xl:py-3 rounded-md pl-5 text-xs sm:max-md:text-base lg:max-xl:w-[45%] lg:max-xl:mr-4"
              type="email"
              placeholder="Enter your email..."
            />

            <button className="mobile:mt-2 lg:max-xl:mt-0  mobile:py-3 lg:max-xl:px-10 lg:max-xl:py-3 lg:max-xl:w-[30%] bg-[#3065f8] text-xs sm:max-md:text-base font-bold text-white rounded-md shadow-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
