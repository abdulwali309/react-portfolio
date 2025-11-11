import bank from "../assets/projects/bank.jpeg";
import hospital from "../assets/projects/hospital.jpg";
import website from "../assets/projects/website.jpg";
import minesweeper from "../assets/projects/minesweeper.png";
import pet from "../assets/projects/home.png";
import ufc from "../assets/projects/UFC.png";

export const HERO_CONTENT = `I am a full stack developer and software engineer passionate about building scalable and efficient applications. I have hands-on experience with a wide range of technologies, including Java, Python, C++, SQL, JavaScript, HTML/CSS, PHP, React, React Native, Node.js, Flask, FastAPI, and JavaFX. I enjoy solving complex problems, creating innovative solutions, and delivering exceptional user experiences. My goal is to leverage my skills to develop impactful software that drives real-world results.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer and software engineer with hands-on experience building web and software applications across a variety of technologies, including Java, Python, C++, SQL, JavaScript, HTML/CSS, PHP, React, React Native, Node.js, Flask, FastAPI, JavaFX, and more. I thrive in collaborative environments, enjoy solving complex problems, and continuously strive to learn and adapt to new challenges. My projects range from full-stack web applications and data-driven systems to interactive games and mobile apps, giving me a broad perspective on software development. Outside of coding, I am passionate about sports, especially combat sports and basketball, and enjoy applying the same focus and discipline I practice in development to my athletic pursuits.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Data and IT Analyst",
    company: "Daybar Industries",
    description: `Managed production data and IT operations at Daybar Industries by collecting and analyzing hourly reports across multiple production lines using Excel and SQL. Ensured order accuracy by verifying and correcting tags in Delta WMS, and created real-time reports for management decision-making. Served as the primary IT support on shift, resolving system and hardware issues through a ticket-based system to minimize downtime and maintain smooth operations.`,
    technologies: ["SQL", "Excel", "Delta WMS", "IT Support & Troubleshooting"],
  },
  {
    year: "2022 - 2025",
    role: "Computer Science Tutor",
    company: "Freelance",
    description: `Tutored peers and younger students in computer science courses at Western University, providing one-on-one and small group sessions both in-person and online. Focused on exam preparation and project guidance across a wide range of subjects, helping students strengthen theoretical understanding and apply concepts in practical coding assignments. Improved student outcomes by clarifying complex topics, guiding software development projects, and reinforcing core computer science fundamentals.`,
    technologies: ["Python", "Java", "C++", "HTML/CSS", "JavaScript", "mySQL"],
  },
];

export const PROJECTS = [
  {
    title: "UFC Fight Predictor",
    image: ufc,
    description:
      "A fully end-to-end UFC fight prediction system that uses historical fight data, fighter statistics, and recent form to calculate the probability of a fighter winning. The system performs extensive data cleaning, feature engineering, and machine learning modeling, and includes an interactive command-line interface with fuzzy name matching and autocomplete. Evaluation metrics show strong predictive performance, with top features including significant strikes, strike differentials, and recent form statistics. The project demonstrates a complete ML pipeline from raw data to user-facing predictions.",
    technologies: ["Python", "Pandas", "Numpy", "Scikit-Learn", "XGBoost"],
    github: "https://github.com/abdulwali309/UFC-FightPredictor",

  },
  {
    title: "Banking Application",
    image: bank,
    description:
      "Developed a secure banking system supporting account creation, deposits, withdrawals, and transaction history, implementing SHA-256 password hashing, file-based persistence, and OOP principles. Led sprint planning, version control, and bug fixes for a team of five.",
    technologies: ["C++", "Qt", "CSS"],
    github: "https://github.com/abdulwali309/BankingApplication",

  },
  {
    title: "Mock Hospital Management Website",
    image: hospital,
    description:
      "Built a full-stack website for managing patients, doctors, and nurses, featuring dynamic search and filtering, CRUD operations, and a MySQL database backend. Designed intuitive interfaces and ensured secure, consistent data handling.",
    technologies: ["PHP", "CSS", "MySQL"],
    github: "https://github.com/abdulwali309/MockHospitalManagementWebsite"
  },
  {
    title: "Portfolio Website",
    image: website,
    description:
      "Designed and developed a responsive portfolio website to showcase projects, experience, and skills. Features include interactive project sections, clear technology listings, and an intuitive layout for easy navigation. Built to provide recruiters and visitors with a polished overview of technical expertise and accomplishments.",
    technologies: ["JavaScript", "React", "Vite"],
    github: "https://github.com/abdulwali309/MockHospitalManagementWebsite"

  },
  {
    title: "Minesweeper Game",
    image: minesweeper,
    description:
      "Developed a classic Minesweeper game using C++ and Qt, featuring a grid-based interface with interactive cells, mine detection, and game state management. Implemented core game mechanics including cell revealing, flagging, and win/loss conditions. Designed a responsive GUI to enhance user experience.",
    technologies: ["C++", "Qt"],
    github: "https://github.com/abdulwali309/Minesweeper"
  },
  {
    title: "Virutal Pet Game Application",
    image: pet,
    description:
      "Created a virtual pet care application with interactive features including feeding, playing, and monitoring health/happiness, along with parental controls and persistent game saving. Applied OOP principles and JavaFX GUI design.",
    technologies: ["Java", "JavaFX", "JUnit", "Gradle", "GSON"],
    github: "https://github.com/abdulwali309/Virtualpetgame"
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "6472186090 ",
  email: "abdulwalik11@gmail.com",
};
