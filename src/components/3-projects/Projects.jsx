"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import styles from "./page.module.css";

const myProjects = [
  {
    ProjectTitle: "Templete",
    num: 12,
    date: "2022",
    linkDesine: "https://esraasoliman2003.github.io/project1/project1.html",
    linkGithub: "https://github.com/EsraaSoliman2003/project1",
    desc: "HTML & CSS",
    imhPath: "/imgs/1.jpg",
  },
  {
    ProjectTitle: "Templete",
    num: 11,
    date: "2022",
    linkDesine: "https://esraasoliman2003.github.io/project2/project2.html",
    linkGithub: "https://github.com/EsraaSoliman2003/project2",
    desc: "HTML & CSS",
    imhPath: "/imgs/2.jpg",
  },
  {
    ProjectTitle: "Templete",
    num: 9,
    date: "2022",
    linkDesine: "https://esraasoliman2003.github.io/project3/project3.html",
    linkGithub: "https://github.com/EsraaSoliman2003/project3",
    desc: "HTML & CSS",
    imhPath: "/imgs/3.jpg",
  },
  {
    ProjectTitle: "Templete",
    num: 10,
    date: "2022",
    linkDesine: "https://esraasoliman2003.github.io/bondi/pro.html",
    linkGithub: "https://github.com/EsraaSoliman2003/bondi",
    desc: "HTML & CSS & Bootstrap",
    imhPath: "/imgs/4.jpg",
  },
  {
    ProjectTitle: "Travel Website",
    num: 2,
    date: "2023",
    linkDesine: "https://esraasoliman2003.github.io/Travel/index.html",
    linkGithub: "https://github.com/EsraaSoliman2003/Travel",
    desc: "HTML & CSS & Bootstrab & JS",
    imhPath: "/imgs/5.jpg",
  },
  {
    ProjectTitle: "Typing Speed",
    num: 3,
    date: "2023",
    linkDesine: "https://esraasoliman2003.github.io/Typing-Speed/pro.html",
    linkGithub: "https://github.com/EsraaSoliman2003/Typing-Speed",
    desc: "HTML & CSS & JS",
    imhPath: "/imgs/6.jpg",
  },
  {
    ProjectTitle: "Memory Game",
    num: 8,
    date: "2023",
    linkDesine: "https://esraasoliman2003.github.io/Memory-Game/pro.html",
    linkGithub: "https://github.com/EsraaSoliman2003/Memory-Game",
    desc: "HTML & CSS & JS",
    imhPath: "/imgs/7.jpg",
  },
  {
    ProjectTitle: "Hang Man Game",
    num: 7,
    date: "2023",
    linkDesine: "https://esraasoliman2003.github.io/HangMan-Game/pro.html",
    linkGithub: "https://github.com/EsraaSoliman2003/HangMan-Game",
    desc: "HTML & CSS & JS",
    imhPath: "/imgs/8.jpg",
  },
  {
    ProjectTitle: "Fooder",
    num: 5,
    date: "2024",
    linkDesine: "https://esraasoliman2003.github.io/Fooder",
    linkGithub: "https://github.com/EsraaSoliman2003/Fooder",
    desc: "HTML & CSS & React",
    imhPath: "/imgs/9.jpg",
  },
  {
    ProjectTitle: "DashBoard",
    num: 1,
    date: "2024",
    linkDesine: "https://dashboard2024.surge.sh",
    linkGithub: "https://github.com/EsraaSoliman2003/Admin-Dashboard",
    desc: "React & MUI & Many libraries",
    imhPath: "/imgs/10.jpg",
  },
  {
    ProjectTitle: "Bags Shop",
    num: 5,
    date: "2026",
    linkDesine: "https://bagsshop.surge.sh",
    linkGithub: "https://github.com/EsraaSoliman2003/BagsShop",
    desc: "React & MUI",
    imhPath: "/imgs/11.jpg",
  },
  {
    ProjectTitle: "TODO Lost",
    num: 4,
    date: "2024",
    linkDesine: "https://todo-list-gilt-gamma-20.vercel.app",
    linkGithub: "https://github.com/EsraaSoliman2003/TODO-List",
    desc: "Next & MongoDB",
    imhPath: "/imgs/12.jpg",
  },
];
const sortedProjects = myProjects.sort((a, b) => a.num - b.num);


export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(4);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleVisibility = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setVisibleCount(myProjects.length);
    } else {
      setVisibleCount(4);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Projects</h1>

      <div className={styles.projects}>
        {sortedProjects.map((item, index) => {
          const isVisible = index < 4 || (isExpanded && index < visibleCount);

          return (
            <Link
              target="_blank"
              key={item.linkDesine}
              href={item.linkDesine}
              className={`${styles.project} ${
                isVisible ? styles.visible : styles.hidden
              }`}
            >
              <Image
                alt=""
                width={266}
                height={250}
                className={styles.img}
                src={item.imhPath}
              />
              <div className={styles.box}>
                <h1 className={styles.title}>{item.ProjectTitle}</h1>
                <p className={styles.date}>{item.date}</p>
                <div className={styles.desc}>{item.desc}</div>
                <div className={styles.icons}>
                  <button
                    className={styles.btn}
                    onClick={() => window.open(item.linkGithub, "_blank")}
                  >
                    <GitHubIcon className={styles.icon} />
                  </button>
                  <button className={styles.btn}>
                    <LinkIcon className={styles.icon} />
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <button onClick={handleToggleVisibility} className={`${styles.seeMore} ${isExpanded ? styles.seeLess: ""}`}>
        {isExpanded ? (
          <ExpandLessIcon className={styles.more} />
        ) : (
          <ExpandMoreIcon className={styles.more} />
        )}
      </button>
    </div>
  );
}
