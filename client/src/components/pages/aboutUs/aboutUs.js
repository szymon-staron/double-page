import React from "react";
import styles from "./aboutUs.module.scss";
import Conteiner from "../../layout/container/container";
import FirstBanner from "../../common/banner/firstBanner";
import SecondBanner from "../../common/banner/secondBanner";

const AboutUs = () => (
  <Conteiner>
    <div className={styles.root}>
      <div className={styles.banner}>
        <FirstBanner width="100%" height="50%" margin="0" />
        <SecondBanner width="100%" height="50%" />
      </div>
      <div className={styles.about}>
        <header className={styles.header}>
          <h1 className={styles.header__title}>O nas</h1>
        </header>
        <section className={styles.section}>
          <p className={styles.paragraph}>
            Sklepy rowerowe/ serwis rowerów i wypożyczalnia nart i serwis
            nart/snowboardu
          </p>
          <p className={styles.paragraph}>
            Profesjonalizm w każdym calu - przyjdź i przekonaj się sam bo rower
            to nasza pasja!!!
          </p>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ubeq-8I0mlM"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <p className={styles.paragraph}>
            Sklep Bike Serwis powstał w 2004 roku, choć pasja jaką stał się
            rower to początek lat 90, wówczas jako młody kolarz trenujący w
            klubie KTK Kalisz rozwijałem swoją pasję. Kolejne doswiadczenia i
            pasje rozwijałem również jako mechanik poważnych grup zawodowych,
            obsługa kolarzy na znanych wyścigach jak Tour de Pologne,
            Solidarność, Wyścig Pokoju w Polsce i za granicą co dało mi i
            pomogło podjąc decyzje o stworzeniu własnej firmy.
          </p>
          <p className={styles.paragraph}>
            Pomysły i chęć rozwoju skłoniły mnie do otworzenia profesjonalnego
            sklepu z ukierunkowaniem na rowery wyścigowe jak i zarówno górskie,
            miejskie crossowe i turystyczne.Dziś działamy prężnie w dwóch
            miastach prowadząc profesjonalne sklepy. Oferujemy sprzęt najwyższej
            jakości i klasy spełniający wygórowane oczekiwania naszych
            Klientów.Służymy doradzctwem, w celu zaproponowania najlepszego
            rozwiązania.Nieustannie sie szkolimy aby poszerzać nasze horyzonty i
            poprawiac jakośc świadczonych usług bo Człowiek uczy się przez całe
            życie..Specjalizujemy się w sprzedaży i serwisowaniu sprzętu
            sportowego.
          </p>
          <p className={styles.paragraph}>
            Na podstawie własnych spostrzeżeń, informacji od klientów i
            współpracy z kolarzami zawodowymi,służymy radą i polecamy nie tylko
            rowery ale i części, które spełnią wymagania przyszłego właściciela,
            a sprawować będą się lepiej od innych.Przez lata naszej działalności
            zdobyliśmy grono wiernych Klientów, co motywuje nas do wytęzonej
            pracy i dbania o szczegółya do tego mamy profesjonalna obsługę i
            świetne ceny.
          </p>
          <p className={styles.paragraph}>
            Na życzenie i w konsultacji z klientami składamy rowery, koła pod
            zamówienie.Są to zarówno rowery i koła szosowe, MTB, jak i
            trekkingowe.Warto jednak podkreślić fakt posiadania gotowych
            rozwiązań znanych marek min ZIPP, MAVIC, TUFO, DT Swiss, FSA Vision,
            Shimano,którego jesteśmy oficjalnym punktem sprzedaży i serwisu.
          </p>
          <p className={styles.paragraph}>
            Oferujemy profesjonalny serwis rowerowy, narciarski i
            snowboardowy.Nasz warsztat wyposażony jest w zestaw profesjonalnych
            narzędzi, maszyn - do naprawy i modyfikowania każdego modelu roweru
            - jak i sprzetu zimowego (nart czy snowboardu).
          </p>
          <p className={styles.paragraph}>
            Jesteśmy również oficjalnym serwisem z certyfikatem - kół Mavic,
            amortyzatorów Rock Shox, FOX i marki Avid (hamulcy hydraulicznych),
            piast NEXUS i SRAM.
          </p>
          <p className={styles.paragraph}>
            W celu zaprezentowania towarów w naszym sklepie rozwija się nasza
            strona internetowa wraz ze sklepem internetowym i stacjonarym gdzie
            serdecznie zapraszamy!
          </p>
          <p className={styles.paragraph}>
          <span className={styles.new_line}> Osobiście można odwiedzać nasze sklepy w Miastach:</span> <span className={styles.new_line}>O/Kalisz, ul. Św.
            Michała 130</span> <span className={styles.new_line}>O/Kalisz 2, ul. Poznańska 119</span> <span className={styles.new_line}> O/Ostrów, ul.
            Limanowskiego 107</span>
          </p>
          <p className={styles.paragraph}>
            <span className={styles.new_line}>
              Nazwa Firmy: JACEK GARNCAREK BIKE SERWIS
            </span>
            <span className={styles.new_line}>
              Organ rejestrujący: Urząd Miasta Kalisz
            </span>
            <span className={styles.new_line}>Rejestracja w CEIDG</span>
            <span className={styles.new_line}>
              Adres przedsiębiorstwa: 63-400 Ostrów Wlkp, ul. Limanowskiego 107,
              62-800 Kalisz ul. Św. Michała 130, ul. Poznańska 119
            </span>
            <span className={styles.new_line}>
              Adres do reklamacji: 62-800 Kalisz, ul. Św. Michała 130
            </span>
            <span className={styles.new_line}>
              Nip: 6181600697 Regon: 250437690
            </span>
          </p>
          <p className={styles.paragraph}>Data aktualizacji: 2019-04-09 13:29:00</p>
        </section>
      </div>
    </div>
  </Conteiner>
);

export default AboutUs;
