import { FaHandPointUp } from "react-icons/fa";

const Top = () => {
  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className="w-fit fixed top-[88%] right-14 z-30 hidden md:flex justify-center items-center p-4 hover:cursor-pointer border-solid bg-gray-900 dark:bg-white rounded-xl shadow-md shadow-rose-500"
      onClick={handleTop}
    >
      <FaHandPointUp
        size="26px"
        className="hover:animate-bounce text-white cursor-pointer dark:text-gray-900"
      />
    </div>
  );
};

export default Top;
