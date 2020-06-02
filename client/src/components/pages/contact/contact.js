import React from "react";
import styles from "./contact.module.scss";
import img01 from "./baner_lewa01.jpg";
import png02 from "./baner_lewa02.png";

const Contact = () => (
  <div className={styles.conteiner}>
    <div className={styles.img}>
      <img className={styles.img__size} src={img01} alt={"..."} />
      <img className={styles.img__size} src={png02} alt={"...."} />
    </div>
    <div className={styles.Contact}>
      <header>
        <h1 className={styles.title}>Kotakt</h1>
      </header>

      <section className={styles.article}>
        <article className={styles.article__shop}>
          <div>
            <h3>Warszawa</h3>
            <p>
              <span className={styles.new_line}> Adres: ul.Lorem </span>
              <span className={styles.new_line}> Telefon: 997112122</span>
              <span className={styles.new_line}> Czynne: 24:00-24:00</span>
            </p>
          </div>
          <div>
            <h3>Częstochowa</h3>
            <p>
              <span className={styles.new_line}> Adres: ul.Lorem </span>
              <span className={styles.new_line}>Telefon: 214124124</span>
              <span className={styles.new_line}>Telefon: 214124124</span>
            </p>
          </div>

          <div>
            {" "}
            <h3>Kraków</h3>
            <p>
              <span className={styles.new_line}> Adres: ul.Lorem</span>
              <span className={styles.new_line}>Telefon: 997112122</span>
              <span className={styles.new_line}>Czynne 24:00-24:00</span>
            </p>
          </div>
          <div>
            <h3>Poznań</h3>
            <p>
              <span className={styles.new_line}> Adres: ul.Lorem</span>
              <span className={styles.new_line}>Telefon: 997112122</span>
              <span className={styles.new_line}>Czynne 24:00-24:00</span>
            </p>
          </div>
        </article>
      </section>
    </div>
    <article className={styles.article__service}>
      <h1 className={styles.service__title}>Serwis</h1>
      <h3>Kraków</h3>
      <p>
        <span className={styles.new_line}>Adres: ul.Jana Pablito II</span>
        <span className={styles.new_line}>Telefon: 9329239432</span>
        <span className={styles.new_line}>Czynne: 17:00-20:00</span>
      </p>
      <h3>Warszawa</h3>
      <p>
        <span className={styles.new_line}> Adres: ul.Lorem</span>
        <span className={styles.new_line}>Telefon: 997112122</span>
        <span className={styles.new_line}>Czynne: 24:00-24:00</span>
      </p>
    </article>

    <div className={styles.form}>
      <form action="" method="post">
        <legend className={styles.form__title}>Formularz kontaktowy</legend>
        <p className={styles.form__box}>
          <label className={styles.form__label} for="email">
            Email:
          </label>
          <input
            className={styles.form__input}
            type="email"
            name="email"
            id="email"
            placeholder="Wpisz adres e-mail"
          ></input>
        </p>
        <p className={styles.form__box}>
          <label className={styles.form__label} for="topic">
            Temat:
          </label>
          <input
            className={styles.form__input}
            type="text"
            name="topic"
            id="topic"
            placeholder="Wpisz temat"
          ></input>
        </p>
        <p className={styles.form__box}>
          <label className={styles.form__label} for="phone">
            Numer telefonu:
          </label>
          <input
            className={styles.form__input}
            type="phone"
            name="phone"
            id="phone"
            placeholder="Wpisz numer telefon"
          ></input>
        </p>

        <p className={styles.form__box}>
          <label className={styles.form__label} for="textArea">
            Treść wiadomości:
          </label>
          <textarea
            className={styles.form__input}
            id="textArea"
            name="textArea"
            rows="5"
            cols="20"
          >
            Wypisz treść...
          </textarea>
        </p>
        <p className={styles.form__box}>
          <label className={styles.form__label} for="checkbox">
            Wyślij kopie wiadomości do mnie{" "}
          </label>
          <input type="checkbox" id="checkbox" name="checkbox"></input>
        </p>
        <button className={styles.form__button} type="submit">
          Wyślij
        </button>
      </form>
    </div>
  </div>
);

export default Contact;
