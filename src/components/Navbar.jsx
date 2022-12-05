import Navbtn from "./Navbtn";


import Logo from './assets/logo-black.png'

function Navbar(){
    return(
        <nav className="mx-16  font-nav flex justify-between my-[-20px]">
            <button>
            <Navbtn url="https://sdutta.hashnode.dev/" text="BLOG"/>
            <Navbtn url="#project" text="PROJECTS"/>
            </button>
            <img src={Logo} alt="Logo" className="w-40" />
            <button>
            <Navbtn url="mailto:subhamdutta588@gmail.com" text="CONTACT ME"/>
            <Navbtn url="https://drive.google.com/file/d/1PNo88DEgvupf_GuNkbFVc1bmsjz42FHg/view?usp=sharing" text="RESUME"/>
            </button>
        </nav>
        
    )
}
export default Navbar;