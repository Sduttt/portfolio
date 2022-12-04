import Navbtn from "./Navbtn";


import Logo from './assets/logo-black.png'

function Navbar(){
    return(
        <nav className="mx-16  font-nav flex justify-between">
            <button>
            <Navbtn url="#" text="BLOG"/>
            <Navbtn url="#" text="PROJECTS"/>
            </button>
            <img src={Logo} alt="Logo" className="w-40" />
            <button>
            <Navbtn url="#" text="CONTACT ME"/>
            <Navbtn url="#" text="RESUME"/>
            </button>
        </nav>
        
    )
}
export default Navbar;