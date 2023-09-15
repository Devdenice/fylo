import Quotes from "../assets/icon-quotes.svg";
import AvatarTestominial from "../assets/avatar-testimonial.jpg";

const Testimony = () => {
  return (
    <>
      <div className="mobile:max-lg:w-10/12 sm:max-md:w-11/12 lg:max-xl:w-10/12 mx-auto lg:max-xl:relative bottom-48">
        <div className=" mobile:max-sm:w-11/12 sm:max-md:w-11/12 lg:max-xl:w-4/12 lg:max-xl:p-8 mx-auto lg:max-xl:mx-0  shadow-2xl rounded-lg mt-10">
          <div className="mobile:max-sm:py-7 mobile:max-sm:px-5 ">
            <img src={Quotes} alt="" />
            <p className="mobile:max-sm:text-[9px]  font-semibold lg:max-xl:font-medium text-[#070439] mt-2">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex items-center mt-3 ">
              <img
                className="rounded-full mobile:max-sm:w-[30px] mobile:max-sm:h-7 lg:max-xl:w-[50px] mr-2"
                src={AvatarTestominial}
                alt=""
              />
              <div>
                <h4 className="text-[#070439] mobile:max-sm:text-[10px] font-semibold">
                  Kyle Burtton
                </h4>
                <p className="text-[#585989] mobile:max-sm:text-[7px] lg:max-xl:text-xs font-medium">
                  Founder and CEO, Huddle
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimony;
