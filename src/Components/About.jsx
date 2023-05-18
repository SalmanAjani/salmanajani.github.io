/* eslint-disable react/jsx-no-target-blank */
import hero from "../assets/hero1.png";
import Top from "./Top";
import Resume from "../assets/Salman-Ajani-Resume.pdf";
import Arrow from "../assets/Arrow.png";

const About = () => {
  return (
    <>
      <div className="hidden md:block">
        <Top />
      </div>
      <div
        name="about"
        id="about"
        className="text-xl w-full font-contact py-36 px-10 sm:px-32 md:px-20 lg:w-10/12 xl:w-8/12 flex flex-col items-center md:flex-row md:justify-between md:mx-auto md:gap-12 relative"
      >
        {/* BG Image */}
        <div className="absolute top-[80px] left-5 sm:top-12 sm:left-28 md:top-12 md:left-5 xl:top-6">
          <img src={Arrow} alt="arrow" className="w-6/12 sm:w-4/5 xl:w-full" />
        </div>

        {/* Left Side */}
        <div className="shadow-2xl rounded-md z-10">
          <img src={hero} alt="hero" className="hover:animate-wavinghand" />
        </div>

        {/* Right Side*/}
        <div className="mt-8 md:mt-0 text-center md:w-6/12">
          <h2 className="font-bold text-xl mb-3 text-blue-500 md:text-left">
            ABOUT ME
          </h2>
          <p className="text-[16px] text-neutral-600 text-justify">
            As a Full Stack Developer, I am proficient in using MERN stack for
            building impressive web applications. I excel in designing and
            maintaining responsive websites that offer a smooth user experience.
            My expertise lies in crafting dynamic, engaging interfaces through
            writing clean and optimized code and utilizing cutting-edge
            development tools and techniques. I am also a team player who
            thrives in collaborating with cross-functional teams.
          </p>
          <div className="text-center md:text-left mt-5">
            <a
              download=""
              href={Resume}
              target="_blank"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1r0OWQ7kwW7jQsQZ6a9TYiQ328Yhua4FD/view?usp=sharing",
                  "_blank"
                )
              }
              className="text-white bg-neutral-800 hover:bg-blue-500 font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center duration-300 hover:translate-x-2"
            >
              Download Resume
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
