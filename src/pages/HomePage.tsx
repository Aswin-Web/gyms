import React, { useEffect, useState } from "react";
import { excercise, logo } from "../config/data";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedDay, setSelectedDay] = useState("");
  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const handleSubmit = () => {
    if (!selectedDay) {
      alert("Please Select a day");
    } else {
      navigate(`/days/${selectedDay}`);
    }
  };
  return (
    <div className="flex items-center justify-center w-[100vw] h-[100vh]">
      <div className="h-full w-full lg:w-1/3 lg:h-5/6 bg-darkblack m-auto rounded-lg">
        {loading ? (
          // Loading Image
          <>
            {" "}
            <>
              <div className=" flex justify-center items-center h-full w-full">
                <img src={logo} alt="" className="w-3/6" />
              </div>
            </>
          </>
        ) : (
          // Content
          <div className=" flex justify-center items-center h-full w-full flex-col">
            {/* Header */}
            <p className="text-4xl py-4 md:text-4xl font-extrabold md:font-bold tracking-wider text-white">
              Select the Day
            </p>
            {/* List items */}
            <div className=" font-bold tracking-widest text-3xl md:text-2xl text-center">
              <ul>
                {excercise.map((item, ind) => (
                  <ol
                    className={`py-4 md:py-2 px-6 ${selectedDay === item.dayName ? "border-2 border-textColor rounded-lg" : ""}`}
                    key={ind}
                    onClick={() => setSelectedDay(item.dayName)}
                  >
                    <p className="">{item.dayName}</p>
                    <p className="text-sm font-normal">{item.dayOrgan}</p>
                  </ol>
                ))}
              </ul>
            </div>
            {/* Submit */}
            <div className="w-full p-2 py-4 ">
              <button
                className="w-5/6 rounded-lg mx-auto block bg-textColor text-white text-2xl p-2 tracking-widest font-bold"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
