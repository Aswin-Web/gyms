import logoImg from "../../gym.png";
export const logo = logoImg;
export const days = [
  { name: "Monday" },
  { name: "Tuesday" },
  { name: "Wednesday" },
  { name: "Thursday" },
  { name: "Friday" },
  { name: "Satureday" },
];

export const excercise = [
  {
    // • Flat Barbell Bench Press – 3 x 8-10
    // • Incline Dumbbell Press – 2 x 8-10
    // • Overhead Barbell Press – 3 x 8-10
    // • Dumbbell Lateral Raises – 4 x 12-15
    // • Cable Tricep Pushdowns – 2 x 10-12
    // • Overhead Tricep Extensions – 2 x 10-12
    // • Push-Ups – 2 x Failure

    dayName: "Monday",
    dayOrgan: "Push (Chest, Shoulders, Triceps)",
    excercises: [
      {
        video_url:
          "https://www.youtube.com/embed/CjHIKDQ4RQo?si=-KdIO4s4-RQpD2R1",
        set: "8-10",
        reps: "3",
        name: "Flat Barbell Bench Press",
        type: "Chest",
      },
      {
        video_url:
          "https://www.youtube.com/embed/oZVCBM9f8Eo?si=hbrx4_z_YTXmk4S-",
        set: "8-10",
        reps: "2 ",
        name: "Incline Dumbbell Press",
        type: "Chest",
      },
      {
        video_url:
          "https://www.youtube.com/embed/-5MmFTKLC-0?si=rJ5Qu6-yjLD8MM3C",
        set: " 8-10",
        reps: "3",
        name: "Overhead Barbell Press",
        type: "Chest",
      },
      {
        video_url:
          "https://www.youtube.com/embed/z-kOn7flIZg?si=J9MIjDyiz18ZlIUE",
        set: "12-15",
        reps: "4 ",
        name: "Dumbbell Lateral Raises",
        type: "",
      },
      {
        video_url:
          "https://www.youtube.com/embed/LXkCrxn3caQ?si=gqPFpBrQv2O0FWf3",
        set: "10-12",
        reps: "2 ",
        name: "Cable Tricep Pushdowns",
        type: "",
      },
      {
        video_url:
          "https://www.youtube.com/embed/9wxRhONFsRA?si=_lW1M_KCSfDC5WzF",
        set: " 10-12",
        reps: " 2",
        name: " Overhead Tricep Extensions",
        type: "",
      },
      {
        video_url:
          "https://www.youtube.com/embed/IODxDxX7oi4?si=TG6t1WP9qf_JOlk-",
        set: "Failure",
        reps: "2",
        name: "Push-Ups",
        type: "",
      },
    ],
  },
  {
    // • Deadlifts – 4 x 6-8
    // • Pull-Ups or Lat Pulldown – 3 x 8-10
    // • Barbell Rows – 3 x 8-10
    // • Face Pulls – 2 x 12-15
    // • Barbell Bicep Curls – 2 x 10-12
    // • Incline Dumbbell Curls – 3 x 8-10
    dayName: "Tuesday",
    dayOrgan: "Pull (Back, Biceps, Rear Delts)",
    excercises: [
      {
        video_url:
          "https://www.youtube.com/embed/GxsLrTzyGUU?si=gIhOIHG8XXF3J22J",
        set: "6-8",
        reps: "4",
        name: "Deadlifts",
        type: "",
      },
      {
        video_url:
          "https://www.youtube.com/embed/JGeRYIZdojU?si=ge_9eqZ97Oyqd0_1",
        set: " 8-10",
        reps: "3",
        name: "Pull-Ups or Lat Pulldown",
        type: "",
      },
      {
        video_url:
          "https://www.youtube.com/embed/FsK19s8eGFs?si=uam8bym2nwY5MU7x",
        set: "8-10",
        reps: "3",
        name: " Barbell Rows ",
        type: "Back",
      },
      {
        video_url:
          "https://www.youtube.com/embed/0Po47vvj9g4?si=xihT7fyV-X5uB7DJ",
        set: "12-15",
        reps: "2  ",
        name: "Face Pulls",
        type: "",
      },
      {
        video_url:
          "https://www.youtube.com/embed/N5x5M1x1Gd0?si=A27pqFWS6I86SQBh",
        set: " 10-12",
        reps: " 2",
        name: "Barbell Bicep Curls",
        type: "",
      },
      {
        video_url:
          "https://www.youtube.com/embed/XVQBeug_9LU?si=KHghuWHARzv8PtxN",
        set: "8-10",
        reps: "3 ",
        name: "Incline Dumbbell Curls ",
        type: "",
      },
      // {
      //   video_url:
      //     "https://www.youtube.com/embed/B4RznoFvTl4?si=f5nIvRxkMePmNDVI",
      //   set: 2,
      //   reps: "10-15",
      //   name: "  Hammer Curl DB ",
      //   type: "Biceps",
      // },
    ],
  },
  {
    //     • Back Squats – 4 x 8-10
    // • Romanian Deadlifts – 3 x 8-10
    // • Leg Press – 2 x 12-15
    // • Walking Lunges – 3 x 12-15 (per leg)
    // • Hanging Leg Raises – 4 x 15-20
    // • Plank with Side Twists – 3 x 20 twists
    dayName: "Wednesday",
    dayOrgan: "Legs + Core (Quads, Hamstrings, Core)",
    excercises: [
      {
        video_url:
          "https://www.youtube.com/embed/rrJIyZGlK8c?si=d-JESCh7oWtpmlqY",
        set: " 8-10",
        reps: "4 ",
        name: "Back Squats",
        type: "",
      },
      {
        video_url:
          "https://www.youtube.com/embed/zU-f6DMCdAI?si=_H9wwEfNJZqf4LJF",
        set: "8-10",
        reps: "3 ",
        name: "Romanian Deadlifts",
        type: "Back",
      },
      {
        video_url:
          "https://www.youtube.com/embed/q4W4_VJbKW0?si=emmeJI-GIVAi7mnB",
        set: " 12-15",
        reps: "2",
        name: "Leg Press",
        type: "Back",
      },
      {
        video_url:
          "https://www.youtube.com/embed/mAgbXQdd4LM?si=tnK-t4pnGi9knSfE",
        set: "12-15 (per leg)",
        reps: " 3",
        name: "Walking Lunges",
        type: "Hamstrings",
      },
      {
        video_url:
          "https://www.youtube.com/embed/Yrtvs-nEnk0?si=oXmRAtIRyhR1PxTR",
        set: " 15-20",
        reps: "4",
        name: "Hanging Leg Raises",
        type: "Hamstrings",
      },
      {
        video_url:
          "https://www.youtube.com/embed/Oe9Tp9SvTCE?si=JvMsoGHfRHLwcunv",
        set: "20 twists",
        reps: "3",
        name: "Plank with Side Twists",
        type: "Abs & Calves:",
      },
      // {
      //   video_url:
      //     "https://www.youtube.com/embed/Yrtvs-nEnk0?si=xQ3Yv0Fkm0y7b3jV",
      //   set: 2,
      //   reps: "failure min 25 ",
      //   name: " Hanging Leg Raises/Mountain Climber ",
      //   type: "Abs & Calves",
      // },
    ],
  },
  {
    // • Incline Barbell Bench Press – 3 x 8-10
    // • Flat Dumbbell Press – 2 x 8-10
    // • Pull-Ups (Weighted if needed) – 4 x 8-10
    // • Barbell Pendlay Rows – 3 x 8-10
    // • Dumbbell Chest Flys – 3 x 12-15
    // • Cable Lat Pullover – 2 x 10-12
    // • Bar Dips – 2 x Failure
    dayName: "Thursday",
    dayOrgan: "Chest + Back (Upper Body Focus)",
    excercises: [
      {
        video_url:
          "https://www.youtube.com/embed/2jFFCy8JBU8?si=F43mfVXTWigiR7th",
        set: " 8-10",
        reps: "3",
        name: "Incline Barbell Bench Press",
        type: "Chests",
      },
      {
        video_url:
          "https://www.youtube.com/embed/AduT4Eq-iP0?si=hg1OC6KaCoohecfv",
        set: "8-10",
        reps: "2",
        name: "Flat Dumbbell Press",
        type: "Chest",
      },
      {
        video_url:
          "https://www.youtube.com/embed/PHdHnZcbsB8?si=61HRYHqmGE-8D6qh",
        set: " 8-10",
        reps: "4",
        name: "Pull-Ups (Weighted if needed)",
        type: "Chest",
      },
      {
        video_url:
          "https://www.youtube.com/embed/Wv7f0uIKh8o?si=y5WzbKVQLopwcWvz",
        set: "8-10",
        reps: "3 ",
        name: "Barbell Pendlay Rows",
        type: "Back",
      },
      {
        video_url:
          "https://www.youtube.com/embed/Nhvz9EzdJ4U?si=lrjhhs_Y4JmTU-CY",
        set: " 12-15",
        reps: " 3",
        name: "Dumbbell Chest Flys",
        type: "Back",
      },
      {
        video_url:
          "https://www.youtube.com/embed/JGeRYIZdojU?si=bSEVWF16bBdLf6aO",
        set: " 10-12",
        reps: "2",
        name: "Cable Lat Pullover",
        type: "Back",
      },
      {
        video_url:
          "https://www.youtube.com/embed/2HYAeF6o7Bc?si=zRuXajQTuaVuuo7j",
        set: " Failure",
        reps: "2",
        name: "Bar Dips",
        type: "",
      },
    ],
  },
  {
    // • Cable Tricep Pushdown – 3 x 8-10
    // • Skull Crushers (EZ Bar) – 3 x 10-12
    // • Preacher Curls – 2 x 10-12
    // • Incline Dumbbell Curls – 2 x 8-10
    // • Hammer Curls – 2 x 10-12
    // • Dumbbell Lateral Raises – 4 x 12-15
    // • Face Pulls – 3 x 12-15
    dayName: "Friday",
    dayOrgan: " Arms + Shoulders",
    excercises: [
      {
        video_url:
          "https://www.youtube.com/embed/LXkCrxn3caQ?si=xvnui0WT0MGgfq7s",
        set: " 8-10",
        reps: "3",
        name: " Cable Tricep Pushdown ",
        type: "Shoulders",
      },
      {
        video_url:
          "https://www.youtube.com/embed/sDxcKjCqXAo?si=Ve5rNgg9HHUu4g2A",
        set: "10-12",
        reps: "3",
        name: "Skull Crushers (EZ Bar)",
        type: "Shoulders",
      },
      {
        video_url:
          "https://www.youtube.com/embed/Zbs3ko8ycyg?si=KHpS_YiJQGUXFKnS",
        set: "10-12",
        reps: "2 ",
        name: "Preacher Curls",
        type: "Shoulders",
      },
      {
        video_url:
          "https://www.youtube.com/embed/XVQBeug_9LU?si=qgbxZ8IZ76n-R17R",
        set: "8-10",
        reps: "2",
        name: "Incline Dumbbell Curls",
        type: "Triceps",
      },
      {
        video_url:
          "https://www.youtube.com/embed/B4RznoFvTl4?si=fX70GK8r-fr-0Qfn",
        set: " 10-12",
        reps: "2",
        name: "Hammer Curls",
        type: "Triceps",
      },
      {
        video_url:
          "https://www.youtube.com/embed/z-kOn7flIZg?si=V3-89SdFIq8AvUDE",
        set:" 12-15",
        reps: "4",
        name: " Dumbbell Lateral Raises",
        type: "Triceps",
      },
      {
        video_url:
          "https://www.youtube.com/embed/0Po47vvj9g4?si=kJLADtxxheILkJCW",
        set:  "12-15",
        reps: "3",
        name: "Face Pulls",
        type: "Biceps",
      },
      // {
      //   video_url:
      //     "https://www.youtube.com/embed/o2Tma5Cek48?si=QTuAwRkXXCM8SRTN",
      //   set: 2,
      //   reps: "failure min 25 ",
      //   name: "  Preacher Db Curls ",
      //   type: "Biceps",
      // },
      // {
      //   video_url:
      //     "https://www.youtube.com/embed/B4RznoFvTl4?si=TQwHkpd70OVTSTwY",
      //   set: 2,
      //   reps: "failure min 25 ",
      //   name: "Hammer Curls",
      //   type: "Biceps",
      // },
    ],
  },
  {

//     • Front Squats – 3 x 8-10
// • Bulgarian Split Squats – 3 x 12-15 (per leg)
// • Leg Extension (Machine) – 2 x 12-15
// • Hamstring Curls (Machine) – 3 x 10-12
// • Standing Calf Raises – 4 x 15-20
// • Seated Calf Raises – 4 x 15-20
// • Cable Woodchoppers – 3 x 15 (per side)
// • Weighted Decline Sit-Ups – 3 x 15-20

    dayName: "Satureday",
    dayOrgan: "Legs + Core (Lower Body Focus)",
    excercises: [
      {
        video_url:
          "https://www.youtube.com/embed/Q1Ypb8ZNzI4?si=pl_oY6ngZOF__FhY",
        set: "8-10",
        reps: "3",
        name: " Front Squats",
        type: "Core",
      },
      {
        video_url:
          "https://www.youtube.com/embed/TEXl2b3__S4?si=sai79D2zvpjUj2cc",
        set: " 12-15 (per leg)",
        reps: "3",
        name: "  Bulgarian Split Squats",
        type: "Core",
      },
      {
        video_url:
          "https://www.youtube.com/embed/4ZDm5EbiFI8?si=WJHYjqteyZbVbMZp",
        set: " 12-15",
        reps: "2",
        name: "Leg Extension (Machine)",
        type: "Core",
      },
      {
        video_url:
          "https://www.youtube.com/embed/_qwLdYywo_A?si=UHfgE4WztZMyyqOo",
        set: "10-12",
        reps: "3 ",
        name: "Hamstring Curls (Machine) ",
        type: "Core",
      },
      {
        video_url:
          "https://www.youtube.com/embed/Zep-wKHWkNM?si=pmFjXCSEiH_c6_pa",
        set: "15-20",
        reps: "4",
        name: "Standing Calf Raises ",
        type: "Core",
      }, {
        video_url:
          "https://www.youtube.com/embed/3ZRe_QpvRPg?si=-xvKWO2xAstU46Ix",
        set: "15-20",
        reps: "4 ",
        name: "Seated Calf Raises ",
        type: "Core",
      }, {
        video_url:
          "https://www.youtube.com/embed/iWxTGXIViro?si=o2CmnmrF3OevbGpl",
        set: "15 (per side)",
        reps: "3",
        name: "Cable Woodchoppers  ",
        type: "Core",
      }, {
        video_url:
          "https://www.youtube.com/embed/pTZL-Hirhwg?si=ztBNtP4d5V1pVtko",
        set: "15-20",
        reps: "3",
        name: "Weighted Decline Sit-Ups  ",
        type: "Core",
      }, 
    ],
  },
];
