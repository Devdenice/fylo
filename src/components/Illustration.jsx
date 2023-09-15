import image from "../assets/illustration-2.svg";

const Illustration = () => {
  return (
    <>
      <div className="mobile:max-lg:w-10/12 sm:max-md:w-11/12 lg:max-xl:w-10/12 mx-auto">
        <svg
          className="w-screen"
          width="1440"
          height="200"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="90 100 1620 1"
        >
          <path
            d="M0 72.728C318.801 24.243 558.801 0 720 0c161.199 0 401.199 24.243 720 72.728v765.146H0V72.728z"
            fill="#F8F8FE"
            // fill="#000"
            mask="url(#b)"
          />
        </svg>
        <div className="lg:max-xl:flex">
          <div className="lg:max-xl:order-2">
            <img
              className="mobile:max-sm:mx-auto mobile:max-sm:w-10/12 lg:max-xl:w-9/12 lg:max-xl:flex lg:max-xl:float-right relative mx-auto bottom-5 bg-[#F8F8FE]"
              src={image}
              alt=""
            />
          </div>
          <div className="lg:max-xl:order-1">
            <h5 className="text-[#070439] mobile:max-sm:text-sm mobile:max-sm:text-center mobile:max-sm:font-bold mobile:max-sm:mt-5 lg:max-xl:text-3xl font-bold">
              Stay productive, wherever you are
            </h5>
            <p className=" text-[#585989] mobile:max-sm:text-xs lg:max-xl:text-sm mobile:max-sm:w-full font-medium mobile:max-sm:mt-7 lg:max-xl:mt-7">
              Never let location be an issue when accessing your files. Fylo has
              you covered fro all of your file storage needs.
            </p>
            <p className=" text-[#585989] mobile:max-sm:text-xs lg:max-xl:text-sm mobile:max-sm:w-full font-medium mobile:max-sm:mt-5 lg:max-xl:mt-5">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachements required!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Illustration;
