import React from "react";
import { useParams } from "react-router-dom";
import { excercise } from "../config/data";
import Card from "components/Card";

const DaysExcercise = () => {
  const { dayname } = useParams();
  const filterPerDay = excercise.filter((item) => item.dayName === dayname)[0];
  console.log("🚀 ~ DaysExcercise ~ filterPerDay:", filterPerDay);

  return (
    <div>
      {/* Heading */}
      <div>
        <p className="text-center text-2xl p-4  font-bold">
          Monday Excercise's
        </p>
      </div>
      {/* Card */}
      {filterPerDay.excercises.map((item, ind) => {
        return (
          <div key={ind} className="flex flex-col justify-center items-center my-8">
            {/*  Card */}
            <p className="text-left lg:text-center text-xl font-normal w-5/6">{item.name}</p>
            <div className= "w-5/6 lg:w-2/6">
              <Card data={item} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DaysExcercise;
