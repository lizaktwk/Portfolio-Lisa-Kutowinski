import "./Footer.scss";
import { useState } from "react";

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showDatenschutz, setShowDatenschutz] = useState(false);
  return (
    <div className="footer">
      <div className="impressum">
        <h2>Imprint</h2>
        <section className="contact-information">
          <div>
            <p>Lisa Kutowinski</p>
            <p>Erlenweg 26</p>
            <p>75175 Pforzheim</p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>Phone: 00491639630139</p>
            <p>E-Mail: lisa.ktwk@gmail.com</p>
          </div>
        </section>
        <section className="privacy-policy">
          <button
            className="privacyButton"
            onClick={() => setShowDatenschutz(!showDatenschutz)}
          >
            {showDatenschutz
              ? "Datenschutzerklärung verbergen"
              : "Datenschutzerklärung anzeigen"}
          </button>
          <button
            className="privacyButton"
            onClick={() => setShowPrivacy(!showPrivacy)}
          >
            {showPrivacy ? "Hide Privacy Policy" : "Show Privacy Policy"}
          </button>
          <div>
            Source: <a href="https://www.e-recht24.de">e-recht24.de</a>
          </div>

          {showDatenschutz && (
            <div className="impressum-content">
              <h1>Datenschutz&shy;erkl&auml;rung</h1>
              <h2>1. Datenschutz auf einen Blick</h2>
              <h3>Allgemeine Hinweise</h3>{" "}
              <p>
                Die folgenden Hinweise geben einen einfachen &Uuml;berblick
                dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert,
                wenn Sie diese Website besuchen. Personenbezogene Daten sind
                alle Daten, mit denen Sie pers&ouml;nlich identifiziert werden
                k&ouml;nnen. Ausf&uuml;hrliche Informationen zum Thema
                Datenschutz entnehmen Sie unserer unter diesem Text
                aufgef&uuml;hrten Datenschutzerkl&auml;rung.
              </p>
              <br />
              <h3>Datenerfassung auf dieser Website</h3>{" "}
              <h4>
                Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser
                Website?
              </h4>{" "}
              <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den
                Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem
                Abschnitt &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo; in
                dieser Datenschutzerkl&auml;rung entnehmen.
              </p>{" "}
              <br />
              <h4>Wie erfassen wir Ihre Daten?</h4>{" "}
              <p>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die
                Sie in ein Kontaktformular eingeben.
              </p>{" "}
              <p>
                Andere Daten werden automatisch oder nach Ihrer Einwilligung
                beim Besuch der Website durch unsere IT-Systeme erfasst. Das
                sind vor allem technische Daten (z.&nbsp;B. Internetbrowser,
                Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung
                dieser Daten erfolgt automatisch, sobald Sie diese Website
                betreten.
              </p>{" "}
              <br />
              <h4>Wof&uuml;r nutzen wir Ihre Daten?</h4>{" "}
              <p>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie
                Bereitstellung der Website zu gew&auml;hrleisten. Andere Daten
                k&ouml;nnen zur Analyse Ihres Nutzerverhaltens verwendet werden.
                Sofern &uuml;ber die Website Vertr&auml;ge geschlossen oder
                angebahnt werden k&ouml;nnen, werden die &uuml;bermittelten
                Daten auch f&uuml;r Vertragsangebote, Bestellungen oder sonstige
                Auftragsanfragen verarbeitet.
              </p>{" "}
              <br />
              <h4>Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?</h4>
              <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber
                Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten
                personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem
                ein Recht, die Berichtigung oder L&ouml;schung dieser Daten zu
                verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung
                erteilt haben, k&ouml;nnen Sie diese Einwilligung jederzeit
                f&uuml;r die Zukunft widerrufen. Au&szlig;erdem haben Sie das
                Recht, unter bestimmten Umst&auml;nden die Einschr&auml;nkung
                der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des
                Weiteren steht Ihnen ein Beschwerderecht bei der
                zust&auml;ndigen Aufsichtsbeh&ouml;rde zu.
              </p>{" "}
              <p>
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz
                k&ouml;nnen Sie sich jederzeit an uns wenden.
              </p>
              <br />
              <h3>Analyse-Tools und Tools von Dritt&shy;anbietern</h3>{" "}
              <p>
                Beim Besuch dieser Website kann Ihr Surf- Verhalten statistisch
                ausgewertet werden. Das geschieht vor allem mit sogenannten
                Analyseprogrammen.
              </p>
              <p>
                Detaillierte Informationen zu diesen Analyseprogrammen finden
                Sie in der folgenden Datenschutzerkl&auml;rung.
              </p>
              <br />
              <h2>2. Hosting</h2>
              <p>
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>
              <br />
              <h3>Externes Hosting</h3>{" "}
              <p>
                Diese Website wird extern gehostet. Die personenbezogenen Daten,
                die auf dieser Website erfasst werden, werden auf den Servern
                des Hosters / der Hoster gespeichert. Hierbei kann es sich
                v.&nbsp;a. um IP-Adressen, Kontaktanfragen, Meta- und
                Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
                Websitezugriffe und sonstige Daten, die &uuml;ber eine Website
                generiert werden, handeln.
              </p>{" "}
              <p>
                Das externe Hosting erfolgt zum Zwecke der
                Vertragserf&uuml;llung gegen&uuml;ber unseren potenziellen und
                bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse
                einer sicheren, schnellen und effizienten Bereitstellung unseres
                Online-Angebots durch einen professionellen Anbieter (Art. 6
                Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung
                abgefragt wurde, erfolgt die Verarbeitung ausschlie&szlig;lich
                auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs.
                1 TDDDG, soweit die Einwilligung die Speicherung von Cookies
                oder den Zugriff auf Informationen im Endger&auml;t des Nutzers
                (z.&nbsp;B. Device-Fingerprinting) im Sinne des TDDDG umfasst.
                Die Einwilligung ist jederzeit widerrufbar.
              </p>{" "}
              <p>
                Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit
                verarbeiten, wie dies zur Erf&uuml;llung seiner
                Leistungspflichten erforderlich ist und unsere Weisungen in
                Bezug auf diese Daten befolgen.
              </p>{" "}
              <p>Wir setzen folgende(n) Hoster ein:</p>
              <p>
                Hosting &uuml;ber GitHub Pages
                <br />
                <br />
                Meine Website wird bei GitHub Pages gehostet. Anbieter ist die
                GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA
                94107, USA.
                <br />
                GitHub speichert beim Aufruf der Seite automatisch Logfiles,
                darunter auch IP-Adressen der Besucher.
                <br />
                Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1
                lit. f DSGVO. Mein berechtigtes Interesse liegt in einer
                stabilen und sicheren Bereitstellung meiner Website.
                <br />
                Ein Auftragsverarbeitungsvertrag besteht nicht, da GitHub als
                eigenst&auml;ndig Verantwortlicher agiert.
              </p>
              <br />
              <h2>3. Allgemeine Hinweise und Pflicht&shy;informationen</h2>
              <h3>Datenschutz</h3>{" "}
              <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer
                pers&ouml;nlichen Daten sehr ernst. Wir behandeln Ihre
                personenbezogenen Daten vertraulich und entsprechend den
                gesetzlichen Datenschutzvorschriften sowie dieser
                Datenschutzerkl&auml;rung.
              </p>{" "}
              <p>
                Wenn Sie diese Website benutzen, werden verschiedene
                personenbezogene Daten erhoben. Personenbezogene Daten sind
                Daten, mit denen Sie pers&ouml;nlich identifiziert werden
                k&ouml;nnen. Die vorliegende Datenschutzerkl&auml;rung
                erl&auml;utert, welche Daten wir erheben und wof&uuml;r wir sie
                nutzen. Sie erl&auml;utert auch, wie und zu welchem Zweck das
                geschieht.
              </p>{" "}
              <p>
                Wir weisen darauf hin, dass die Daten&uuml;bertragung im
                Internet (z.&nbsp;B. bei der Kommunikation per E-Mail)
                Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser
                Schutz der Daten vor dem Zugriff durch Dritte ist nicht
                m&ouml;glich.
              </p>
              <br />
              <h3>Hinweis zur verantwortlichen Stelle</h3>{" "}
              <p>
                Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf
                dieser Website ist:
              </p>{" "}
              <p>
                Lisa Kutowinski
                <br />
                Erlenweg 26
                <br />
                75175 Pforzheim
              </p>
              <p>
                Telefon: 00491639630139
                <br />
                E-Mail: lisa.ktwk@gmail.com
              </p>
              <p>
                Verantwortliche Stelle ist die nat&uuml;rliche oder juristische
                Person, die allein oder gemeinsam mit anderen &uuml;ber die
                Zwecke und Mittel der Verarbeitung von personenbezogenen Daten
                (z.&nbsp;B. Namen, E-Mail- Adressen o. &Auml;.) entscheidet.
              </p>
              <br />
              <h3>Speicherdauer</h3>{" "}
              <p>
                Soweit innerhalb dieser Datenschutzerkl&auml;rung keine
                speziellere Speicherdauer genannt wurde, verbleiben Ihre
                personenbezogenen Daten bei uns, bis der Zweck f&uuml;r die
                Datenverarbeitung entf&auml;llt. Wenn Sie ein berechtigtes
                L&ouml;schersuchen geltend machen oder eine Einwilligung zur
                Datenverarbeitung widerrufen, werden Ihre Daten gel&ouml;scht,
                sofern wir keine anderen rechtlich zul&auml;ssigen Gr&uuml;nde
                f&uuml;r die Speicherung Ihrer personenbezogenen Daten haben
                (z.&nbsp;B. steuer- oder handelsrechtliche
                Aufbewahrungsfristen); im letztgenannten Fall erfolgt die
                L&ouml;schung nach Fortfall dieser Gr&uuml;nde.
              </p>
              <br />
              <h3>
                Allgemeine Hinweise zu den Rechtsgrundlagen der
                Datenverarbeitung auf dieser Website
              </h3>{" "}
              <p>
                Sofern Sie in die Datenverarbeitung eingewilligt haben,
                verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von
                Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO,
                sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO
                verarbeitet werden. Im Falle einer ausdr&uuml;cklichen
                Einwilligung in die &Uuml;bertragung personenbezogener Daten in
                Drittstaaten erfolgt die Datenverarbeitung au&szlig;erdem auf
                Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die
                Speicherung von Cookies oder in den Zugriff auf Informationen in
                Ihr Endger&auml;t (z.&nbsp;B. via Device-Fingerprinting)
                eingewilligt haben, erfolgt die Datenverarbeitung
                zus&auml;tzlich auf Grundlage von &sect; 25 Abs. 1 TDDDG. Die
                Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
                Vertragserf&uuml;llung oder zur Durchf&uuml;hrung
                vorvertraglicher Ma&szlig;nahmen erforderlich, verarbeiten wir
                Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des
                Weiteren verarbeiten wir Ihre Daten, sofern diese zur
                Erf&uuml;llung einer rechtlichen Verpflichtung erforderlich sind
                auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die
                Datenverarbeitung kann ferner auf Grundlage unseres berechtigten
                Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. &Uuml;ber
                die jeweils im Einzelfall einschl&auml;gigen Rechtsgrundlagen
                wird in den folgenden Abs&auml;tzen dieser
                Datenschutzerkl&auml;rung informiert.
              </p>
              <br />
              <h3>Empf&auml;nger von personenbezogenen Daten</h3>{" "}
              <p>
                Im Rahmen unserer Gesch&auml;ftst&auml;tigkeit arbeiten wir mit
                verschiedenen externen Stellen zusammen. Dabei ist teilweise
                auch eine &Uuml;bermittlung von personenbezogenen Daten an diese
                externen Stellen erforderlich. Wir geben personenbezogene Daten
                nur dann an externe Stellen weiter, wenn dies im Rahmen einer
                Vertragserf&uuml;llung erforderlich ist, wenn wir gesetzlich
                hierzu verpflichtet sind (z.&nbsp;B. Weitergabe von Daten an
                Steuerbeh&ouml;rden), wenn wir ein berechtigtes Interesse nach
                Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn
                eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim
                Einsatz von Auftragsverarbeitern geben wir personenbezogene
                Daten unserer Kunden nur auf Grundlage eines g&uuml;ltigen
                Vertrags &uuml;ber Auftragsverarbeitung weiter. Im Falle einer
                gemeinsamen Verarbeitung wird ein Vertrag &uuml;ber gemeinsame
                Verarbeitung geschlossen.
              </p>
              <br />
              <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>{" "}
              <p>
                Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer
                ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen
                eine bereits erteilte Einwilligung jederzeit widerrufen. Die
                Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten
                Datenverarbeitung bleibt vom Widerruf unber&uuml;hrt.
              </p>
              <br />
              <h3>
                Widerspruchsrecht gegen die Datenerhebung in besonderen
                F&auml;llen sowie gegen Direktwerbung (Art. 21 DSGVO)
              </h3>{" "}
              <p>
                WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT.
                E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS
                GR&Uuml;NDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN,
                GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH
                EINZULEGEN; DIES GILT AUCH F&Uuml;R EIN AUF DIESE BESTIMMUNGEN
                GEST&Uuml;TZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF
                DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER
                DATENSCHUTZERKL&Auml;RUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN
                WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR
                VERARBEITEN, ES SEI DENN, WIR K&Ouml;NNEN ZWINGENDE
                SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R DIE VERARBEITUNG
                NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN
                &Uuml;BERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG,
                AUS&Uuml;BUNG ODER VERTEIDIGUNG VON RECHTSANSPR&Uuml;CHEN
                (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
              </p>{" "}
              <p>
                WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM
                DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT
                WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER
                PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG
                EINZULEGEN; DIES GILT AUCH F&Uuml;R DAS PROFILING, SOWEIT ES MIT
                SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE
                WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND
                NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH
                NACH ART. 21 ABS. 2 DSGVO).
              </p>
              <br />
              <h3>
                Beschwerde&shy;recht bei der zust&auml;ndigen
                Aufsichts&shy;beh&ouml;rde
              </h3>{" "}
              <p>
                Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den
                Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh&ouml;rde,
                insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen
                Aufenthalts, ihres Arbeitsplatzes oder des Orts des
                mutma&szlig;lichen Versto&szlig;es zu. Das Beschwerderecht
                besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
                gerichtlicher Rechtsbehelfe.
              </p>
              <br />
              <h3>Recht auf Daten&shy;&uuml;bertrag&shy;barkeit</h3>{" "}
              <p>
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
                Einwilligung oder in Erf&uuml;llung eines Vertrags automatisiert
                verarbeiten, an sich oder an einen Dritten in einem
                g&auml;ngigen, maschinenlesbaren Format aush&auml;ndigen zu
                lassen. Sofern Sie die direkte &Uuml;bertragung der Daten an
                einen anderen Verantwortlichen verlangen, erfolgt dies nur,
                soweit es technisch machbar ist.
              </p>
              <br />
              <h3>Auskunft, Berichtigung und L&ouml;schung</h3>{" "}
              <p>
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
                jederzeit das Recht auf unentgeltliche Auskunft &uuml;ber Ihre
                gespeicherten personenbezogenen Daten, deren Herkunft und
                Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein
                Recht auf Berichtigung oder L&ouml;schung dieser Daten. Hierzu
                sowie zu weiteren Fragen zum Thema personenbezogene Daten
                k&ouml;nnen Sie sich jederzeit an uns wenden.
              </p>
              <br />
              <h3>Recht auf Einschr&auml;nkung der Verarbeitung</h3>{" "}
              <p>
                Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung
                Ihrer personenbezogenen Daten zu verlangen. Hierzu k&ouml;nnen
                Sie sich jederzeit an uns wenden. Das Recht auf
                Einschr&auml;nkung der Verarbeitung besteht in folgenden
                F&auml;llen:
              </p>{" "}
              <ul>
                {" "}
                <li>
                  Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
                  personenbezogenen Daten bestreiten, ben&ouml;tigen wir in der
                  Regel Zeit, um dies zu &uuml;berpr&uuml;fen. F&uuml;r die
                  Dauer der Pr&uuml;fung haben Sie das Recht, die
                  Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen
                  Daten zu verlangen.
                </li>{" "}
                <li>
                  Wenn die Verarbeitung Ihrer personenbezogenen Daten
                  unrechtm&auml;&szlig;ig geschah/geschieht, k&ouml;nnen Sie
                  statt der L&ouml;schung die Einschr&auml;nkung der
                  Datenverarbeitung verlangen.
                </li>{" "}
                <li>
                  Wenn wir Ihre personenbezogenen Daten nicht mehr
                  ben&ouml;tigen, Sie sie jedoch zur Aus&uuml;bung, Verteidigung
                  oder Geltendmachung von Rechtsanspr&uuml;chen ben&ouml;tigen,
                  haben Sie das Recht, statt der L&ouml;schung die
                  Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen
                  Daten zu verlangen.
                </li>{" "}
                <li>
                  Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
                  haben, muss eine Abw&auml;gung zwischen Ihren und unseren
                  Interessen vorgenommen werden. Solange noch nicht feststeht,
                  wessen Interessen &uuml;berwiegen, haben Sie das Recht, die
                  Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen
                  Daten zu verlangen.
                </li>{" "}
              </ul>
              <p>
                Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
                eingeschr&auml;nkt haben, d&uuml;rfen diese Daten &ndash; von
                ihrer Speicherung abgesehen &ndash; nur mit Ihrer Einwilligung
                oder zur Geltendmachung, Aus&uuml;bung oder Verteidigung von
                Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen
                nat&uuml;rlichen oder juristischen Person oder aus Gr&uuml;nden
                eines wichtigen &ouml;ffentlichen Interesses der
                Europ&auml;ischen Union oder eines Mitgliedstaats verarbeitet
                werden.
              </p>
              <br />
              <h3>SSL- bzw. TLS-Verschl&uuml;sselung</h3>{" "}
              <p>
                Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der
                &Uuml;bertragung vertraulicher Inhalte, wie zum Beispiel
                Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber
                senden, eine SSL- bzw. TLS-Verschl&uuml;sselung. Eine
                verschl&uuml;sselte Verbindung erkennen Sie daran, dass die
                Adresszeile des Browsers von &bdquo;http://&ldquo; auf
                &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in
                Ihrer Browserzeile.
              </p>{" "}
              <p>
                Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist,
                k&ouml;nnen die Daten, die Sie an uns &uuml;bermitteln, nicht
                von Dritten mitgelesen werden.
              </p>
              <br />
              <h3>Widerspruch gegen Werbe-E-Mails</h3>{" "}
              <p>
                Der Nutzung von im Rahmen der Impressumspflicht
                ver&ouml;ffentlichten Kontaktdaten zur &Uuml;bersendung von
                nicht ausdr&uuml;cklich angeforderter Werbung und
                Informationsmaterialien wird hiermit widersprochen. Die
                Betreiber der Seiten behalten sich ausdr&uuml;cklich rechtliche
                Schritte im Falle der unverlangten Zusendung von
                Werbeinformationen, etwa durch Spam-E-Mails, vor.
              </p>
              <br />
              <h2>4. Datenerfassung auf dieser Website</h2>
              <br />
              <h3>Cookies</h3>{" "}
              <p>
                Unsere Internetseiten verwenden so genannte
                &bdquo;Cookies&ldquo;. Cookies sind kleine Datenpakete und
                richten auf Ihrem Endger&auml;t keinen Schaden an. Sie werden
                entweder vor&uuml;bergehend f&uuml;r die Dauer einer Sitzung
                (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem
                Endger&auml;t gespeichert. Session-Cookies werden nach Ende
                Ihres Besuchs automatisch gel&ouml;scht. Permanente Cookies
                bleiben auf Ihrem Endger&auml;t gespeichert, bis Sie diese
                selbst l&ouml;schen oder eine automatische L&ouml;schung durch
                Ihren Webbrowser erfolgt.
              </p>{" "}
              <p>
                Cookies k&ouml;nnen von uns (First-Party-Cookies) oder von
                Drittunternehmen stammen (sog. Third-Party-Cookies).
                Third-Party-Cookies erm&ouml;glichen die Einbindung bestimmter
                Dienstleistungen von Drittunternehmen innerhalb von Webseiten
                (z.&nbsp;B. Cookies zur Abwicklung von
                Zahlungsdienstleistungen).
              </p>{" "}
              <p>
                Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind
                technisch notwendig, da bestimmte Webseitenfunktionen ohne diese
                nicht funktionieren w&uuml;rden (z.&nbsp;B. die
                Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies
                k&ouml;nnen zur Auswertung des Nutzerverhaltens oder zu
                Werbezwecken verwendet werden.
              </p>{" "}
              <p>
                Cookies, die zur Durchf&uuml;hrung des elektronischen
                Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen
                erw&uuml;nschter Funktionen (z.&nbsp;B. f&uuml;r die
                Warenkorbfunktion) oder zur Optimierung der Website (z.&nbsp;B.
                Cookies zur Messung des Webpublikums) erforderlich sind
                (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1
                lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage
                angegeben wird. Der Websitebetreiber hat ein berechtigtes
                Interesse an der Speicherung von notwendigen Cookies zur
                technisch fehlerfreien und optimierten Bereitstellung seiner
                Dienste. Sofern eine Einwilligung zur Speicherung von Cookies
                und vergleichbaren Wiedererkennungstechnologien abgefragt wurde,
                erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage
                dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und &sect; 25
                Abs. 1 TDDDG); die Einwilligung ist jederzeit widerrufbar.
              </p>
              <p>
                Sie k&ouml;nnen Ihren Browser so einstellen, dass Sie &uuml;ber
                das Setzen von Cookies informiert werden und Cookies nur im
                Einzelfall erlauben, die Annahme von Cookies f&uuml;r bestimmte
                F&auml;lle oder generell ausschlie&szlig;en sowie das
                automatische L&ouml;schen der Cookies beim Schlie&szlig;en des
                Browsers aktivieren. Bei der Deaktivierung von Cookies kann die
                Funktionalit&auml;t dieser Website eingeschr&auml;nkt sein.
              </p>
              <p>
                Welche Cookies und Dienste auf dieser Website eingesetzt werden,
                k&ouml;nnen Sie dieser Datenschutzerkl&auml;rung entnehmen.
              </p>
              <br />
              <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>{" "}
              <p>
                Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird
                Ihre Anfrage inklusive aller daraus hervorgehenden
                personenbezogenen Daten (Name, Anfrage) zum Zwecke der
                Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>{" "}
              <p>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erf&uuml;llung
                eines Vertrags zusammenh&auml;ngt oder zur Durchf&uuml;hrung
                vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen
                &uuml;brigen F&auml;llen beruht die Verarbeitung auf unserem
                berechtigten Interesse an der effektiven Bearbeitung der an uns
                gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
                Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
                wurde; die Einwilligung ist jederzeit widerrufbar.
              </p>{" "}
              <p>
                Die von Ihnen an uns per Kontaktanfragen &uuml;bersandten Daten
                verbleiben bei uns, bis Sie uns zur L&ouml;schung auffordern,
                Ihre Einwilligung zur Speicherung widerrufen oder der Zweck
                f&uuml;r die Datenspeicherung entf&auml;llt (z.&nbsp;B. nach
                abgeschlossener Bearbeitung Ihres Anliegens). Zwingende
                gesetzliche Bestimmungen &ndash; insbesondere gesetzliche
                Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.
              </p>
              <br />
              <h2>5. Plugins und Tools</h2>
              <br />
              <h3>YouTube</h3>{" "}
              <p>
                Diese Website bindet Videos der Website YouTube ein. Betreiber
                der Website ist die Google Ireland Limited
                (&bdquo;Google&ldquo;), Gordon House, Barrow Street, Dublin 4,
                Irland.
              </p>{" "}
              <p>
                Wenn Sie eine unserer Webseiten besuchen, auf denen YouTube
                eingebunden ist, wird eine Verbindung zu den Servern von YouTube
                hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche
                unserer Seiten Sie besucht haben.
              </p>
              <p>
                Des Weiteren kann YouTube verschiedene Cookies auf Ihrem
                Endger&auml;t speichern oder vergleichbare Technologien zur
                Wiedererkennung verwenden (z.&nbsp;B. Device-Fingerprinting).
                Auf diese Weise kann YouTube Informationen &uuml;ber Besucher
                dieser Website erhalten. Diese Informationen werden u.&nbsp;a.
                verwendet, um Videostatistiken zu erfassen, die
                Anwenderfreundlichkeit zu verbessern und Betrugsversuchen
                vorzubeugen. Des Weiteren werden die erfassten Daten im
                Google-Werbenetzwerk verarbeitet.
              </p>{" "}
              <p>
                Wenn Sie in Ihrem YouTube-Account eingeloggt sind,
                erm&ouml;glichen Sie YouTube, Ihr Surfverhalten direkt Ihrem
                pers&ouml;nlichen Profil zuzuordnen. Dies k&ouml;nnen Sie
                verhindern, indem Sie sich aus Ihrem YouTube-Account ausloggen.
              </p>{" "}
              <p>
                Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden
                Darstellung unserer Online- Angebote. Dies stellt ein
                berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO
                dar. Sofern eine entsprechende Einwilligung abgefragt wurde,
                erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage von
                Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1 TDDDG, soweit
                die Einwilligung die Speicherung von Cookies oder den Zugriff
                auf Informationen im Endger&auml;t des Nutzers (z.&nbsp;B.
                Device-Fingerprinting) im Sinne des TDDDG umfasst. Die
                Einwilligung ist jederzeit widerrufbar.
              </p>{" "}
              <p>
                Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in
                der Datenschutzerkl&auml;rung von YouTube unter:{" "}
                <a
                  href="https://policies.google.com/privacy?hl=de"
                  target="_blank"
                  rel="noopener
noreferrer"
                >
                  https://policies.google.com/privacy?hl=de
                </a>
                .
              </p>
              <p>
                Das Unternehmen verf&uuml;gt &uuml;ber eine Zertifizierung nach
                dem &bdquo;EU-US Data Privacy Framework&ldquo; (DPF). Der DPF
                ist ein &Uuml;bereinkommen zwischen der Europ&auml;ischen Union
                und den USA, der die Einhaltung europ&auml;ischer
                Datenschutzstandards bei Datenverarbeitungen in den USA
                gew&auml;hrleisten soll. Jedes nach dem DPF zertifizierte
                Unternehmen verpflichtet sich, diese Datenschutzstandards
                einzuhalten. Weitere Informationen hierzu erhalten Sie vom
                Anbieter unter folgendem Link:
                <a
                  href="https://www.dataprivacyframework.gov/participant/5780"
                  target="_blank"
                  rel="noopener
noreferrer"
                >
                  https://www.dataprivacyframework.gov/participant/5780
                </a>
                .
              </p>
              <br />
              <h3>Google Fonts</h3>{" "}
              <p>
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten
                so genannte Google Fonts, die von Google bereitgestellt werden.
                Beim Aufruf einer Seite l&auml;dt Ihr Browser die
                ben&ouml;tigten Fonts in ihren Browsercache, um Texte und
                Schriftarten korrekt anzuzeigen.
              </p>{" "}
              <p>
                Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung
                zu den Servern von Google aufnehmen. Hierdurch erlangt Google
                Kenntnis dar&uuml;ber, dass &uuml;ber Ihre IP-Adresse diese
                Website aufgerufen wurde. Die Nutzung von Google Fonts erfolgt
                auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
                Websitebetreiber hat ein berechtigtes Interesse an der
                einheitlichen Darstellung des Schriftbildes auf seiner Website.
                Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt
                die Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6
                Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1 TDDDG, soweit die
                Einwilligung die Speicherung von Cookies oder den Zugriff auf
                Informationen im Endger&auml;t des Nutzers (z.&nbsp;B.
                Device-Fingerprinting) im Sinne des TDDDG umfasst. Die
                Einwilligung ist jederzeit widerrufbar.
              </p>{" "}
              <p>
                Wenn Ihr Browser Google Fonts nicht unterst&uuml;tzt, wird eine
                Standardschrift von Ihrem Computer genutzt.
              </p>{" "}
              <p>
                Weitere Informationen zu Google Fonts finden Sie unter{" "}
                <a
                  href="https://developers.google.com/fonts/faq"
                  target="_blank"
                  rel="noopener
noreferrer"
                >
                  https://developers.google.com/fonts/faq
                </a>{" "}
                und in der Datenschutzerkl&auml;rung von Google:{" "}
                <a
                  href="https://policies.google.com/privacy?hl=de"
                  target="_blank"
                  rel="noopener
noreferrer"
                >
                  https://policies.google.com/privacy?hl=de
                </a>
                .
              </p>
              <p>
                Das Unternehmen verf&uuml;gt &uuml;ber eine Zertifizierung nach
                dem &bdquo;EU-US Data Privacy Framework&ldquo; (DPF). Der DPF
                ist ein &Uuml;bereinkommen zwischen der Europ&auml;ischen Union
                und den USA, der die Einhaltung europ&auml;ischer
                Datenschutzstandards bei Datenverarbeitungen in den USA
                gew&auml;hrleisten soll. Jedes nach dem DPF zertifizierte
                Unternehmen verpflichtet sich, diese Datenschutzstandards
                einzuhalten. Weitere Informationen hierzu erhalten Sie vom
                Anbieter unter folgendem Link:
                <a
                  href="https://www.dataprivacyframework.gov/participant/5780"
                  target="_blank"
                  rel="noopener
noreferrer"
                >
                  https://www.dataprivacyframework.gov/participant/5780
                </a>
                .
              </p>
              <p>
                Quelle:{" "}
                <a href="https://www.e-recht24.de">https://www.e-recht24.de</a>
              </p>
              <br />
              <h3>Adobe Fonts (vormals Typekit)</h3>
              <p>
                Auf dieser Website werden Webfonts von{" "}
                <strong>Adobe Fonts</strong> verwendet. Adobe Fonts ist ein
                Dienst der
                <em>Adobe Systems Incorporated</em> (Adobe Systems Software
                Ireland Limited, 4-6 Riverwalk, Citywest Business Campus, Dublin
                24, Irland).
              </p>
              <p>
                Beim Aufruf dieser Website lädt Ihr Browser die benötigten
                Webfonts direkt von Adobe, um Texte und Schriftarten korrekt
                anzuzeigen. Dabei wird Ihre IP-Adresse an Adobe übermittelt.
                Nach Angaben von Adobe werden dabei keine Cookies gesetzt oder
                Nutzerprofile erstellt.
              </p>
              <p>
                Die Nutzung von Adobe Fonts erfolgt auf Grundlage von Art. 6
                Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt in einer
                einheitlichen und ansprechenden Darstellung unserer Website.
              </p>
              <p>
                Weitere Informationen finden Sie in der Datenschutzerklärung von
                Adobe:
                <a
                  href="https://www.adobe.com/de/privacy/policies/adobe-fonts.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.adobe.com/de/privacy/policies/adobe-fonts.html
                </a>
              </p>
            </div>
          )}

          {showPrivacy && (
            <div className="impressum-content">
              <h1>Privacy Policy</h1>
              <p>Last updated: May 30, 2025</p>
              <p>
                This Privacy Policy describes Our policies and procedures on the
                collection, use and disclosure of Your information when You use
                the Service and tells You about Your privacy rights and how the
                law protects You.
              </p>
              <p>
                We use Your Personal data to provide and improve the Service. By
                using the Service, You agree to the collection and use of
                information in accordance with this Privacy Policy. This Privacy
                Policy has been created with the help of the{" "}
                <a
                  href="https://www.privacypolicies.com/privacy-policy-generator/"
                  target="_blank"
                >
                  Privacy Policy Generator
                </a>
                .
              </p>
              <h2>Interpretation and Definitions</h2>
              <h3>Interpretation</h3>
              <p>
                The words of which the initial letter is capitalized have
                meanings defined under the following conditions. The following
                definitions shall have the same meaning regardless of whether
                they appear in singular or in plural.
              </p>
              <h3>Definitions</h3>
              <p>For the purposes of this Privacy Policy:</p>
              <ul>
                <li>
                  <p>
                    <strong>Account</strong> means a unique account created for
                    You to access our Service or parts of our Service.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Affiliate</strong> means an entity that controls, is
                    controlled by or is under common control with a party, where
                    &quot;control&quot; means ownership of 50% or more of the
                    shares, equity interest or other securities entitled to vote
                    for election of directors or other managing authority.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Company</strong> (referred to as either &quot;the
                    Company&quot;, &quot;We&quot;, &quot;Us&quot; or
                    &quot;Our&quot; in this Agreement) refers to lizaktwk.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Cookies</strong> are small files that are placed on
                    Your computer, mobile device or any other device by a
                    website, containing the details of Your browsing history on
                    that website among its many uses.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Country</strong> refers to: Baden-Württemberg,
                    Germany
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Device</strong> means any device that can access the
                    Service such as a computer, a cellphone or a digital tablet.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Personal Data</strong> is any information that
                    relates to an identified or identifiable individual.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Service</strong> refers to the Website.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Service Provider</strong> means any natural or legal
                    person who processes the data on behalf of the Company. It
                    refers to third-party companies or individuals employed by
                    the Company to facilitate the Service, to provide the
                    Service on behalf of the Company, to perform services
                    related to the Service or to assist the Company in analyzing
                    how the Service is used.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Usage Data</strong> refers to data collected
                    automatically, either generated by the use of the Service or
                    from the Service infrastructure itself (for example, the
                    duration of a page visit).
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Website</strong> refers to lizaktwk, accessible from{" "}
                    <a
                      href="https://lizaktwk.github.io/Portfolio/"
                      rel="external nofollow noopener"
                      target="_blank"
                    >
                      https://lizaktwk.github.io/Portfolio/
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>You</strong> means the individual accessing or using
                    the Service, or the company, or other legal entity on behalf
                    of which such individual is accessing or using the Service,
                    as applicable.
                  </p>
                </li>
              </ul>
              <h2>Collecting and Using Your Personal Data</h2>
              <h3>Types of Data Collected</h3>
              <h4>Personal Data</h4>
              <p>
                While using Our Service, We may ask You to provide Us with
                certain personally identifiable information that can be used to
                contact or identify You. Personally identifiable information may
                include, but is not limited to:
              </p>
              <ul>
                <li>Usage Data</li>
              </ul>
              <h4>Usage Data</h4>
              <p>
                Usage Data is collected automatically when using the Service.
              </p>
              <p>
                Usage Data may include information such as Your Device's
                Internet Protocol address (e.g. IP address), browser type,
                browser version, the pages of our Service that You visit, the
                time and date of Your visit, the time spent on those pages,
                unique device identifiers and other diagnostic data.
              </p>
              <p>
                When You access the Service by or through a mobile device, We
                may collect certain information automatically, including, but
                not limited to, the type of mobile device You use, Your mobile
                device unique ID, the IP address of Your mobile device, Your
                mobile operating system, the type of mobile Internet browser You
                use, unique device identifiers and other diagnostic data.
              </p>
              <p>
                We may also collect information that Your browser sends whenever
                You visit our Service or when You access the Service by or
                through a mobile device.
              </p>
              <h4>Tracking Technologies and Cookies</h4>
              <p>
                We use Cookies and similar tracking technologies to track the
                activity on Our Service and store certain information. Tracking
                technologies used are beacons, tags, and scripts to collect and
                track information and to improve and analyze Our Service. The
                technologies We use may include:
              </p>
              <ul>
                <li>
                  <strong>Cookies or Browser Cookies.</strong> A cookie is a
                  small file placed on Your Device. You can instruct Your
                  browser to refuse all Cookies or to indicate when a Cookie is
                  being sent. However, if You do not accept Cookies, You may not
                  be able to use some parts of our Service. Unless you have
                  adjusted Your browser setting so that it will refuse Cookies,
                  our Service may use Cookies.
                </li>
                <li>
                  <strong>Web Beacons.</strong> Certain sections of our Service
                  and our emails may contain small electronic files known as web
                  beacons (also referred to as clear gifs, pixel tags, and
                  single-pixel gifs) that permit the Company, for example, to
                  count users who have visited those pages or opened an email
                  and for other related website statistics (for example,
                  recording the popularity of a certain section and verifying
                  system and server integrity).
                </li>
              </ul>
              <p>
                Cookies can be &quot;Persistent&quot; or &quot;Session&quot;
                Cookies. Persistent Cookies remain on Your personal computer or
                mobile device when You go offline, while Session Cookies are
                deleted as soon as You close Your web browser. Learn more about
                cookies on the{" "}
                <a
                  href="https://www.privacypolicies.com/blog/privacy-policy-template/#Use_Of_Cookies_Log_Files_And_Tracking"
                  target="_blank"
                >
                  Privacy Policies website
                </a>{" "}
                article.
              </p>
              <p>
                We use both Session and Persistent Cookies for the purposes set
                out below:
              </p>
              <ul>
                <li>
                  <p>
                    <strong>Necessary / Essential Cookies</strong>
                  </p>
                  <p>Type: Session Cookies</p>
                  <p>Administered by: Us</p>
                  <p>
                    Purpose: These Cookies are essential to provide You with
                    services available through the Website and to enable You to
                    use some of its features. They help to authenticate users
                    and prevent fraudulent use of user accounts. Without these
                    Cookies, the services that You have asked for cannot be
                    provided, and We only use these Cookies to provide You with
                    those services.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Cookies Policy / Notice Acceptance Cookies</strong>
                  </p>
                  <p>Type: Persistent Cookies</p>
                  <p>Administered by: Us</p>
                  <p>
                    Purpose: These Cookies identify if users have accepted the
                    use of cookies on the Website.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Functionality Cookies</strong>
                  </p>
                  <p>Type: Persistent Cookies</p>
                  <p>Administered by: Us</p>
                  <p>
                    Purpose: These Cookies allow us to remember choices You make
                    when You use the Website, such as remembering your login
                    details or language preference. The purpose of these Cookies
                    is to provide You with a more personal experience and to
                    avoid You having to re-enter your preferences every time You
                    use the Website.
                  </p>
                </li>
              </ul>
              <p>
                For more information about the cookies we use and your choices
                regarding cookies, please visit our Cookies Policy or the
                Cookies section of our Privacy Policy.
              </p>
              <h3>Use of Your Personal Data</h3>
              <p>
                The Company may use Personal Data for the following purposes:
              </p>
              <ul>
                <li>
                  <p>
                    <strong>To provide and maintain our Service</strong>,
                    including to monitor the usage of our Service.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>To manage Your Account:</strong> to manage Your
                    registration as a user of the Service. The Personal Data You
                    provide can give You access to different functionalities of
                    the Service that are available to You as a registered user.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>For the performance of a contract:</strong> the
                    development, compliance and undertaking of the purchase
                    contract for the products, items or services You have
                    purchased or of any other contract with Us through the
                    Service.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>To contact You:</strong> To contact You by email,
                    telephone calls, SMS, or other equivalent forms of
                    electronic communication, such as a mobile application's
                    push notifications regarding updates or informative
                    communications related to the functionalities, products or
                    contracted services, including the security updates, when
                    necessary or reasonable for their implementation.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>To provide You</strong> with news, special offers
                    and general information about other goods, services and
                    events which we offer that are similar to those that you
                    have already purchased or enquired about unless You have
                    opted not to receive such information.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>To manage Your requests:</strong> To attend and
                    manage Your requests to Us.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>For business transfers:</strong> We may use Your
                    information to evaluate or conduct a merger, divestiture,
                    restructuring, reorganization, dissolution, or other sale or
                    transfer of some or all of Our assets, whether as a going
                    concern or as part of bankruptcy, liquidation, or similar
                    proceeding, in which Personal Data held by Us about our
                    Service users is among the assets transferred.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>For other purposes</strong>: We may use Your
                    information for other purposes, such as data analysis,
                    identifying usage trends, determining the effectiveness of
                    our promotional campaigns and to evaluate and improve our
                    Service, products, services, marketing and your experience.
                  </p>
                </li>
              </ul>
              <p>
                We may share Your personal information in the following
                situations:
              </p>
              <ul>
                <li>
                  <strong>With Service Providers:</strong> We may share Your
                  personal information with Service Providers to monitor and
                  analyze the use of our Service, to contact You.
                </li>
                <li>
                  <strong>For business transfers:</strong> We may share or
                  transfer Your personal information in connection with, or
                  during negotiations of, any merger, sale of Company assets,
                  financing, or acquisition of all or a portion of Our business
                  to another company.
                </li>
                <li>
                  <strong>With Affiliates:</strong> We may share Your
                  information with Our affiliates, in which case we will require
                  those affiliates to honor this Privacy Policy. Affiliates
                  include Our parent company and any other subsidiaries, joint
                  venture partners or other companies that We control or that
                  are under common control with Us.
                </li>
                <li>
                  <strong>With business partners:</strong> We may share Your
                  information with Our business partners to offer You certain
                  products, services or promotions.
                </li>
                <li>
                  <strong>With other users:</strong> when You share personal
                  information or otherwise interact in the public areas with
                  other users, such information may be viewed by all users and
                  may be publicly distributed outside.
                </li>
                <li>
                  <strong>With Your consent</strong>: We may disclose Your
                  personal information for any other purpose with Your consent.
                </li>
              </ul>
              <h3>Retention of Your Personal Data</h3>
              <p>
                The Company will retain Your Personal Data only for as long as
                is necessary for the purposes set out in this Privacy Policy. We
                will retain and use Your Personal Data to the extent necessary
                to comply with our legal obligations (for example, if we are
                required to retain your data to comply with applicable laws),
                resolve disputes, and enforce our legal agreements and policies.
              </p>
              <p>
                The Company will also retain Usage Data for internal analysis
                purposes. Usage Data is generally retained for a shorter period
                of time, except when this data is used to strengthen the
                security or to improve the functionality of Our Service, or We
                are legally obligated to retain this data for longer time
                periods.
              </p>
              <h3>Transfer of Your Personal Data</h3>
              <p>
                Your information, including Personal Data, is processed at the
                Company's operating offices and in any other places where the
                parties involved in the processing are located. It means that
                this information may be transferred to — and maintained on —
                computers located outside of Your state, province, country or
                other governmental jurisdiction where the data protection laws
                may differ than those from Your jurisdiction.
              </p>
              <p>
                Your consent to this Privacy Policy followed by Your submission
                of such information represents Your agreement to that transfer.
              </p>
              <p>
                The Company will take all steps reasonably necessary to ensure
                that Your data is treated securely and in accordance with this
                Privacy Policy and no transfer of Your Personal Data will take
                place to an organization or a country unless there are adequate
                controls in place including the security of Your data and other
                personal information.
              </p>
              <h3>Delete Your Personal Data</h3>
              <p>
                You have the right to delete or request that We assist in
                deleting the Personal Data that We have collected about You.
              </p>
              <p>
                Our Service may give You the ability to delete certain
                information about You from within the Service.
              </p>
              <p>
                You may update, amend, or delete Your information at any time by
                signing in to Your Account, if you have one, and visiting the
                account settings section that allows you to manage Your personal
                information. You may also contact Us to request access to,
                correct, or delete any personal information that You have
                provided to Us.
              </p>
              <p>
                Please note, however, that We may need to retain certain
                information when we have a legal obligation or lawful basis to
                do so.
              </p>
              <h3>Disclosure of Your Personal Data</h3>
              <h4>Business Transactions</h4>
              <p>
                If the Company is involved in a merger, acquisition or asset
                sale, Your Personal Data may be transferred. We will provide
                notice before Your Personal Data is transferred and becomes
                subject to a different Privacy Policy.
              </p>
              <h4>Law enforcement</h4>
              <p>
                Under certain circumstances, the Company may be required to
                disclose Your Personal Data if required to do so by law or in
                response to valid requests by public authorities (e.g. a court
                or a government agency).
              </p>
              <h4>Other legal requirements</h4>
              <p>
                The Company may disclose Your Personal Data in the good faith
                belief that such action is necessary to:
              </p>
              <ul>
                <li>Comply with a legal obligation</li>
                <li>
                  Protect and defend the rights or property of the Company
                </li>
                <li>
                  Prevent or investigate possible wrongdoing in connection with
                  the Service
                </li>
                <li>
                  Protect the personal safety of Users of the Service or the
                  public
                </li>
                <li>Protect against legal liability</li>
              </ul>
              <h3>Security of Your Personal Data</h3>
              <p>
                The security of Your Personal Data is important to Us, but
                remember that no method of transmission over the Internet, or
                method of electronic storage is 100% secure. While We strive to
                use commercially acceptable means to protect Your Personal Data,
                We cannot guarantee its absolute security.
              </p>
              <h2>Children's Privacy</h2>
              <p>
                Our Service does not address anyone under the age of 13. We do
                not knowingly collect personally identifiable information from
                anyone under the age of 13. If You are a parent or guardian and
                You are aware that Your child has provided Us with Personal
                Data, please contact Us. If We become aware that We have
                collected Personal Data from anyone under the age of 13 without
                verification of parental consent, We take steps to remove that
                information from Our servers.
              </p>
              <p>
                If We need to rely on consent as a legal basis for processing
                Your information and Your country requires consent from a
                parent, We may require Your parent's consent before We collect
                and use that information.
              </p>
              <h2>Links to Other Websites</h2>
              <p>
                Our Service may contain links to other websites that are not
                operated by Us. If You click on a third party link, You will be
                directed to that third party's site. We strongly advise You to
                review the Privacy Policy of every site You visit.
              </p>
              <p>
                We have no control over and assume no responsibility for the
                content, privacy policies or practices of any third party sites
                or services.
              </p>
              <h2>Changes to this Privacy Policy</h2>
              <p>
                We may update Our Privacy Policy from time to time. We will
                notify You of any changes by posting the new Privacy Policy on
                this page.
              </p>
              <p>
                We will let You know via email and/or a prominent notice on Our
                Service, prior to the change becoming effective and update the
                &quot;Last updated&quot; date at the top of this Privacy Policy.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for
                any changes. Changes to this Privacy Policy are effective when
                they are posted on this page.
              </p>
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, You can
                contact us:
              </p>
              <ul>
                <li>By email: lisa.ktwk@gmail.com</li>
              </ul>
            </div>
          )}
        </section>
        <section className="icon-tributes">
          Icon Links:
          <a href="https://www.flaticon.com/free-icons/eye" title="eye icons">
            Eye icons created by Gregor Cresnar - Flaticon
          </a>
          <a href="https://www.flaticon.com/free-icons/info" title="info icons">
            Info icons created by Freepik - Flaticon
          </a>
        </section>
      </div>
    </div>
  );
}
