const flavorlists = [
  {
    name: "Chocolate Milk",
    color: "brown",
    rotation: "md:rotate-[-8deg] sm:rotate-[-6deg] rotate-[-3deg]",
  },
  {
    name: "Strawberry Milk",
    color: "red",
    rotation: "md:rotate-[8deg] sm:rotate-[6deg] rotate-[3deg]",
  },
  {
    name: "Cookies & Cream",
    color: "blue",
    rotation: "md:rotate-[-8deg] sm:rotate-[-6deg] rotate-[-3deg]",
  },
  {
    name: "Peanut Butter Chocolate",
    color: "orange",
    rotation: "md:rotate-[8deg] sm:rotate-[6deg] rotate-[3deg]",
  },
  {
    name: "Vanilla Milkshake",
    color: "white",
    rotation: "md:rotate-[-8deg] sm:rotate-[-6deg] rotate-[-3deg]",
  },
  {
    name: "Max Chocolate Milk",
    color: "black",
    rotation: "md:rotate-[8deg] sm:rotate-[6deg] rotate-[3deg]",
  },
];

const nutrientLists = [
  { label: "Potassium", amount: "245mg" },
  { label: "Calcium", amount: "500mg" },
  { label: "Vitamin A", amount: "176mcg" },
  { label: "Vitamin D", amount: "5mcg" },
  { label: "Iron", amount: "1mg" },
];

const cards = [
  {
    src: "/videos/f7.mp4",
    rotation: "sm:rotate-z-[12deg]",
    tiltDeg: 14,
    name: "Melisa",
    img: "/images/p7.jpg",
    translation: "sm:translate-y-[5%]",
  },
  {
    src: "/videos/f2.mp4",
    rotation: "sm:rotate-z-[6deg]",
    tiltDeg: -12,
    name: "Alexander",
    img: "/images/p2.jpg",
    translation: "sm:translate-y-[0%]",
  },
  {
    src: "/videos/f3.mp4",
    rotation: "sm:rotate-z-[-6deg]",
    tiltDeg: 15,
    name: "Andrew",
    img: "/images/p3.jpg",
    translation: "sm:translate-y-[-3%]",
  },
  {
    src: "/videos/f4.mp4",
    rotation: "sm:rotate-z-[5deg]",
    tiltDeg: -14,
    name: "Bryan",
    img: "/images/p4.jpg",
    translation: "sm:translate-y-[3%]",
  },
  {
    src: "/videos/f5.mp4",
    rotation: "sm:rotate-z-[-7deg]",
    tiltDeg: 12,
    name: "Chris",
    img: "/images/p5.jpg",
    translation: "sm:translate-y-[0%]",
  },
  {
    src: "/videos/f6.mp4",
    rotation: "sm:rotate-z-[4deg]",
    tiltDeg: -15,
    name: "Devante",
    img: "/images/p6.jpg",
    translation: "sm:translate-y-[4%]",
  },
  {
    src: "/videos/f1.mp4",
    rotation: "sm:rotate-z-[-8deg]",
    tiltDeg: 13,
    name: "Madison",
    img: "/images/p1.jpg",
    translation: "sm:translate-y-[-4%]",
  },
];
const faqList = [
  {
    question: "Is SPYLT lactose free?",
    answer:
      "Yes — every SPYLT bottle is 100% lactose free, so you get all the protein without the discomfort.",
  },
  {
    question: "How much protein and caffeine is in each bottle?",
    answer:
      "Each SPYLT bottle packs 20g of protein plus a caffeine boost, right there on the can.",
  },
  {
    question: "Do I need to keep it refrigerated?",
    answer:
      "Nope — SPYLT is shelf stable, so you can stock up and grab one whenever you need it.",
  },
  {
    question: "Is the bottle recyclable?",
    answer: "Yes, SPYLT packaging is infinitely recyclable — good for you and the planet.",
  },
  {
    question: "How many flavors does SPYLT come in?",
    answer:
      "6 freaking delicious flavors, from Chocolate Milk to Cookies & Cream — check them out above.",
  },
  {
    question: "Where can I buy SPYLT?",
    answer:
      "SPYLT is rolling out to local stores. Drop your email below and we'll let you know when it lands near you.",
  },
];

export { flavorlists, nutrientLists, cards, faqList };
