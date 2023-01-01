import Photo from "./assets/dp.png";
import Button from "./Buttons";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { ImBlog } from "react-icons/im";

function About() {
  return (
    <div className="flex justify-around my-6 items-center flex-col sm:flex-row ">
      <img src={Photo} alt="dp" className="w-64 sm:w-80" />
      <section className="py-12 sm:mr-14 text-center">
        <h1 className="font-zen text-3xl bold my-4">SUBHAM DUTTA</h1>
        <h2 className="font-zen text-base text-center semibold">
          FRONTEND &nbsp; DEVELOPER
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
            href="https://www.instagram.com/its_subham_dutta/"
            target="_blank"
            rel="noreferrer">
            <GrInstagram className="mx-2 hover:text-pink-600" />{" "}
          </a>
          <a
            href="https://twitter.com/Subhamd88404337"
            target="_blank"
            rel="noreferrer">
            <FaTwitter className="mx-2 hover:text-[#1DA1F2]" />
          </a>
          <a
            href="https://www.linkedin.com/in/subham-dutta-8670b8178/"
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
            url="https://drive.google.com/file/d/1PNo88DEgvupf_GuNkbFVc1bmsjz42FHg/view?usp=sharing"
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
