import pomodoroImg from "../assets/projects/pomodoro.png";
import weatherImg from "../assets/projects/weather.png";
import todoImg from "../assets/projects/todo.png";
import kanbanImg from "../assets/projects/kanban.png";
import gardeningImg from "../assets/projects/kertgondozás.png";

export const projects = [
  {
    id: 1,
    title: "Pomodoro Timer",
    description: "A simple Pomodoro timer built with HTML, CSS and JavaScript.",
    category: "frontend",
    image: pomodoroImg,
    repoURL: "https://github.com/lizaktwk/Pomodoro_VanillaJS",
    liveURL: "https://lizaktwk.github.io/Pomodoro_VanillaJS/",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "A weather app built with HTML, CSS, JavaScript and OpenWeather API.",
    category: "frontend",
    image: weatherImg,
    repoURL: "https://github.com/lizaktwk/weather-app",
    liveURL: "https://lizaktwk.github.io/weather-app/",
  },
  {
    id: 3,
    title: "Todo App",
    description:
      "A simple todo app built with HTML, CSS, JavaScript and localStorage.",
    category: "frontend",
    image: todoImg,
    repoURL: "https://github.com/lizaktwk/ToDo-App",
    liveURL: "https://lizaktwk.github.io/ToDo-App/",
  },
  {
    id: 4,
    title: "Kanban Board",
    description:
      "A simple Kanban board app built with HTML, CSS, JavaScript and localStorage.",
    category: "frontend",
    image: kanbanImg,
    repoURL: "https://github.com/lizaktwk/Kanban",
    liveURL: "https://lizaktwk.github.io/Kanban/",
  },
  {
    id: 5,
    title: "Landingpage for a Gardening Service in Hungary",
    description:
      "A landingpage for a Hungarian gardening service. Designed with Figma and built with HTML and CSS.",
    category: "uxui",
    image: gardeningImg,
    repoURL: "https://github.com/lizaktwk/Kanban",
    liveURL: "https://github.com/lizaktwk/Kanban",
  },
];
