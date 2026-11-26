"use client"
import { useState } from "react";
import styles from "./Like.module.css"

/* Bouton like */
export default function Like() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.like}>

        <span className={styles.count}>{count}</span>

        <button
          type="button"
          className={styles["like-button"]}
          onClick={() => setCount(count+1)}
          aria-label="Ajouter aux favoris"
        >
        
        <img
          className={styles["like-icon"]}
          src="/images/like.png"
          alt=""
          />

        </button>

    </div>
  );
}