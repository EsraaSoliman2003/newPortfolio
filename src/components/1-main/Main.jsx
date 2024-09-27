"use client";
import React, { useRef } from "react";
import styles from "./page.module.css";
import developeranimation from "../../animation/main.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import test from "../../imgs/me.png";
import Image from "next/image";
import VerifiedIcon from "@mui/icons-material/Verified";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Main({ id }) {
  const lottieRef = useRef();

  return (
    <section className={styles.section}>
      <div className={styles.leftSection}>
        <div className={styles.parentAvatar}>
          <motion.div
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ type: "spring", stiffness: 100 }}
            className={styles.avatarContainer}
          >
            <Image
              src={test}
              className={styles.avatar}
              alt=""
              width={150}
              height={150}
            />
          </motion.div>
          <VerifiedIcon className={styles.icon} />
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className={styles.title}
        >
          HELLO, I AM ESRAA, ReactJS Developer
        </motion.h1>
        <div>
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
      </div>
      <div className={styles.rightSection}>
        <Lottie
          className={styles.animation}
          lottieRef={lottieRef}
          onLoadedImages={() => {
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={developeranimation}
        />
      </div>
    </section>
  );
}
