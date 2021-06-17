import { ProjectType } from "@/types/project";
const js = {
  name: "javascript",
};
const react = {
  name: "react",
};
const nextjs = {
  name: "nextjs",
  url: "https://nextjs.org/",
};
const chakra = {
  name: "chakra-ui",
  url: "https://chakra-ui.com/",
};
const project: ProjectType[] = [
  {
    title: "Artificial Intelligence Lab. Landing Page",
    image: require("public/projects/ailabtelkom-next.jpg"),
    description:
      "Next version of landing page for Artificial Intelligence Laboratory Telkom University. Made using static react & chakra-ui.",
    createdAt: "08-19-2020",
    technology: [js, react, nextjs, chakra],
    url: "https://ailabtelkom.github.io/",
    source: "https://github.com/ailabtelkom/ailabtelkom.github.io",
  },
  {
    title: "(OLD)Artificial Intelligence Lab. Landing Page",
    image: require("public/projects/ailabtelkom-old.jpg"),
    description:
      "First version of landing page for Artificial Intelligence Laboratory Telkom University. Made using static html and bootstrap.",
    createdAt: "02-07-2020",
    technology: [js, { name: "jquery" }, { name: "bootstrap" }],
    url: "https://ailabtelkom.github.io/old-landing-page",
    source: "https://github.com/ailabtelkom/old-landing-page",
  },
  {
    title: "Kantin.ketringan.com App",
    image: require("public/projects/kantin-ketringan.jpg"),
    description:
      "Kantin ketringan is a project collaboration with Assets&Logistic Telkom University and Sain Kitchen. You can order food from kantin ketringan via this app.",
    createdAt: "07-09-2020",
    technology: [js, react, chakra],
    url: "http://kantin.ketringan.com/",
  },
  {
    title: "ELIZA Line Chatbot",
    image: require("public/projects/eliza.jpg"),
    description:
      "ELIZA is an early natural language processing computer program created from 1964 to 1966 at the MIT Artificial Intelligence Laboratory by Joseph Weizenbaum and implemented using python by me.",
    createdAt: "04-14-2020",
    technology: [{ name: "python" }, { name: "line" }],
    url: "https://line.me/R/ti/p/%40537amjdd",
    source: "https://github.com/svspicious/eliza-line-chatbot",
  },
  {
    title: "Useful iGracias Script",
    image: require("public/projects/igracias.jpg"),
    description:
      "A collection of useful script to automate proccess in iGracias.",
    createdAt: "01-03-2020",
    technology: [js, { name: "jquery" }],
    source: "https://github.com/raisoturu/usefull-igracias-script",
  },
  {
    title: "Quoteit! twitter bot",
    image: require("public/projects/quotebot.jpg"),
    description:
      "Quoteitbot is a bot that generates an image based on a tweet that you mentioned using an image from unsplash.",
    createdAt: "06-20-2019",
    technology: [
      {
        name: "python",
      },
      {
        name: "twitter",
      },
      {
        name: "bot",
      },
    ],
    source: "https://github.com/svspcs/wedhus",
    url: "https://twitter.com/Quoteitbot",
  },
  {
    title: "Ketringan.com Web",
    image: require("public/projects/ketringan-old.jpg"),
    description:
      "Ketringan is a startup based on Telkom University, focussed on how to make catering service easier and cheaper. This is the first time I become a software engineer in a startup company. In this company, I'm not only developing web apps but also helping to develop chatbot and other applications.",
    createdAt: "05-02-2019",
    technology: [js, react, { name: "bootstrap" }, { name: "laravel" }],
    url: "https://ketringan.com",
  },
  {
    title: "Inter-Fest 2019 Web",
    image: require("public/projects/interfest-2019.jpg"),
    description:
      "Inter-Fest is an annual event of Telkom University School of Computing (FIF). Inter-Fest 2019 consists of several events: seminar, competition, and festival.",
    createdAt: "07-11-2019",
    technology: [js, react, { name: "firebase" }, { name: "bootstrap" }],
    url: "https://interfest-client.vercel.app/",
    source: "https://github.com/svspicious/interfest-client",
  },
];

export default project;
