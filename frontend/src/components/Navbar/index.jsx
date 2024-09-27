export const Navbar = () => {
  //TODO: add logo later
  return (
    <nav className="px-[100px] py-5 text-base font-medium">
      <div className="flex items-center justify-between">
        <ul className="flex items-center gap-5">
          <li>Personal</li>
          <li>Business</li>
        </ul>
        <div className="flex gap-3 items-center text-[15px] leading-5">
          <button className="h-9 min-w-20 px-3 rounded-md hover:bg-[--light-purple] hover:text-[--primary-color] ease-in duration-200">
            Sign In
          </button>
          <button className="h-9 min-w-20 border border-[--light-purple] px-3 hover:bg-[--light-purple] hover:text-[--primary-color] ease-in duration-200 rounded-md">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};
