import Github from "./github";

const GithubSection = () => {
  return (
    <div className="bg-gray-100 py-36 font-contact rounded">
      <div className="py-8 mx-3 mb-6 px-2 flex flex-col items-center text-center md:px-16 md:py-24 bg-white rounded-md sm:mx-6 xl:w-7/12 xl:mx-auto xl:mb-8">
        <Github />
      </div>
      <div className="py-8 mx-3 px-2 flex flex-col items-center text-center md:px-16 md:py-24 bg-white rounded-md p-4 sm:mx-6 xl:w-7/12 xl:mx-auto">
        <h2 className="text-2xl text-neutral-800 pb-8 font-extrabold">
          GITHUB STATS
        </h2>
        <div className="border-2 border-neutral-800 m-2 rounded-sm">
          <img
            src="https://github-readme-stats-nu-brown.vercel.app/api?username=SalmanAjani&show_icons=true"
            alt="Salman-Github-Stats"
          />
        </div>
      </div>
    </div>
  );
};

export default GithubSection;
