/* eslint-disable react/prop-types */

import 'animate.css'
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

function Services({theme}){

    return(
       <>
       <Navbar theme={theme} />

        <Footer theme={theme} />
       </>
    )
}
export default Services;