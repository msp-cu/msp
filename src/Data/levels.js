export const paths = [
  {
    id: "Tech",
    title: "TECH TRACK",
    trackType: "Tech",
    open: true,
    rarity: "epic",
    description: "Build systems, write code, and shape the future with technology.",
    committees: [
      "Front-End",
      "Back-End",
      "Flutter",
      "AI",
      "Cyber Security",
      "UI-UX",
    ],
  },

  {
    id: "Non-Tech",
    title: "Non-TECH TRACK",
    trackType: "Non-Tech",
    open: true,
    rarity: "rare",
description:
  "Behind every great product is a strong strategy. Communicate, manage, build, and lead the game from the inside.",    
  committees: ["PR","Entrepreneurship","Project Management","Finance"],
  },

  // 🔒 CLOSED
  {
    id: "OC",
    title:"Organization Committees",
    trackType: "Non-Tech",
    open: false,
    rarity: "locked",
    description: "Applications closed.",
    committees: ["HR","BD","EM"],
  },
  {
    id: "Creative Committees",
    title: "Creative Committees",
    trackType: "Non-Tech",
    open: false,
    rarity: "locked",
    description: "Applications closed.",
    committees: ["Graphic Design", "Video Editing" , " Marketing"],
  },
]
