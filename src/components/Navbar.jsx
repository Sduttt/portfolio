import Navbtn from "./Navbtn";

import Logo from "./assets/logo-black.png";

function Navbar() {
  return (
    <>
      <nav className="hidden sm:flex mx-2 sm:mx-16 font-nav flex justify-between sm:my-[-20px]">
        <button>
          <Navbtn url="https://sdutta.hashnode.dev/" text="BLOG" />
          <Navbtn url="#project" text="PROJECTS" />
        </button>
        <img src={Logo} alt="Logo" className="w-40" />
        <button>
          <Navbtn url="mailto:subhamdutta588@gmail.com" text="CONTACT ME" />
          <Navbtn
            url="https://drive.google.com/file/d/1PNo88DEgvupf_GuNkbFVc1bmsjz42FHg/view?usp=sharing"
            text="RESUME"
          />
        </button>
      </nav>
      <nav className="flex sm:hidden p-4 flex items-center justify-between">
      <img src={Logo} alt="Logo" className="w-32" />
      <Navbtn url="https://sdutta.hashnode.dev/" text="BLOG" />
      </nav>
    </>
  );
}
export default Navbar;
