import yelp from "../media/yelpcamp.png";
import chat from "../media/chatapp.png";
import task from "../media/tasklist.png";
import deliver from "../media/deliver.png";
import legacy from "../media/legacy.png";
import playground from "../media/playground.png";
import brew from "../media/brew.png";

const data = [
  {
    id: 1,
    title: "BREW & BITE 🍔☕",
    class: "brew",
    content: `A fully responsive MERN stack web application designed to help users search for and find nearby cafes and
coffee shops. The app integrates Mapbox for interactive maps, Feather Icons for a modern UI, and includes an
image upload, CRUD operations, and many other exciting added functionalities.
`,
    front: "ReactJs(Vite), JavaScript, HTML/CSS ",
    back: "NodeJs, ExpressJs and MongoDB",
    image: brew,
    url: "https://github.com/ishsarin/CoffeeApp",
  },
  {
    id: 2,
    title: "LEGACY 👨‍👨‍👦‍👦",
    class: "legacy",
    content: `It's not your typical social media site; here, we honor and celebrate the beautiful moments spent with those who have left a lasting impact on our lives. A platform dedicated to preserving and sharing cherished memories of loved ones!. `,
    front: "ReactJs, JavaScript, HTML/CSS and Firebase",
    back: "NodeJs, ExpressJs and Firebase",
    image: legacy,
    url: "https://github.com/ishsarin/Legacy",
  },
  {
    id: 3,
    title: "DELIVERY SYSTEM 🚚",
    class: "delivery-system",
    content: `A dynamic web communication dashboard between Manufacturer and Transporter using MERN tech Stack.`,
    front: "ReactJs, JavaScript and Bootstrap along with HTML and SCSS.",
    back: "NodeJS, ExpressJs, Socket.io and Firebase as a real time database along with this being hosted on Vercel.",
    image: deliver,
    url: "https://github.com/ishsarin/Delivery",
  },
  {
    id: 4,
    title: "YELP-CAMP 🏕️",
    class: "yelp-camp",
    content: `A Web Blogging Application which allows user to post details and images of various campgrounds visited by
    them and provides them with CRUD functionality along with user authentication being implemented using
    Passport.js.`,
    front: " HTML/CSS along with Bootstrap and JavaScript",
    back: "NodeJS, ExpressJs and MongoDB for database",
    image: yelp,
    url: "https://github.com/ishsarin/YelpCamp",
  },
  {
    id: 5,
    title: "PLAYGROUND 👩‍💻",
    class: "playground",
    content: `Playground is an online code editor along with having code compilation feature. More than 10 languages to choose from with old and latest versions both!`,
    front: "Vite(ReactJs) along HTML/CSS, JavaScript and Chakra UI",
    back: "None",
    image: playground,
    url: "https://github.com/ishsarin/Playground",
  },
  {
    id: 6,
    title: "CHAT BOT 💬",
    class: "chat-bot",
    content: `A chatting application where one can group chat or chat individually by sharing the link of the website.
    User friendly and a real-world application similar to WhatsApp or Discord.`,
    front: "HTML/CSS along with Bootstrap and JavaScript",
    back: "Socket.io and NodeJs",
    image: chat,
    url: "https://github.com/ishsarin/Chat-App",
  },
];

export default data;
