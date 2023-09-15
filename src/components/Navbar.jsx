import NavLogo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between mobile:max-lg:w-10/12 lg:max-xl:w-10/12 mx-auto mobile:my-5 mobile:items-center ">
        <div>
          <img
            className="mobile:max-md:w-20 md:max-xl:w-24"
            src={NavLogo}
            alt=""
          />
        </div>
        <div>
          <div className="flex mobile:max-md:text-xs md:max-xl:text-sm mobile:max-md:w-36 md:max-xl:w-56  mobile:max-xl:justify-between ">
            <h6>Features</h6>
            <h6>Team</h6>
            <h6>Sign In</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
