const EarlyAccess = () => {
  return (
    <>
      <div className=" w-full mx-auto bg-[#585989] text-[white] flex flex-col lg:max-xl:flex-row lg:max-xl:justify-between lg:max-xl:mt-[-100px] items-center text-center pt-20 pb-14 px-3 mt-16">
        <div className="w-10/12 mx-auto lg:max-xl:w-[40%]">
          <h1 className="text-lg font-bold lg:max-xl:text-2xl lg:max-xl:text-left">
            Get early access today
          </h1>
          <p className="text-xs  mt-5 lg:max-xl:text-base lg:max-xl:w-10/12  lg:max-xl:text-left">
            It only takes a few minute to sign up and our free starter tier is
            extremenly generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <div className="flex flex-col w-8/12 mt-5 lg:max-xl:w-[45%] ">
          <input
            className="border-2  text-xs py-1 rounded-sm mb-2 lg:max-xl:w-[80%] lg:max-xl:py-2 lg:max-xl:text-base "
            type="email"
            placeholder="email@example.com"
          />

          <button className=" bg-[#3065f8] py-1.5 text-xs lg:max-xl:w-4/12 lg:max-xl:py-3 lg:max-xl:text-sm font-semibold text-white rounded-sm shadow-md">
            Get Started For Free
          </button>
        </div>
      </div>
    </>
  );
};

export default EarlyAccess;
