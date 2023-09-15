import IconArrow from "../assets/icon-arrow.svg";

const FlyWorks = () => {
  return (
    <>
      <div className="mobile:max-lg:w-10/12 sm:max-md:w-11/12 lg:max-xl:w-10/12 mx-auto lg:max-xl:relative lg:max-xl:bottom-40">
        <div className="border-b-2 w-[42%] mobile:max-sm:w-6/12 lg:max-xl:w-[17%] pb-1 mx-auto lg:max-xl:mx-0 border-[#3c9f8f] mt-8  ">
          <div className="flex justify-between items-center">
            <div className="text-xs mobile:max-sm:text-xs lg:max-xl:text-base text-[#3c9f8f]">
              See how Fylo Works
            </div>
            <img className="lg:max-xl:w-[15%]" src={IconArrow} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FlyWorks;
