import gif1 from "../assets/gif1.gif";
import Top from "./Top";

const About = () => {
  return (
    <>
      <div className="hidden md:block">
        <Top />
      </div>
      <div
        name="about"
        id="about"
        className="text-xl w-full font-contact py-36 px-10 sm:px-32 md:px-20 lg:w-8/12 flex flex-col items-center md:flex-row md:justify-between md:mx-auto md:gap-12"
      >
        {/* Left */}
        <div className="border-2 border-neutral-800 rounded-md">
          <img src={gif1} alt="hero-2" width={400} height={400} />
        </div>

        {/* Right */}
        <div className="mt-8 text-center md:mt-0 md:w-6/12">
          <h2 className="font-bold text-xl mb-4 text-blue-500 md:text-left">
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
        </div>
      </div>
    </>
  );
};

export default About;
