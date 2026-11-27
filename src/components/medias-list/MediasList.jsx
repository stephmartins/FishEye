"use client";
import { useEffect, useState } from "react";
import styles from "./MediasList.module.css";
import Like from "../like/Like";
import Dropdown from "@/components/dropdown/Dropdown";
import MediaLightbox from "../media-lightbox/MediaLightbox";


/*Props photographer récupérée de photographe/page.jsx*/
export default function MediasList({photographer, medias }) 
{
  /*Pour total des Likes dans rectangle en bas à droite*/
  const totalLikes = medias.reduce((total, media) => total + media.likes, 0);

  /*Filtres*/
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

  /*Gestion MediaLightbox*/
const [activeIndex, setActiveIndex] = useState(null);
const activeMedia =
activeIndex === null ? null : sortedMedias[activeIndex];

/*Pour gestion des touches clavier quand la lightbox est ouverte*/
useEffect(() => {
  if (activeIndex === null) return;

  function handleKeyDown(event) {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") {
        setActiveIndex((index) => (index + 1) % sortedMedias.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex(
          (index) => (index - 1 + sortedMedias.length) % sortedMedias.length
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
}, [activeIndex, sortedMedias.length]);
    
    return (
    <>
      <div>
         <Dropdown selected={sortBy} onSelect={setSortBy} />
      </div>
    <div className={styles["medias-list"]}>
        {sortedMedias.map((media, index) => (
               
         <div className={styles["media-card"]} key={media.id}>
              <button
                  className={styles["media-open-button"]}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Ouvrir ${media.title}`}
              >
              {media.image ? (
                  <img
                    className={styles.media}
                    src={`/images/assets/${media.image}`}
                    alt={media.title}
                  />
              ) : media.video ? (
                  <video
                    className={styles.media}
                    src={`/images/assets/${media.video}`}
                    preload="metadata"
                    aria-hidden="true"
                  />
              ) : null}



              </button>

                
    

            {/*Titre média et Like*/}
            <div className={styles["media-footer"]}>
                
                <h2 className={styles["media-title"]}>{media.title}</h2>
            
                <Like/> 

            </div>

{/*Rectangle en bas à droite avec total des Likes et tarif photographe*/}
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

  {/*Lightbox active si un média est cliqué*/}                  
           {activeMedia && (
            <MediaLightbox
              media={activeMedia}
              onClose={() => setActiveIndex(null)}
              onPrevious={() =>
                setActiveIndex((index) =>
                  (index - 1 + sortedMedias.length) % sortedMedias.length
                )
              }
              onNext={() =>
                setActiveIndex((index) => (index + 1) % sortedMedias.length)
              }
            />
          )}
    </>

    )}