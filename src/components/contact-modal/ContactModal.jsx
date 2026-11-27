"use client"
import { useState } from "react"
import styles from "./ContactModal.module.css"


export default function ContactModal ({photographer}) {
 const [isOpen, setIsOpen] = useState(false);
    return (
   <>
      {/* Bouton d'ouverture */}
      <button
            className={styles["bouton-contact"]}
            onClick={() => setIsOpen(true)}
      >
            Contactez-moi
      </button>
{/*Fermer la modale (possible avec la barre espace) - focus sur la croix de fermeture */} 


       {isOpen ? (
        <div className={styles.overlay}>
          <div className={styles.modal}>

            {/* Croix de fermeture */}
            <button
              type="button"
              className={styles.close}
              onClick={() => setIsOpen(false)}
              aria-label="Fermer"
            >
                <img className={styles["croix-blanche"]}
                    src="/images/croix-blanche.png"
                    alt="fermer la modale"
                />
            </button>
    
        <legend>
            <div className={styles["contactez-moi"]}> Contactez-moi </div>
            <div className={styles["photographer-name"]}>{photographer.name}</div>
        </legend>

<form method="post" action="">
          
            <label for="prénom">Prénom</label>
                <input type="text" name="Quel est votre prénom ?" className={styles.prenom} required/>
            
            <label for="nom">Nom</label>
                <input type="text" name="Quel est votre nom ?" className={styles.nom} required/>
            
            <label for="email">Email</label>
                <input type="email" name="Quel est votre e-mail ?" className={styles.email} required />
            
            <label for="message">Votre message</label>
                <textarea type="text" name="Laissez-nous un message" className={styles.message} rows="5" required />
           
            <button 
                type="submit"
                name="Envoyez le formulaire"
                className={styles.envoyer}
            >
                Envoyer
            </button>

    </form>
</div>
</div>
) : null
}
</>
);

}