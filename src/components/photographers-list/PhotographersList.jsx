import {prisma} from "@/app/prisma-db.js";
import styles from "./PhotographersList.module.css"
import Link from "next/link";

export default async function PhotographersList() {

  // Récupérer toutes les infos des photographes
  const photographers = await prisma.photographer.findMany ();

    return (
    
    <div className={styles["photographers-list"]}>
        {photographers.map((photographer) => (
               
         <div className={styles.photographer} key={photographer.id}>

          <Link href={`/photographe/${photographer.name.toLowerCase().replaceAll(" ","-")}`}>
              <img
                  className={styles.photo}
                  src={`/images/assets/${photographer.portrait}`}
                  alt={`Portrait de ${photographer.name}`}>
              </img>
          </Link>

          <h2 className={styles.name}>{photographer.name}</h2>

          <p className={styles.city} >{photographer.city}, {photographer.country}</p>

          <p className={styles.tagline}>{photographer.tagline}</p>

          <p className={styles.price}>{photographer.price}€/jour</p>
        
        </div>
      
))}
    </div>
    );
}
