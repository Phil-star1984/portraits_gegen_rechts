/* import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; */
import "./App.css";

function App() {
  return (
    <>
      <header>
        <div id="title">
          <h1>PORTRAITS GEGEN RECHTS</h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#aktion">Aktion</a>
            </li>
            <li>
              <a href="#mitmachen">Mitmachen</a>
            </li>
            <li>
              <a href="#portraits">Portraits</a>
            </li>
            <li>
              <a href="#vernissage">Vernissage</a>
            </li>
            <li>
              <a href="#kuenstler">Der Künstler</a>
            </li>
            <li>
              <a href="#impressionen">Impressionen</a>
            </li>
            <li>
              <a href="#impressum">Impressum</a>
            </li>
          </ul>
        </nav>
      </header>
      <section id="key-visual">
        <div id="keyvisual-container">
          <h1>
            PORTRAITS
            <br />
            GEGEN
            <br />
            RECHTS
          </h1>
          <h2>#WürzburgGegenHass</h2>
        </div>
      </section>
      <section id="aktion">
        <h2>Die Aktion „Portraits gegen Rechts“</h2>
        <p>
          Portraits gegen Rechts ist eine Kunstaktion, die sich aktiv gegen jede
          Form von Fremdenfeindlichkeit und Rechtsextremismus wendet. Im Laufe
          der Aktion sollen gezeichnete Portraits von Würzburger Bürgern
          entstehen, die bei der Vernissage im Rathaus am 04.04.2024 ausgestellt
          werden.
        </p>
      </section>
      <div className="split-section">
        <section id="mitmachen" style={{ backgroundColor: "#e9f5db" }}>
          <h2>Wie kann ich mitmachen?</h2>
          <p>
            Du kannst innerhalb von wenigen Sekunden teilnehmen. Schicke ein
            Foto von der Person, die gezeichnet werden soll, sowie den Vor- und
            Nachnamen an info@phil-splash.de. Daraufhin zeichnet der Künstler
            das Portrait, und es wird am Tag der Vernissage im Rathaus Würzburg
            ausgestellt. Die Teilnahme bei der Aktion ist kostenlos; wer möchte,
            kann das Portrait auch direkt nach der Ausstellung kaufen. Starte
            jetzt! Lass von dir oder einer geliebten Person ein Portrait
            anfertigen und setze ein Symbol für die Vielfalt und gegen Rechts.
          </p>
        </section>
        <section
          id="portraits"
          style={{
            backgroundImage: `url('https://www.wuerzburgerleben.de/wp-content/uploads/sites/10/2020/01/TheMillionPainter_Paintings_pink-1067x800.jpg')`,
          }}
        >
          <h2>Einzigartige Portraits mit Inhalt</h2>
          <p>
            Das Einzigartige an den Portraits ist, dass sie vor dem Paragraph 1
            des Deutschen Grundgesetzes als Hintergrund gezeichnet werden und
            somit zu einem individuellen Symbol für Toleranz und Vielfalt
            werden.
          </p>
        </section>
      </div>
      <section id="vernissage" style={{ backgroundColor: "#ffe5d9" }}>
        <h2>Die Vernissage der Portraits</h2>
        <p>
          Die Portraits werden gesammelt im Foyer des Rathauses Würzburg
          gezeigt. Die Vernissage ist am Donnerstag, den 04.04.2024. Die
          Ausstellung ist ab dem 04.04.24 bis zum 29.04.24 zu den regulären
          Öffnungszeiten des Rathauses zu besuchen (Mo-Fr zwischen 9-17 Uhr).
        </p>
      </section>
      <section id="kuenstler" style={{ backgroundColor: "#d9e2ff" }}>
        <h2>Der Künstler</h2>
        <p>
          Phil Splash ist Web Developer, Art Director und Künstler. 2015 bekam
          er von der Presse den Titel „Der Millionen Maler“. Seit er 2010 damit
          begonnen hat, Portraits von Menschen in der U-Bahn zu zeichnen, ist es
          sein Lebensziel, 1 Million Menschen zu portraitieren. Er hat bereits
          über 300.000 Portraits gezeichnet und Aktionen für Weltmarken wie
          Calvin Klein, Lavazza und MacCosmetics gestaltet. Über seine Aktionen
          wurde landesweit in der Presse berichtet (RTL, ZDF, Süddeutsche
          Zeitung, BILD).
        </p>
      </section>
      <section id="impressionen" style={{ backgroundColor: "#f0f0f0" }}>
        <h2>Impressionen</h2>
        <div className="gallery">
          <img
            src="https://www.wuerzburgerleben.de/wp-content/uploads/sites/10/2020/01/TheMillionPainter_Paintings_pink-1067x800.jpg"
            alt="Impression"
          />
        </div>
      </section>
      <footer>
        <p>© 2024 Portraits gegen Rechts. Alle Rechte vorbehalten.</p>
      </footer>
    </>
  );
}

export default App;
