import Photo from "../../assets/dpm.png";
import Button from "../Button/Button";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
import { ImBlog } from "react-icons/im";
import 'animate.css';

function About() {
  return (
    <div className="flex justify-around my-6 items-center flex-col sm:flex-row dark:text-white">
      <img src={Photo} alt="dp" className="w-64 sm:w-80 animate__animated animate__fadeInLeft" />
      <section className="py-12 sm:mr-14 text-center animate__animated animate__fadeInRight">
        <h1 className="font-zen text-3xl bold my-4">SUBHAM DUTTA</h1>
        <h2 className="font-zen text-base text-center semibold">
          FULL-STACK &nbsp; WEB &nbsp; DEVELOPER
        </h2>
        <h5 className="text-base text-center my-2 font-nav">
          I 🖤 to code beautiful websites.
        </h5>
        <div className="text-2xl justify-center sm:justify-around text-center mb-2 mt-4 flex">
          <a
            href="https://www.facebook.com/profile.php?id=100073951804006"
            target="_blank"
            rel="noreferrer">
            <FaFacebook className="mx-2 hover:text-[#3b5998]" />{" "}
          </a>
          <a
            href="https://www.instagram.com/sdutttttt"
            target="_blank"
            rel="noreferrer">
            <GrInstagram className="mx-2 hover:text-pink-600" />{" "}
          </a>
          <a
            href="https://twitter.com/sdutttttt"
            target="_blank"
            rel="noreferrer">
            <RiTwitterXLine className="mx-2 hover:text-[#000]" />
          </a>
          <a
            href="https://www.linkedin.com/in/sduttt"
            target="_blank"
            rel="noreferrer">
            <FaLinkedin className="mx-2 hover:text-[#0077B5]" />{" "}
          </a>
          <a href="https://github.com/Sduttt" target="_blank" rel="noreferrer">
            <FaGithub className="mx-2 hover:text-[#24292E]" />{" "}
          </a>
          <a
            href="https://sdutta.hashnode.dev/"
            target="_blank"
            rel="noreferrer">
            <ImBlog className="mx-2 hover:text-[#23d1e0]" />{" "}
          </a>
        </div>
        <div className="flex justify-around my-6">
          <Button
            text="Resume"
            url="https://www.canva.com/design/DAFRMDWAO1Y/9D00quF_UWYnPBri_MiPRg/view?utm_content=DAFRMDWAO1Y&utm_campaign=share_your_design&utm_medium=link&utm_source=shareyourdesignpanel"
            className="mx-4"
          />
          <Button
            text="Hire Me"
            url="mailto:subhamdutta588@gmail.com"
            className="mx-4"
          />
        </div>
      </section>
    </div>
  );
}
export default About;
