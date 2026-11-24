import { Suspense } from "react";/*Ajouté pour résoudre une erreur*/
import PhotographersList from "../components/photographers-list/PhotographersList";
import Logo from "../components/logo/Logo.jsx"


export default function Home() {
  return (
    <main>

      <header>
          <Logo/>
          <h1> Nos photographes </h1>
      </header>

      <Suspense fallback={<p>Chargement des photographes...</p>}>
        <PhotographersList />
      </Suspense>
    </main>
  );
}

