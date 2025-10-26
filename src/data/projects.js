import pomodoroImg from "../assets/projects/pomodoro.png";
import weatherImg from "../assets/projects/weather.png";
import todoImg from "../assets/projects/todo.png";
import kanbanImg from "../assets/projects/kanban.png";
import gardeningImg from "../assets/projects/kertgondozás.png";
import portfolioImg from "../assets/projects/portfolio.png";

export const projects = [
  {
    id: 1,
    title: "Pomodoro Timer",
    description: "A simple Pomodoro timer built with HTML, CSS and JavaScript.",
    category: "frontend",
    type: "Personal Project",
    image: pomodoroImg,
    repoURL: "https://github.com/lizaktwk/Pomodoro_VanillaJS",
    liveURL: "https://lizaktwk.github.io/Pomodoro_VanillaJS/",
    features: [
      "Three timer modes: Study (Pomodoro, 25min), Short Break (5min), Long Break (15min)",
      "Start, Pause, Resume functionality",
      "Timer resets when changing modes",
      "Audio notification when the timer ends",
      "Responsive design for mobile and desktop",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "A simple weather app built with HTML, CSS, JavaScript and OpenWeather API.  Enter a location to see the current weather, including temperature, humidity, wind speed, and a dynamic weather icon.",
    category: "frontend",
    type: "Personal Project",
    image: weatherImg,
    repoURL: "https://github.com/lizaktwk/weather-app",
    liveURL: "https://lizaktwk.github.io/weather-app/",
    features: [
      "Search for current weather by city name",
      "Displays temperature, humidity, wind speed, and weather conditions",
      "Dynamic weather icons based on weather conditions",
      "Error handling for invalid city names",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
  },
  {
    id: 3,
    title: "Todo App",
    description:
      "A simple todo app built with HTML, CSS, JavaScript and localStorage.",
    category: "frontend",
    type: "Personal Project",
    image: todoImg,
    repoURL: "https://github.com/lizaktwk/ToDo-App",
    liveURL: "https://lizaktwk.github.io/ToDo-App/",
    features: [
      "Calendar displaying today's date",
      "Calendar displaying today's date",
      "Add new tasks",
      "Mark tasks as complete",
      "Delete tasks",
      "Progress bar with completion counter",
      "Data persistence using localStorage",
      "Responsive design for mobile and desktop",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
  },
  {
    id: 4,
    title: "Kanban Board",
    description:
      "A simple Kanban board app built with HTML, CSS, JavaScript and localStorage. This project allows users to organize tasks into columns (To Do, In Progress, Done) by dragging and dropping them.",
    category: "frontend",
    type: "Personal Project",
    image: kanbanImg,
    repoURL: "https://github.com/lizaktwk/Kanban",
    liveURL: "https://lizaktwk.github.io/Kanban/",
    features: [
      "Create, edit, and delete tasks",
      "Drag & Drop tasks between columns (using interact.js)",
      "Responsive layout with clean styling",
      "Data Maintenance using Local Storage",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Local Storage",
      "Library: interact.js",
    ],
  },
  {
    id: 5,
    title: "Landingpage for a Gardening Service in Hungary",
    description:
      "A landingpage for a Hungarian gardening service. Designed with Figma and currently under development using HTML, CSS and JavaScript.",
    category: "uxui",
    type: "Client Project",
    image: gardeningImg,
    // repoURL: "https://github.com/lizaktwk/Kanban",
    // liveURL: "https://github.com/lizaktwk/Kanban",
    features: [
      "Clean and modern design",
      "Responsive layout for mobile and desktop",
    ],
    technologies: ["Figma", "HTML", "CSS", "JavaScript"],
    projectDetails: {
      problems: [
        "A client needed a landingpage to showcase their gardening services online.",
        "increase online presence and attract more customers.",
        "The client had no prior website or branding materials.",
      ],
      goals: [
        "convey professionalism and reliability.",
        "outstand from competitors.",
        "Create a clean, modern, and responsive design.",
      ],
      personas: ["Homeowners in Hungary looking for gardening services."],
      research: [
        "Analyzed competitor websites for design inspiration and best practices.",
        "Collected feedback from the client on their preferences and requirements.",
      ],
    },
  },
  {
    id: 6,
    title: "This Portfolio Website",
    description:
      "A personal portfolio website showcasing my projects and skills in Frontend Development and UX/UI Design. Designed with Figma and developed using React.",
    category: ["uxui", "frontend"],
    type: "Personal Project",
    image: portfolioImg,
    repoURL: "https://lizaktwk.github.io/Portfolio-Lisa-Kutowinski/",
    // liveURL: "https://lizaktwk.github.io/portfolio/",
    features: [
      "Clean and modern design",
      "Responsive layout for mobile and desktop",
      "CSS animations for interactive elements",
    ],
    technologies: ["Figma", "React", "SCSS", "Vite"],
    projectDetails: {
      problems: [
        "My old portfolio was overfilled and outdated.",
        "Visitors couldn’t easily find information about my projects.",
      ],
      goals: [
        "Create a clean, modern, and responsive design.",
        "Make project information easily accessible.",
        "Showcase my skills and experience effectively.",
        "Get hired as a front-end developer.",
      ],
      personas: [
        "Recruiters looking for front-end talent.",
        "Potential collaborators in creative tech.",
      ],
      research: [
        "Reviewed many designer and front-end developer portfolios for layout and design inspiration.",
        "Analyzed portfolio reviews on Youtube for best practices.",
        "Collected feedback from 3 peers.",
      ],
    },
  },
];
