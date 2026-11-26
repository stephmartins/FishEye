"use client";
import { useState } from "react";
import styles from "./MediasList.module.css"
import Like from "../like/Like"
import Dropdown from "@/components/dropdown/Dropdown"

/*Props photographer récupérée de photographe/page.jsx*/
export default function MediasList({photographer, medias }) 
{
  const totalLikes = medias.reduce((total, media) => total + media.likes, 0);

  const [sortBy, setSortBy] = useState("Popularité");

  const sortedMedias = [...medias].sort((a, b) => {
    switch (sortBy) {
      case "Date":
        return b.date.localeCompare(a.date); // récent en premier, si le format est AAAA-MM-JJ
      case "Titre":
        return a.title.localeCompare(b.title, "fr", { sensitivity: "base" });
      case "Popularité":
      default:
        return b.likes - a.likes; // plus de likes en premier
    }
  });

  
    return (
    <>
      <div>
         <Dropdown selected={sortBy} onSelect={setSortBy} />
      </div>
    <div className={styles["medias-list"]}>
        {sortedMedias.map((media) => (
               
         <div className={styles["media-card"]} key={media.id}>
          
                <img
                    className={styles.media}
                    src={`/images/assets/${media.image}`}
                    alt={media.title}>
                </img>
          
            <div className={styles["media-footer"]}>
                
                <h2 className={styles["media-title"]}>{media.title}</h2>
            
                <Like/> 
            </div>
/*Rectangle en bas à droite avec total des Likes et tarif photographe*/
    <p className={styles["price-like"]} >
          <span>{totalLikes}</span>
          <img
          className={styles["like-icon"]}
          src="/images/like-black.png"
          alt=""
          />
        <span>{photographer.price}€/jour</span>
    </p>
        </div>
      
))}
    </div>
    </>

    )}