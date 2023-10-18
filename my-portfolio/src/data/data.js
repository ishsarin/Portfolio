import yelp from "../media/yelpcamp.png";
import chat from "../media/chatapp.png";
import task from "../media/tasklist.png";
import deliver from "../media/deliver.png";
const data = [
  {
    id: 1,
    title: "DELIVERY SYSTEM 🚚",
    class: "delivery-system",
    content: `A web dashboard using the MERN tech stack to communicate between two users: Manufacturer and
    Transporter.`,
    front: "ReactJs, JavaScript and Bootstrap along with HTML and SCSS.",
    back: "NodeJS, ExpressJs, Socket.io and Firebase as a real time database along with this being hosted on Vercel.",
    image: deliver,
    url:"https://github.com/ishsarin/Delivery",
  },
  {
    id: 2,
    title: "LEGACY 👨‍👨‍👦‍👦",
    class: "legacy",
    content: `We all have moments captured with us and want to share it with our close ones. A Full Stack website where people can upload and comment on the images and stay with them forever.`,
    front: "ReactJs, JavaScript, HTML/CSS and Firebase",
    back: "NodeJs, ExpressJs and Firebase",
    image: "",
    url:"https://github.com/ishsarin/Legacy",
  },
  {
    id: 3,
    title: "YELP-CAMP 🏕️",
    class: "yelp-camp",
    content: `The application is a mockup of Google Maps, but instead let's
    us know about the nearest camping areas and sites to visit.`,
    front: " HTML/CSS along with Bootstrap and JavaScript",
    back: "NodeJS, ExpressJs and MongoDB for database",
    image: yelp,
    url:"https://github.com/ishsarin/YelpCamp",
  },
  {
    id: 4,
    title: "CHAT BOT 💬",
    class: "chat-bot",
    content: `A chatting application where one can group chat or chat individually by sharing the link of the website.
    User friendly and a real-world application similar to WhatsApp or Discord.`,
    front: "HTML/CSS along with Bootstrap and JavaScript",
    back: "Socket.io and NodeJs",
    image: chat,
    url:"https://github.com/ishsarin/Chat-App",
  },
  
  
];

export default data;
