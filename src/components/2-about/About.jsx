import React from "react";
import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h1>Me</h1>
      <ul className={styles.subTitle}>
        <li>Student at Engineering college</li>
        <li>I am in this field since 2022</li>
        <li>I have a lot of experience after more than 10 projects</li>
        <li>I have Certificates from ITI, NTI, MEC, Neon</li>
        <li>EX trainer for Digital Orange Center</li>

      </ul>
    </div>
  );
}
