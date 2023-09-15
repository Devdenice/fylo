import LogoWhite from "../assets/logo-white.svg";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RxInstagramLogo } from "react-icons/rx";
import { RiTwitterLine } from "react-icons/ri";
import PhoneIcon from "../assets/icon-phone.svg";
import EmailIcon from "../assets/icon-email.svg";

const Footer = () => {
  return (
    <>
      <div className="bg-[#070439] text-white   ">
        <div className=" mobile:max-sm:pt-12 mobile:max-sm:w-10/12  sm:max-md:w-11/12 lg:max-xl:w-10/12 mx-auto lg:max-xl:flex lg:max-xl:justify-between mobile:max-sm:block lg:max-xl:py-20 mobile:max-sm:text-sm">
          <div className="">
            <img className="mobile:max-sm:w-6/12" src={LogoWhite} alt="" />
            <div className="pt-6 lg:max-xl:flex items-center mobile:max-sm:flex">
              <img
                className="w-[22px] h-[20px] mobile:max-sm:w-[12px] mobile:max-sm:h-[12px]"
                src={PhoneIcon}
                alt=""
              />
              <p className="ml-4 text-base mobile:max-sm:ml-2 mobile:max-sm:text-xs">
                Phone: +1-543-123-4567
              </p>
            </div>
            <div className="pt-5 lg:max-xl:flex items-center  mobile:max-sm:flex">
              <img
                className="w-[22px] h-[20px] mobile:max-sm:w-[13px] mobile:max-sm:h-[12px]"
                src={EmailIcon}
                alt=""
              />
              <p className="ml-4 text-base mobile:max-sm:ml-2 mobile:max-sm:text-xs">
                example@fylo.com
              </p>
            </div>
          </div>
          <div className=" lg:max-xl:flex lg:max-xl:flex-col lg:max-xl:pt-14 mobile:max-sm:pt-8">
            <p className="pt-5 text-base mobile:max-sm:text-xs mobile:max-sm:pt-2">
              About
            </p>
            <p className="pt-5 text-base mobile:max-sm:text-xs mobile:max-sm:pt-2">
              Job
            </p>
            <p className="pt-5 text-base mobile:max-sm:text-xs mobile:max-sm:pt-2">
              Press
            </p>
            <p className="pt-5 text-base mobile:max-sm:text-xs mobile:max-sm:pt-2">
              Blog
            </p>
          </div>
          <div className="lg:max-xl:flex lg:max-xl:flex-col lg:max-xl:pt-14 mobile:max-sm:pt-8">
            <p className="pt-5 text-base mobile:max-sm:text-xs mobile:max-sm:pt-2">
              Contact Us
            </p>
            <p className="pt-5 text-base mobile:max-sm:text-xs mobile:max-sm:pt-2">
              Terms
            </p>
            <p className="pt-5 text-base mobile:max-sm:text-xs mobile:max-sm:pt-2">
              Privacy
            </p>
          </div>
          <div className="pt-10 flex justify-between mobile:max-sm:w-4/12  mobile:max-sm:text-xl mobile:max-sm:mx-auto mx-auto lg:max-xl:w-1/12 lg:max-xl:mx-0 text-2xl lg:max-xl:pt-20 lg:max-xl:mr-28">
            <RiFacebookCircleLine />
            <RiTwitterLine />
            <RxInstagramLogo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
