import React from "react";
import { ThemeContext } from "../context/themeContext";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div>
      {theme === "dark" ? (
        <BsFillSunFill
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="cursor-pointer text-2xl hover:scale-105 duration-200"
        />
      ) : (
        <BsFillMoonStarsFill
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="cursor-pointer text-2xl text-gray-800 hover:scale-105 duration-200"
        />
      )}
    </div>
  );
};

export default Toggle;
