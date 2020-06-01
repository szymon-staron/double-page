import React from "react";
import styles from "./contact.module.scss";

const Contact = () => (
  <div className={styles.conteiner}>
    <div className={styles.Contact}>
      <header>
        <h1>Kotakt</h1>
      </header>
      <section>
        <article>
          <h3>Warszawa</h3>
          <p>
           
            Adres: ul.Lorem
            <span className={styles.new_line}> Telefon: 997112122</span>
            <span className={styles.new_line}> Czynne: 24:00-24:00</span>
          </p>

          <h3>Częstochowa</h3>
          <p>
            <span className={styles.new_line}>Telefon: 214124124</span>
            <span className={styles.new_line}>Telefon: 214124124</span>
          </p>

          <h3>Kraków</h3>
          <p>
            Adres: ul.Lorem
            <span className={styles.new_line}>Telefon: 997112122</span>
            <span className={styles.new_line}>Czynne 24:00-24:00</span>
          </p>

          <h3>Poznań</h3>
          <p>
            Adres: ul.Lorem <span className={styles.new_line}>Telefon:
            997112122</span> <span className={styles.new_line}>Czynne
            24:00-24:00</span>
          </p>
        </article>
        <article>
          <h1>Serwis</h1>
          <h3>Kraków</h3>
          <p>
            Adres: ul.Jana Pablito II <span className={styles.new_line}>
            Telefon: 9329239432</span> <span className={styles.new_line}>Czynne:
            17:00-20:00</span>
          </p>
          <h3>Warszawa</h3>
          <p>
            
            Adres: ul.Lorem <span className={styles.new_line}>Telefon:
            997112122</span> <span className={styles.new_line}>Czynne:
            24:00-24:00</span>
          </p>
        </article>
      </section>
      <div>
        <form action="" method="post">
          <legend>Formularz kontaktowy</legend>
          <p>
            <label for="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Wpisz adres e-mail"
            ></input>
          </p>
          <p>
            <label for="topic">Temat:</label>
            <input
              type="text"
              name="topic"
              id="topic"
              placeholder="Wpisz temat"
            ></input>
          </p>
          <p>
            <label for="phone">Numer telefonu:</label>
            <input
              type="phone"
              name="phone"
              id="phone"
              placeholder="Wpisz numer telefon"
            ></input>
          </p>

          <p>
            <label for="textArea">Treść wiadomości:</label>
            <textarea id="textArea" name="textArea" rows="5" cols="20">
              Wypisz treść...
            </textarea>
          </p>
          <p>
            <label for="checkbox">Wyślij kopie wiadomości do mnie </label>
            <input type="checkbox" id="checkbox" name="checkbox"></input>
          </p>
          <button type="submit">Wyślij</button>
        </form>
      </div>
    </div>
  </div>
);

export default Contact;
