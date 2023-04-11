import { FaHandPointUp } from "react-icons/fa";

const Top = () => {
  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className="w-fit fixed top-[88%] right-14 z-30 hidden md:flex justify-center items-center p-4 hover:cursor-pointer border-solid bg-neutral-800 rounded-md shadow-md"
      onClick={handleTop}
    >
      <FaHandPointUp
        size="26px"
        className="hover:animate-bounce text-white cursor-pointer"
      />
    </div>
  );
};

export default Top;
