import { useEffect, useRef } from 'react';
import logocv from './photo.jpg';
import qrcode from './qr-code.png';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaGlobe,
  FaJava,
  FaNetworkWired,
  FaTerminal,
  FaPrint,
} from 'react-icons/fa';
import {
  SiHtml5,
  SiCss,
  SiC,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiCplusplus,
  SiPython,
  SiSharp,
} from 'react-icons/si';
import './App.css';

function App() {
  const timelineRefs = useRef([]);

  useEffect(() => {
    const updateCvScale = () => {
      const a4WidthInPixels = 794;
      const viewWidth = document.documentElement.clientWidth || window.innerWidth;
      const scale = Math.min(1, viewWidth / a4WidthInPixels);
      document.documentElement.style.setProperty('--cv-scale', scale);
    };

    updateCvScale();
    window.addEventListener('resize', updateCvScale);

    timelineRefs.current.forEach((item, index) => {
      if (item) {
        item.style.opacity = '0';
        item.style.transform = 'translateY(8px)';
        item.style.transition = `opacity .4s ease ${index * 0.03}s, transform .4s ease ${index * 0.03}s`;
        requestAnimationFrame(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        });
      }
    });

    return () => window.removeEventListener('resize', updateCvScale);
  }, []);

  const TL = ({ time, title, badge, desc, idx }) => (
    <div ref={el => (timelineRefs.current[idx] = el)} className="timeline-item">
      <time>{time}</time>
      <div>
        <h3>{title}</h3>
        {badge && <span className="badge">{badge}</span>}
        {desc && <p>{desc}</p>}
      </div>
    </div>
  );

  const handlePrint = () => {
    const previousTitle = document.title;
    const restoreTitle = () => {
      document.title = previousTitle;
      window.removeEventListener('afterprint', restoreTitle);
    };

    document.title = 'CV - Hachemmy Jovenno RAZAFINTIAMASY';
    window.addEventListener('afterprint', restoreTitle);
    window.print();
  };

  return (
    <div className="cv-page">
      <div className="print-actions">
        <button type="button" className="print-button" aria-label="Imprimer ou enregistrer le CV en PDF" onClick={handlePrint}>
          <FaPrint aria-hidden="true" />
          Imprimer / PDF
        </button>
      </div>

      <main className="cv">
        <aside className="sidebar">
          <div className="sidebar-photo">
            <img src={logocv} alt="Hachemmy Jovenno RAZAFINTIAMASY" />
          </div>

          <section>
            <h2>COORDONNÉES</h2>
            <div className="contact">
              <p><FaMapMarkerAlt className="icon-item" /> Tanambao, 301, Fianarantsoa</p>
              <p><FaPhoneAlt className="icon-item" /> +261 38 64 65 898</p>
              <p><FaEnvelope className="icon-item" /> <a href="mailto:hachejoven@gmail.com">hachejoven@gmail.com</a></p>
              <p><FaLinkedinIn className="icon-item" /> <a href="https://www.linkedin.com/in/hachemmy-jovenno-325149420/" target="_blank" rel="noreferrer">linkedin.com/in/hachemmy-jovenno-325149420</a></p>
              <p><FaGithub className="icon-item" /> <a href="https://github.com/Hachemmy/" target="_blank" rel="noreferrer">github/Hachemmy/</a></p>
              <p><FaGlobe className="icon-item" /> <a href="https://portfolio-hachemmy.vercel.app" target="_blank" rel="noreferrer">portfolio-hachemmy.vercel.app</a></p>
            </div>
          </section>

          <section>
            <h2>COMPÉTENCES</h2>
            <h3>Langages :</h3>
            <ul>
              <li><span className="skill-items"><span className="skill-item"><SiHtml5 title="HTML5" />HTML5</span><span className="skill-item"><SiCss title="CSS3" />CSS3</span><span className="skill-item"><SiC title="C" />C</span></span><span className="skill-level">Très bien</span></li>
              <li><span className="skill-items"><span className="skill-item"><SiJavascript title="JavaScript" />JavaScript</span><span className="skill-item"><SiPhp title="PHP" />PHP</span><span className="skill-item"><SiMysql title="SQL" />SQL</span><span className="skill-item"><SiCplusplus title="C++" />C++</span><span className="skill-item"><FaTerminal title="Shell" />Shell</span></span><span className="skill-level">Bien</span></li>
              <li><span className="skill-items"><span className="skill-item"><SiPython title="Python" />Python</span><span className="skill-item"><SiSharp title="C#" />C#</span><span className="skill-item"><FaJava title="Java" />Java</span></span><span className="skill-level">Notions</span></li>
            </ul>
            <h3>Réseaux TCP/IP :</h3>
            <ul>
              <li><FaNetworkWired className="skill-list-icon" />Adressage</li>
              <li><FaNetworkWired className="skill-list-icon" />VLAN</li>
              <li><FaNetworkWired className="skill-list-icon" />Routage RIP / OSPF</li>
              <li><FaNetworkWired className="skill-list-icon" />Serveur DHCP, DNS, LDAP, MAIL, WEB</li>
            </ul>
          </section>

          <section>
            <h2>LANGUE</h2>
            <div className="language">
              <div className="language-label"><b>Malagasy</b><span>Langue maternelle</span></div>
              <div className="language-bar"><i style={{ width: '100%' }} /></div>
            </div>
            <div className="language">
              <div className="language-label"><b>Français</b><span>Intermédiaire supérieur — B2</span></div>
              <div className="language-bar"><i style={{ width: '80%' }} /></div>
            </div>
            <div className="language">
              <div className="language-label"><b>Anglais</b><span>Intermédiaire</span></div>
              <div className="language-bar"><i style={{ width: '60%' }} /></div>
            </div>
            <div className="language">
              <div className="language-label"><b>Allemand</b><span>Notions</span></div>
              <div className="language-bar"><i style={{ width: '20%' }} /></div>
            </div>
          </section>

          <section>
            <h2>CENTRES D'INTÉRÊT</h2>
            <ul className="plain">
              <li>Basketball &amp; Football</li>
              <li>Bricolage &amp; circuit électrique</li>
              <li>Voyage et photographie</li>
              <li>Mécanique auto</li>
            </ul>
          </section>

          <section>
            <h2>QUALITÉS / ATOUTS</h2>
            <ul className="plain">
              <li>Facilitation de travail en équipe</li>
              <li>Sérieux, simple et motivé</li>
              <li>Intègre et honnête</li>
              <li>Résistant au stress et curiosité personnelle</li>
            </ul>
          </section>

        </aside>

        <article className="content">
          <header className="hero">
            <div className="hero-name">
              <h1>Hachemmy Jovenno<br /><span>RAZAFINTIAMASY</span></h1>
            </div>
            <div className="hero-qr">
              <img src={qrcode} alt="QR code du portfolio" />
              <a href="https://portfolio-hachemmy.vercel.app" target="_blank" rel="noreferrer">Portfolio</a>
            </div>
          </header>

          <section className="main-section">
            <h2>PROFIL PROFESSIONNEL</h2>
            <p>
              Administrateur Système et Réseau junior, issu d'un parcours informatique orienté projets.
              Compétences clés en réseaux TCP/IP (VLAN, routage RIP/OSPF) et en scripting / développement web
              (Shell, JavaScript, PHP).
            </p>
          </section>

          <section className="main-section">
            <h2>PARCOURS PROFESSIONNEL</h2>
            <TL idx={0} time="Août 2026" title="CTF de STARPWN" desc="Compétition Capture The Flag internationale, totalement en ligne." />
            <TL idx={1} time="Juillet 2026" title="Hackhunt (CTF) de ENI" badge="Certifié" desc="Compétition interne à l'E.N.I., ouverte à tous les niveaux, organisée pendant le DevHunt MegaEvent 2026." />
            <TL idx={2} time="Juillet 2026" title="DevHunt MegaEvent 2026" desc="Création de plateforme de partage, d'apprentissage et de gestion de projet (Flem'art)." />
            <TL idx={3} time="Mars 2025 - Actuel" title="Projet Académique - École Nationale d'Informatique (E.N.I.)" desc="Dynamisme Page Web (JS), freinage automatique (embarqué), messagerie (PHP), routage RIP/OSPF, monitoring de stockage (React.js) et serveurs DHCP, DNS, LDAP, MAIL, WEB." />
            <TL idx={4} time="Juin 2025" title="Développeur Front-end - DevHunt 5.0 (E.N.I.)" />
            <TL idx={5} time="Mars 2025" title="Développeur Front-end - DevHunt 4.0 (E.N.I.)" badge="3ème place" />
          </section>

          <section className="main-section">
            <h2>FORMATION</h2>
            <TL idx={6} time="01/2026 - Actuel" title="Licence Professionnelle II : Informatique" desc="École Nationale d'Informatique (E.N.I.), Fianarantsoa" />
            <TL idx={7} time="04/2026 - 05/2026" title="Attestation de Fin de Formation" desc="Création de solutions IoT utiles et connectées & Risque zéro, sécuriser vos projets — Orange Digital Center (O.D.C.), Fianarantsoa" />
            <TL idx={8} time="07/2025 - 08/2025" title="Réseau Pro : Réseau & système" desc="Spray-Info, Fianarantsoa" />
            <TL idx={9} time="10/2024 - 11/2024" title="Diplôme d'Études en Langue Française (DELF)" desc="Alliance Française, Mahajanga — Niveau B2" />
            <TL idx={10} time="12/2023 - 08/2024" title="Licence Professionnelle I : Informatique" desc="ESSGAM, Mahajanga" />
            <TL idx={11} time="08/2023" title="Baccalauréat" desc="Lycée Montfort Saint Gabriel, Mahajanga — Mention Bien" />
          </section>
        </article>
      </main>
    </div>
  );
}

export default App;