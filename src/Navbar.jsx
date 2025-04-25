function Navbar() {
  return (
    <div className="bg-white  py-5 px-4 flex justify-between items-center ">
      <div className="flex gap-[7rem] items-center opacity-75">
        <p className="text-[30px] font-bold">LOGO</p>

        <ul className=" gap-[44px] hidden lg:flex">
          <li>
            <a href="">Benefits</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Constructor</a>
          </li>
          <li>
            <a href="">Testimonials</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
        </ul>
      </div>

      <div className=" gap-5 hidden lg:flex items-center">
        <div className="">
          <div className="bg-lime-500 btn">Log In</div>
        </div>
        <div className="">
          <div className="bg-black btn ">Get Started</div>
        </div>
      </div>
      <button className="lg:hidden btn bg-purple-700 text-white">=</button>
    </div>
  );
}
export default Navbar;
