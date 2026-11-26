"use client"
import { useState } from "react";
import styles from "./Dropdown.module.css"


export default function Dropdown({selected, onSelect}) {
  const options = ["Popularité", "Date", "Titre"];

  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>

          <label className={styles["dropdown-label"]}>
              Trier par :
          </label>
<div className={styles["dropdown-open-3-options"]}>
          {/* Bouton principal */}
          <button
            type="button"
            className={`${styles["dropdown-button"]} ${
            isOpen ? styles["dropdown-button-open"] : ""
            }`}

            aria-haspopup="listbox" /*Ouvre la liste des options*/
            aria-expanded={isOpen} /*Liste ouverte*/
            onClick={() => setIsOpen(!isOpen)}
          >
            {selected}
                <img
                    className={styles.fleche}
                    src={isOpen? "/images/vector-haut.png" : "/images/vector-bas.png"}
                    alt="flèche de sélection">
                </img>
          </button>

      {/* Liste déroulante */}
      {isOpen && (
        <ul className={styles["dropdown-list"]} role="listbox">
          {options
            .filter((option) => option !== selected)/*Rend invisible l'option déjà sélectionnée*/
            .map((option) => (
              <li
                key={option}
                role="option"
                aria-selected="false" /*Etat de sélection*/
                onClick={() => handleSelect(option)}
              >
                {option}
              </li>
            ))}
        </ul>
      )}
      </div>

    </div>
  );
}