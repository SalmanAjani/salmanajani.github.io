import GitHubCalendar from "react-github-calendar";
function Github() {
  return (
    <div className="xxs:px-1 sm:px-4 md:px-2 xl:px-0">
      <h1 className="text-2xl text-neutral-800 pb-12 font-extrabold">
        GITHUB CALENDAR
      </h1>
      <div>
        <GitHubCalendar
          username="SalmanAjani"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
          color="#3b82f6"
        />
      </div>
    </div>
  );
}

export default Github;
