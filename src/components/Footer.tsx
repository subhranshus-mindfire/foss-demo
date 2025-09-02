import * as React from "react";

export function Footer() {
  return (
    <footer className="w-full border-t py-6 mt-10">

      {/* Logo / Brand */}
      <div className="mb-4 md:mb-0 font-semibold text-white font-xl text-center ">
        Taskify &copy; {new Date().getFullYear()} All right reserved
      </div>


    </footer>
  );
}
