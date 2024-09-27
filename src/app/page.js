"use client";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AutoAwesomeMotionOutlinedIcon from "@mui/icons-material/AutoAwesomeMotionOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "./page.module.css";
import Main from "@/components/1-main/Main";
import About from "@/components/2-about/About";
import Projects from "@/components/3-projects/Projects";
import Experience from "@/components/4-experience/Projects";
import Contact from "@/components/5-contact/Contact";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useEffect, useState } from "react";

const myLinks = [
  {
    title: "Home",
    icon: <HomeOutlinedIcon />,
  },
  {
    title: "About",
    icon: <PersonOutlineOutlinedIcon />,
  },
  {
    title: "Projects",
    icon: <AutoAwesomeMotionOutlinedIcon />,
  },
  {
    title: "Experience",
    icon: <AutoGraphOutlinedIcon />,
  },
  {
    title: "Contact",
    icon: <CallOutlinedIcon />,
  },
];

export default function Home() {
  const [showIcon, setShowIcon] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const handClick = (buttonCategory) => {
    const section = document.getElementById(buttonCategory.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setShowIcon(window.innerWidth < 740);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // تحقق من الحجم عند التحميل

    return () => window.removeEventListener("resize", handleResize);
  }, [showIcon]);

  // تأثير لإغلاق الـ drawer عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      const drawer = document.querySelector(`.${styles.drawer}`);
      if (drawer && !drawer.contains(event.target)) {
        setShowDrawer(false);
      }
    };

    if (showDrawer) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showDrawer]);

  return (
    <div>
      {showIcon && (
        <MenuIcon
          onClick={() => {
            setShowDrawer(!showDrawer);
          }}
          className={styles.drawerIcon}
        />
      )}

      <div className={`${styles.drawer} ${showDrawer ? styles.show : ""}`}>
        <div className={styles.linksContainer}>
          {myLinks.map((link, index) => (
            <div
              key={index}
              onClick={() => {
                handClick(link.title);
                setShowDrawer(false); // إغلاق الـ drawer
              }}
              className={styles.link}
            >
              <div className={styles.icon}>{link.icon}</div>
              <div className={styles.title}>{link.title}</div>
            </div>
          ))}
        </div>
        <div className={styles.icons}>
          <Link
            target="_blank"
            href="https://www.facebook.com/esraa.ibrahim.58910"
          >
            <FacebookIcon className={styles.iconLink} />
          </Link>
          <Link target="_blank" href="https://twitter.com/EsraaEb44091913">
            <TwitterIcon className={styles.iconLink} />
          </Link>
          <Link target="_blank" href="https://github.com/EsraaSoliman2003">
            <GitHubIcon className={styles.iconLink} />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/esraa-soliman-7b132a249/"
          >
            <LinkedInIcon className={styles.iconLink} />
          </Link>
        </div>
      </div>

      <div className={styles.pages}>
        <div className={styles.pagesContainer}>
          <div id="home">
            <Main />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}
