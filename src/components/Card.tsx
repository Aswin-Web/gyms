import { TiArrowRepeat } from "react-icons/ti";
import { IoMdStopwatch } from "react-icons/io";
import { IoBodySharp } from "react-icons/io5";

const Card = ({
  data,
}: {
  data: {
    video_url: string;
    set: number;
    reps: string;
    type: string;
  };
}) => {
  //   const opts = {
  //     height: "390",
  //     width: "640",
  //     playerVars: {
  //       autoplay: 1, // Auto-play the video
  //     },
  //   };
  return (
    <div className="bg-darkblack my-4 mx-auto w-full lg:w-full h-[40vh] rounded-lg">
      {/* youtube url */}
      <div className="h-2/3 w-full rounded-lg">
        <iframe
          //   width=""
          //   height="315"
          className="h-full w-full rounded-t-lg"
          src={data.video_url}
          title="YouTube video player"
          //   frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          //   allowFullScreen
        ></iframe>
      </div>
      {/* ICONS  */}
      <div className="h-1/3 font-light text-xs w-5/6 m-auto flex flex-col  justify-center">
        <div className="flex gap-4 items-center mb-2 lg:mt-1">
          {/*  */}
          <div>
            <TiArrowRepeat className="text-2xl" />
          </div>
          <p className="text-base">{data.reps}</p>
        </div>

        <div className="flex gap-4 items-center my-2 lg:mt-1">
          {/*  */}
          <div>
            <IoMdStopwatch className="text-2xl" />
          </div>
          <p className="text-base">{data.set}</p>
        </div>

        <div className="flex gap-4 items-center mt-2 lg:mt-1">
          {/*  */}
          <div>
            <IoBodySharp className="text-2xl" />
          </div>
          <p className="text-base">{data.type}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
