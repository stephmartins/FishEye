import {prisma} from "@/app/prisma-db.js";
import Logo from "@/components/logo/Logo";
import styles from "./page.module.css";

export default async function PhotographerPage({params}) {

    const { slug } = await params;
    const photographers = await prisma.photographer.findMany();

    const photographer = photographers.find(
    (id) => id.name.toLowerCase().replaceAll(" ", "-") === slug
    );
     
    return(

<main className="photographer-page">

    <header className={styles.logo}>
        <Logo/>
    </header>

    <section className={styles.banner}>
        <div className={styles["banner-colonne1"]}>
            <h1 className={styles.name}>{photographer.name}</h1>

            <p className={styles.city} >{photographer.city}, {photographer.country}</p>
                    
            <p className={styles.tagline}>{photographer.tagline}</p>
       </div>
        <button className={styles["bouton-contact"]}>Contactez-moi</button>
       <img
            className={styles.photo}
            src={`/images/assets/${photographer.portrait}`}
            alt={`Portrait de ${photographer.name}`}>
        </img>

</section>
<div className={styles.filtres}>
    trier par 
</div>
</main>
)
}