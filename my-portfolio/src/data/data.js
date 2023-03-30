import apple from "../media/apple.png";
import yelp from "../media/yelpcamp.png";
import chat from "../media/chatapp.png";
import task from "../media/tasklist.png";
const data = [
  {
    id: 1,
    title: "YELP-CAMP 🏕️",
    class: "yelp-camp",
    content: `The application is a mockup of Google Maps, but instead let's
    us know about the nearest camping areas and sites to visit.`,
    front: " HTML/CSS along with Bootstrap and JavaScript",
    back: "NodeJS, ExpressJs and MongoDB for database",
    image: yelp,
  },
  {
    id: 2,
    title: "CHAT BOT 💬",
    class: "chat-bot",
    content: `A chatting application where one can group chat or chat individually by sharing the link of the website.
    User friendly and a real-world application similar to WhatsApp or Discord.`,
    front: "HTML/CSS along with Bootstrap and JavaScript",
    back: "Socket.io and NodeJs",
    image: chat,
  },
  {
    id: 3,
    title: "TASK LIST 📝",
    class: "task-list",
    content: `A website which is used to set daily tasks according to priority.
    Indent and Outdent of task for priority basis`,
    front: "React, React DND, HTML/CSS along with Bootstrap and JavaScript",
    back: "NodeJs",
    image: task,
  },
  {
    id: 4,
    title: "APPLE 🍎",
    class: "apple",
    content: `A mockup of the Apple Website`,
    front: "HTML/CSS along with Bootstrap",
    back: "None",
    image: apple,
  },
];

export default data;
