import styles from "../../styles/Instructions.module.scss";

export default function Instructions() {
  return (
    <div className={styles.Instructions}>
      <h1 className={styles.title}>Istruzioni per l'uso del Pokedex</h1>
      <p className={styles.text}>
        Benvenuto nel Pokedex! Questo strumento ti permette di cercare e
        visualizzare informazioni sui tuoi Pokemon preferiti. Ecco come
        utilizzarlo:
      </p>
      <h2 className={styles.title}>Cerca Pokemon</h2>
      <p className={styles.text}>
        Nella pagina principale del Pokedex, troverai un campo di ricerca.
        Inserisci il nome del Pokemon che stai cercando in questo campo e premi
        il pulsante "Cerca".
      </p>

      <h2 className={styles.title}>Visualizza i risultati della ricerca</h2>
      <p className={styles.text}>
        Dopo aver premuto il pulsante "Cerca", verrai reindirizzato a una nuova
        pagina con le informazioni sul Pokemon che stai cercando. Qui potrai
        vedere dettagli come il tipo di Pokemon, le sue abilità, e molto altro.
      </p>

      <h2 className={styles.title}>Naviga tra i Pokemon</h2>
      <p className={styles.text}>
        Sulla pagina principale del Pokedex, troverai anche due liste di
        Pokemon: "Il classico intramontabile" e "Una nuova generazione". Queste
        liste mostrano i Pokemon disponibili per ciascuna categoria. Clicca sul
        nome di un Pokemon per visualizzare le sue informazioni.
      </p>

      <p className={styles.text}>
        Speriamo che queste istruzioni ti aiutino a utilizzare al meglio il
        Pokedex. Buona ricerca!
      </p>
    </div>
  );
}
