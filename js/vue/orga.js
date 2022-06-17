Vue.component('orga', {
    name: 'orga',
    template: `<div>
    <h1>RDH-Festival <br><small>Est. MMXIV</small></h1>
    <article>
        <h3>Organistorisches</h3>
        <p>
            <h4>Glas/Hartplastik-Stamperl</h4>
            Wie auf jedem Festival sind Glasflaschen/Glasbehältnisse verboten. Leider müssen auch wir davon Abstand nehmen, da die Wiesen und das gemähte Gras nach dem Festival wiederverwendet wird. Bitte berücksichtigt dies bei euren Vorbereitungen.
        </p>
        <p>
            <h4>Mülltrennung</h4>
            Die Müllentsorgung wird mit zunehmender Teilnehmerzahl immer mehr zu einem Problem. Daher werden heuer Müllständer für Restmüll und Plastikmüll aufgestellt. (Bitte benutzt diese auch. Dies wird uns beim Abbau enorme Zeit und Kosten sparen.)
        </p>
    </article>
    <article>
        <h3>Vorhandenes</h3>
        <section>
            <h4>Verpflegung</h4>
            <ul>
                <li>Küchenzelt</li>
                <ul>
                    <li>Kaffeemaschine</li>
                    <li>3x Kühlschrank (für verderbliche Lebensmittel)</li>
                    <li>Smoker</li>
                    <li>Herdplatten</li>
                </ul>
                <li>Schwenkgrill</li>
                <li>Kohle für Grill</li>
            </ul>
        </section>

        <section>
            <h4>Sanitäranlagen</h4>
            <ul>
                <li>2x Dixiklo</li>
                <li>Dusche (wird heuer erweitert mit Sichtschutz, Ablagen für Kleidung, Waschbecken, Spiegel und ggf. auch warmen Wasser)</li>
                <li>Pool (beheizt)</li>
            </ul>
        </section>

        <section>
            <h4>Unterhaltung</h4>
            <ul>
                <li @click="switchContent('lineup')">Band Lineup</li>
                <li>Merch-Stand (5-Jahres T-Shirts, auf Bestellung)</li>
            </ul>
        </section>

        <section>
            <h4>Allgemeines</h4>
            <ul>
                <li>Großes Zelt</li>
                <li>Sitzgelegenheiten</li>
                <li>Strom</li>
            </ul>
        </section>
    </article>
    <article>
        <h3>Flunkyball Turnier</h3>
        <p>
        Start des Turniers ist am <strong>Freitag</strong> um <strong> 16:00 Uhr</strong>. Anmeldungen sind bis <strong>Freitag</strong> um <strong>15:45 Uhr</strong> möglich.
        </p>
    </article>
    <article>
    <h3>Datenschutz</h3>
        <p>
            Da viele von uns mittlerweile einen festen Beruf ausüben und Fotos, Videos etc bei einigen von uns Probleme herbeiführen können, ist es heuer nicht gestattet Fotos, Videos oder dergleichen, ohne deren Einverständnis zu veröffentlichen oder zu posten (Whatsapp/Gruppen,
            Facebook, Instagram, etc.), auch werden all diejenigen aus der Hauptgruppe für die Festival-Zeit entfernt die nicht zusagen (keine Angst: Ihr werdet jedoch für die Vorplanungen für 2020 wieder hinzugefügt).
        </p>
        <p>
            Des Weiteren werden wir immer mehr Leute, was natürlich zu Interessenskonflikten etc. führen kann. Das RDH-Festival findet ausschließlich privat statt und läuft unter Geschlossene Gesellschaft. Jegliche Gewalt, mutwillige Beschädigung anderen Eigentums
            oder ähnliches, wollen wir nicht haben und wird dahingehend geahndet (könnt am nächsten Tag heimfahren).
        </p>
        <p>
            Somit können wir wieder ein Super-Wochenende mit Grillen, Party, guter Musik und einfach guten Leuten zusammen organisieren und feiern. Dies nun schon seit 5 Jahren.
        </p>
    </article>
</div>`
})