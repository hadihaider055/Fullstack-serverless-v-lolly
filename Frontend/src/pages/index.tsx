import { navigate } from "gatsby-link";
import * as React from "react";
import Header from "../components/Header";
import Lolly from "../components/Lolly";

const Home = () => {
  return (
    <div className="max-w-4xl w-full mx-auto">
      <Header />
      <div className="flex flex-row mt-24 mx-auto justify-center">
        <Lolly
          fillLollyTop="#E97393"
          fillLollyMiddle="#D03C60"
          fillLollyBottom="#D38580"
          lollyWidth={300}
          lollyHeight={300}
        />
        <Lolly
          fillLollyTop="#E02254"
          fillLollyMiddle="#E96743"
          fillLollyBottom="#F5C64D"
          lollyWidth={300}
          lollyHeight={300}
        />
        <Lolly
          fillLollyTop="#A80000"
          fillLollyMiddle="#793ED0"
          fillLollyBottom="#F5C64D"
          lollyWidth={300}
          lollyHeight={300}
        />
        <Lolly
          fillLollyTop="#00A832"
          fillLollyMiddle="#D38580"
          fillLollyBottom="#A000EB"
          lollyWidth={300}
          lollyHeight={300}
        />
      </div>
      <div className="mx-auto w-full text-center mt-24 mb-10">
        <button
          onClick={() => navigate("/create")}
          className="border-2 border-pink-400 py-4 px-5 font-lato font-semibold rounded-full button text-pink-400 hover:text-gray-800 hover:bg-pink-400 transition-all duration-500 ease-in-out"
          type="button"
        >
          Make a new lolly to send to a friend
        </button>
      </div>
    </div>
  );
};

export default Home;