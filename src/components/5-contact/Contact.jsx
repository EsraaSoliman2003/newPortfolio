"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneanimation from "../../animation/done.json";
import contactanimation from "../../animation/contact.json";
import styles from "./page.module.css";

export default function Contact() {
  const [state, handleSubmit] = useForm("mbjnqrwe");

  return (
    <div className={styles.contact}>
      <h1>Contact Us</h1>

      <div className={styles.flex}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.flex}>
            <label className={styles.label} id="email">
              Email Address
            </label>
            <input
              required
              type="email"
              name="email"
              className={styles.input}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className={styles.flex}>
            <label className={styles.label} id="message">
              Your message
            </label>
            <textarea
              required
              name="message"
              className={`${styles.input} ${styles.message}`}
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <div>
            <button
              className={styles.submit}
              type="submit"
              disabled={state.submitting}
            >
              {state.submitting ? "Submitting ..." : "submit"}
            </button>
          </div>

          <div className={styles.success}>
            {state.succeeded ? (
              <h1 className={styles.text}>
                <Lottie
                  loop={false}
                  style={{ height: 20 }}
                  animationData={doneanimation}
                />
                Your message has been sent successfully
              </h1>
            ) : null}
          </div>
        </form>
        <div className={styles.animation}>
          <Lottie style={{ height: 500 }} animationData={contactanimation} />
        </div>
      </div>
    </div>
  );
}
