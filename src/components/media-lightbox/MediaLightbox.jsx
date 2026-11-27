"use client";
import styles from "./MediaLightbox.module.css";

export default function MediaLightbox({
  media,
  onClose,
  onPrevious,
  onNext,
}) {
  return (
    <div className={styles.modal}>
      <div className={styles.content} role="dialog" aria-modal="true">
        <button className={styles.closeButton} onClick={onClose} aria-label="Fermer">×</button>
        <button className={styles.previousButton} onClick={onPrevious} aria-label="Média précédent">‹</button>
        <button className={styles.nextButton} onClick={onNext} aria-label="Média suivant">›</button>
        
        <div className={styles["media-container"]}>
        {media.image ? (
          <img
            className={styles.media}
            src={`/images/assets/${media.image}`}
            alt={media.title}
          />
        ) : (
          <video
            className={styles.media}
            src={`/images/assets/${media.video}`}
            controls
          />
        )}

                
        <p className={styles.title}>{media.title}</p>

        
      </div>
      </div>
    </div>
  );
}
