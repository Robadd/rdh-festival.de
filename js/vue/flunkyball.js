Vue.component('flunkyball', {
    name: 'flunkyball',
    template: `<div>
    <img src="img/flunky/logo.jpg" alt="Offizielles Flunkyballlogo" class="container-fluid">
    <details>
        <summary class="h3">Inhaltsverzeichnis</summary>
        <ol>
            <li><a href="#1">Spielfeld</a>
                <ol>
                    <li><a href="#1.1">Spielunterlage</a></li>
                    <li><a href="#1.2">Abgrenzung</a></li>
                    <li><a href="#1.3">Abmessungen</a></li>
                    <li><a href="#1.4">Zuschauer-Zone</a></li>
                    <li><a href="#1.5">Flaschenplatz</a></li>
                    <li><a href="#1.6">Dosenplatz</a></li>
                </ol>
            </li>
            <li><a href="#2">Ball und Flasche</a>
                <ol>
                    <li><a href="#2.1">Eigenschaften und Abmessungen</a></li>
                    <li><a href="#2.2">Austausch eines beschädigten Balls</a></li>
                    <li><a href="#2.3">Zusätzliche Bälle (falls vorhanden)</a></li>
                </ol>
            </li>
            <li><a href="#3">Spieler</a>
                <ol>
                    <li><a href="#3.1">Anzahl Spieler</a></li>
                    <li><a href="#3.2">Frauenquote</a></li>
                    <li><a href="#3.3">Teamname</a></li>
                    <li><a href="#3.4">Teamkapitän/Spielführer</a></li>
                </ol>
            </li>
            <li><a href="#4">Ausrüstung der Spieler</a>
                <ol>
                    <li><a href="#4.1">Sicherheit</a></li>
                    <li><a href="#4.2">Vorgeschriebene Ausrüstung</a></li>
                    <li><a href="#4.3">Weitere Ausrüstungsteile</a></li>
                </ol>
            </li>
            <li><a href="#5">Schiedsrichter</a>
                <ol>
                    <li><a href="#5.1">Entscheidungsgewalt des Schiedsrichters</a></li>
                    <li><a href="#5.2">Entscheidungen des Schiedsrichters</a></li>
                    <li><a href="#5.3">Rechte und Pflichten</a></li>
                    <li><a href="#5.4">Schiedsrichterausrüstung</a></li>
                    <li><a href="#5.5">Zeichen von Schiedsrichtern</a></li>
                    <li><a href="#5.6">Höhere Gewalt</a></li>
                </ol>
            </li>
            <li><a href="#6">Spielgeschehen</a>
                <ol>
                    <li><a href="#6.1">Wurf</a></li>
                    <li><a href="#6.2">Trinken</a></li>
                    <li><a href="#6.3">Treffen der Flasche</a></li>
                    <li><a href="#6.4">Erstwurf</a></li>
                    <li><a href="#6.5">Folgewürfe</a></li>
                    <li><a href="#6.6">Konter</a></li>
                </ol>
            </li>
            <li><a href="#7">Bestimmung des Spielausgangs</a>
                <ol>
                    <li><a href="#7.1">Spielabschluss</a></li>
                    <li><a href="#7.2">Sieger des Spiels</a></li>
                    <li><a href="#7.3">Spieldauer</a></li>
                </ol>
            </li>
            <li><a href="#8">Fouls und unsportliches Betragen</a>
                <ol>
                    <li><a href="#8.1">Strafbier</a></li>
                    <li><a href="#8.2">Taktisches Kotzen (TK)</a></li>
                    <li><a href="#8.3">Verwarnungswürdige Vergehen</a></li>
                    <li><a href="#8.4">Trefferjubel</a></li>
                </ol>
            </li>
            <li><a href="#glossary">Glossar</a></li>
        </ol>
    </details>
    <h4 class="new">Änderungen zu 2018</h4>
    <article><span id="1" class="anchor"></span>
        <h1>Regel 01 - Spielfeld</h1>
        <section><span id="1.1" class="anchor"></span>
            <h2>1. Spielunterlage</h2>
            <p>
                Das Spielfeld muss vollständig aus einer Naturrasenunterlage, die zu Beginn als diese zu erkennen ist, bestehen. Wechselnde Rasenverhältnisse sind im weiteren Spielverlauf hinzunehmen. Auch darf die Neigung nicht überschritten werden, bei der es dem langsamsten
                Spieler nicht mehr möglich ist einen rollenden Ball hinterher zu laufen.
            </p>
            <p>
                Am Tag des Turniers muss der Spieler “Sebastian Witt” gefragt werden wie hoch das Gras auf dem Feld steht.Gibt er sein OK, kann mit den Vorbereitungen fortgefahren werden.
            </p>
        </section>
        <section><span id="1.2" class="anchor"></span>
            <h2>2. Abgrenzung</h2>
            <p>
                Das Spielfeld ist rechteckig und wird mit durchgezogenen Linien gekennzeichnet, von denen keinerlei Gefahr ausgehen darf. Diese bestehen wahlweise aus Sprühfarbe oder Klebeband.Ein Spieler, der unerlaubte Markierungen auf dem Spielfeld anbringt oder diese
                verändert, wird wegen unsportlichen Betragens verwarnt.
            </p>
            <p class="new">
                <h3>Verkleinerung des Feldes</h3>
                <p>
                    Eine Verkleinerung des Feldes ist selbst bei Wurf-Legasthenikern zu keinem Zeitpunkt vorgesehen.
                </p>
            </p>
        </section>
        <section><span id="1.3" class="anchor"></span>
            <h2>3. Abmessungen</h2>
            <ul>
                <li>Länge (Seitenlinie): 10m</li>
                <li>Breite (Wurflinie): 6m</li>
            </ul>
        </section>
        <section><span id="1.4" class="anchor"></span>
            <h2>4. Zuschauer-Zone</h2>
            <p>
                Die Zuschauer-Zone erstreckt sich um das gesamte Spielfeld herum. Von dort aus können taktische Anweisungen erteilt werden.Den Seitenlinien darf sich mit mobilen Sitzgelegenheiten genähert werden. Von dem Aufstellen diverser Möbel, die stabiler als windige
                Campingstühle sind, ist hier abzusehen. Aus Sicherheitsgründen sollte hinter den jeweiligen Wurfbereichen genug Auslaufplatz freigehalten werden.
                <br> Der Platz an der Mittellinie ist für den Schiedsrichter vorgesehen.
            </p>
        </section>
        <section><span id="1.5" class="anchor"></span>
            <h2>5. Flaschenplatz</h2>
            <p>
                Der Platz für die Flasche ist in der Mitte des Feldes und muss durch einen Kreis markiert sein.<br>
                <figure>
                    <img src="img/flunky/ground.png" alt="Spielfläche" class="container-fluid">
                    <figcaption>Abb.1: Spielfläche</figcaption>
                </figure>
            </p>
            <p>
                Bei sehr schlechten Platzverhältnissen ist es möglich eine Unterlage für die Flasche zu verwenden. Diese stellt keine Verpflichtung dar, muss aber zwischen den Teams bei jeder Begegnung abgestimmt werden. Kann sich nicht geeinigt werden, wird diese weggelassen.
            </p>
        </section>
        <section id="1.6" class="new">
            <h2>6. Dosenplatz</h2>
            <p>
                Die Getränkedosen haben ihren festen Platz hinter der Wurflinie. Den Spielern bleibt selbst überlassen welchen Abstand sie zu dieser wählen.
            </p>
        </section>
    </article>

    <article><span id="2" class="anchor"></span>
        <h1>Regel 02 - Ball und Flasche</h1>
        <section><span id="2.1" class="anchor"></span>
            <h2>1. Eigenschaften und Abmessungen</h2>
            <p>Sämtliche Bälle müssen:
                <ul>
                    <li>kugelförmig sein</li>
                    <li>aus einem geeigneten, formhaltigen Material bestehen</li>
                </ul>
            </p>
            <p>
                Die Flasche muss:
                <ul>
                    <li>ein Fassungsvermögen von 1,5 Liter aufweisen</li>
                    <li>im unteren Drittel mit Wasser gefüllt sein</li>
                </ul>
            </p>
        </section>
        <section><span id="2.2" class="anchor"></span>
            <h2>2. Austausch eines beschädigten Balls</h2>
            <p>
                Wenn der Ball beschädigt wird, wird das Spiel fortgesetzt, da es höchstwahrscheinlich keinen Ersatzball gibt. Tritt der unvorstellbare Fall ein, dass ein geeigneter Ersatzball vorhanden ist, kann dieser verwendet werden.
                <br> In beiden Fällen wird das Spiel in regulärer Reihenfolge wieder aufgenommen. Der letzte Spielzug wird nicht wiederholt.
            </p>
        </section>
        <section><span id="2.3" class="anchor"></span>
            <h2>3. Zusätzliche Bälle (falls vorhanden)</h2>
            <p>
                Zusätzliche Bälle werden, wenn überhaupt, beim Schiedsrichter aufbewahrt. Besser ist eine abgeschlossene Verwahrung, zu der die Allgemeinheit keinen Zutritt hat.
            </p>
        </section>
    </article>

    <article><span id="3" class="anchor"></span>
        <h1>Regel 03 - Spieler</h1>
        <section><span id="3.1" class="anchor"></span>
            <h2>1. Anzahl Spieler</h2>
            <p>
                Das Spiel wird von zwei Teams mit jeweils zwei Spielern bestritten, von denen einer der Teamkapitän ist. Das Spiel darf nicht beginnen oder fortgesetzt werden, wenn eines der Teams weniger als zwei Spieler hat.
            </p>
            <p>
                Die Änderung der Teamzusammensetzung ist nach erstmaligem Antritt nicht mehr möglich.
            </p>
            <section class="new">
                <h3>Verletzter/Gehandicapter Spieler</h3>
                <p>
                    Hat ein Mitspieler eine Beeinträchtigung, die es ihm nicht ermöglicht mindestens ausreichend zu laufen, muss ein Weg gefunden werden, um eine faire Begegnung zu realisieren. Denkbar wäre auf das Holen des Balles zu verzichten und nur die Flasche zu stellen.
                    Geschieht der körperliche Schaden während des Spiels, kann, wie vorher beschrieben, darauf reagiert werden.
                </p>
                <p>
                    Jeder Spieler muss fähig sein den Ball zu werfen. Verletzungen, die eine Ausnahme rechtfertigen würden, sind nicht bekannt.
                </p>
            </section>
        </section>
        <section><span id="3.2" class="anchor"></span>
            <h2>2. Frauenquote</h2>
            <p>
                Die vorgeschriebene Quote weiblicher Spieler im Turnier liegt bei mindestens 20 %. Wird diese trotz aller Überredungsversuche nicht erreicht, muss ein halbwegs plausibles Schlupfloch gefunden werden, um einen Abbruch zu verhindern.
            </p>
            <p>
                Für zukünftige Veranstaltungen darf die Quote nicht nach unten korrigiert werden, sondern muss mehr Überzeugungsarbeit geleistet werden, um diese zu erreichen.
            </p>
        </section>
        <section><span id="3.3" class="anchor"></span>
            <h2>3. Teamname</h2>
            <p>
                Der Teamname kann sich auf Stärken, häufige Zustände, regionale Herkunft, Hautfarbe, Religion, Geschlecht der Mitglieder beziehen. Er muss vor Turnierbeginn festgelegt und dem Spielorganisator mitgeteilt werden. Spätere Änderungen werden nicht mehr akzeptiert.
            </p>
        </section>
        <section><span id="3.4" class="anchor"></span>
            <h2>4. Teamkapitän/Spielführer</h2>
            <p>
                Der Kapitän/Spielführer genießt weder einen Sonderstatus noch Privilegien, trägt aber eine gewisse Verantwortung für das Verhalten seines Teams.
            </p>
        </section>
    </article>

    <article><span id="4" class="anchor"></span>
        <h1>Regel 04 - Ausrüstung der Spieler</h1>
        <section><span id="4.1" class="anchor"></span>
            <h2>1. Sicherheit</h2>
            <p>
                Spieler dürfen keine gefährliche Ausrüstung verwenden oder tragen.
            </p>
        </section>
        <section><span id="4.2" class="anchor"></span>
            <h2>2. Vorgeschriebene Ausrüstung</h2>
            <p>
                Die zwingend vorgeschriebene Ausrüstung eines Spielers besteht aus den folgenden einzelnen Gegenständen:
                <ul>
                    <li>Bier</li>
                    <li>Hose <sup>1)</sup> <sup>2)</sup></li>
                </ul>
                <sup>
                    1) Definition: ein Kleidungsstück, das zur Verhüllung von Gesäß und Geschlechtsteilen dient.
                    Als dieses muss es auch verwendet werden.
                </sup>
                <br>
                <sup class="new">
                    2) Ausnahme: Als Ausnahmefall darf der Rock gesehen werden. Hierbei gibt es bei Frauen keine
                    weiteren
                    Einschränkungen. Bei Männern ist aus ästhetischen Gründen nur der traditionelle Kilt erlaubt.
                </sup>
                <br> (Der im allgemeinen Sprachgebrauch geltende Grundsatz: “keine Hose, keine Probleme!”, trifft bis zur Beendigung des Spieles nicht zu.)
            </p>
            <p>
                <section>
                    <h3>Getränke</h3>
                    Die verwendeten Getränkedosen müssen ein Fassungsvermögen von 0,5 Liter aufweisen und von der Sorte “Schloss”, “5.0” oder “2.5” sein. Andere Sorten können nach Absprache mit dem Organisator zugelassen werden. Mindestvoraussetzung ist die Erwähnung des
                    Wortes “Bier” oder “Radler” in der Beschriftung. (Diverse Sorten können möglicherweise mit Verachtung der Anwesenden bestraft werden, aber haben keine weiteren spieltechnischen Folgen.)
                </section>
                <section class="new">
                    <h3>Dosentemperatur</h3>
                    Die Dosentemperatur muss eindeutig über dem Gefrierpunkt liegen, da zu Eis gefrorener Inhalt die tatsächliche Trinkmenge reduziert.
                </section>
                <section>
                    <h3>Bierausfall</h3>
                    Ist der Biervorrat eines Spielers aufgebraucht, muss ihm sein Mitspieler aushelfen. Ist auch dessen Reserve versiegt, muss ihm ein aufmerksamer Zuschauer ein Bier organisieren. Sollte der gesamte Vorrat des Festivals erschöpft sein, muss sofort Nachschub
                    angeschafft werden, indem der nüchternste Besucher mit einem motorisierten Gefährt seiner Wahl ausgestattet und losgeschickt wird (Hinweis: auf ausreichend Ladekapazität ist zu achten). <br> Die Rechnung wird demjenigen
                    vorgelegt, der für diese Spielunterbrechung grundlegend verantwortlich ist. Gelingt dies nicht, muss das Festival beendet werden. Diese Situation sollte auf alle Fälle durch verantwortungsbewusste Vorbereitung vermieden werden.
                </section>
            </p>
        </section>
        <section><span id="4.3" class="anchor"></span>
            <h2>3. Weitere Ausrüstungsteile</h2>
            <p>
                Oberteile jeglicher Art dürfen, aber müssen nicht, getragen werden. Ungefährliche Ausrüstung, z.B. Kopfschutz, Gesichtsmasken oder Gegenstände, die dem Spieler das Aufrechtstehen ermöglichen, sind erlaubt.
                <br> Das Tragen von Stollenschuhe oder Spikes ist verboten.
            </p>
        </section>
    </article>

    <article><span id="5" class="anchor"></span>
        <h1>Regel 05 - Schiedsrichter</h1>
        <section><span id="5.1" class="anchor"></span>
            <p>
                Jedes Spiel wird von einem Schiedsrichter geleitet, der die uneingeschränkte Befugnis hat, die Spielregeln beim Spiel durchzusetzen.
            </p>
        </section>
        <section><span id="5.2" class="anchor"></span>
            <h2>2. Entscheidungen des Schiedsrichters</h2>
            <p>
                Der Schiedsrichter entscheidet nach bestem Wissen und Gewissen im Sinne der Spielregeln und im "Geist des Flunkyballs". Er trifft die Entscheidungen, basierend auf seiner Einschätzung, und hat die Ermessenskompetenz die angemessenen Maßnahmen im Rahmen
                der Spielregeln durchzusetzen. Bei strittigen Beurteilungen ist gesunder Menschenverstand walten zu lassen.
            </p>
            <p>
                Die Entscheidungen des Schiedsrichters, zu Tatsachen im Zusammenhang mit dem Spiel, sind endgültig. Dazu gehören auch die Entscheidungen auf "Strafbier" oder "kein Strafbier" und das Ergebnis des Spiels.
            </p>
            <p>
                Bei Siechtum des Schiedsrichters darf das Spiel unter der Leitung eines anderen Spieloffiziellen fortgesetzt werden.
            </p>
        </section>
        <section><span id="5.3" class="anchor"></span>
            <h2>3. Rechte und Pflichten</h2>
            <p>
                Der Schiedsrichter hat
                <ul>
                    <li>die Spielregeln durchzusetzen,</li>
                    <li>das Spiel zu kontrollieren,</li>
                    <li>Aufzeichnungen über das Spiel zu machen (Gewinner/Verlierer, Spielzeit)</li>
                </ul>

                <h3>Verletzungen</h3>
                Der Schiedsrichter hat
                <ul>
                    <li>das Spiel weiterlaufen zu lassen, bis der Ball geworfen ist, wenn ein Spieler nur leicht verletzt ist,
                    </li>
                    <li>das Spiel zu unterbrechen, wenn ein Spieler ernsthaft verletzt ist,</li>
                    <li>dafür zu sorgen, dass ein blutender Spieler das Spielfeld verlässt und es erst wieder betritt, wenn die Blutung gestoppt wurde</li>
                </ul>

                <h3>Eingriffe von außen</h3>
                Das Spiel ist wegen eines Eingriffs von außen zu unterbrechen, wenn z.B.
                <ul>
                    <li>ein von einem Zuschauer geworfener Gegenstand einen Spieloffiziellen oder einen Spieler trifft,
                    </li>
                    <li>ein Zuschauer mit einem Pfiff das Spiel beeinflusst,</li>
                    <li> bei laufendem Spiel ein zweiter Ball, unbefugte Personen, andere Objekte oder Tiere aufs Spielfeld gelangen
                    </li>
                </ul>
            </p>
        </section>
        <section><span id="5.4" class="anchor"></span>
            <h2>4. Schiedsrichterausrüstung</h2>
            <p>
                Zwingend vorgeschriebene Ausrüstung:
                <ul>
                    <li>Pfeife</li>
                    <li>Uhr</li>
                    <li>rote und gelbe Karte</li>
                    <li>Warnweste</li>
                    <li>Notizblock (oder ein sonstiges Mittel für Aufzeichnungen über das Spiel)</li>
                </ul>
                Weitere Ausrüstungsteile
                <ul>
                    <li>Verpflegungsbier</li>
                </ul>
            </p>
        </section>
        <section><span id="5.5" class="anchor"></span>
            <h2>5. Zeichen von Schiedsrichtern</h2>
            <p>
                <div class="row">
                    <figure class="col-4">
                        <img class="w-100" src="img/flunky/refRedYellow.png" alt="Rote und gelbe Karte">
                        <figcaption><strong>Rote</strong> und <strong>gelbe</strong> Karte</figcaption>
                    </figure>
                    <figure class="col-4">
                        <img class="w-100" src="img/flunky/refLeft.png" alt="Linke Seite">
                        <figcaption><strong>Linke</strong> Seite</figcaption>
                    </figure>
                    <figure class="col-4">
                        <img class="w-100" src="img/flunky/refRight.png" alt="Rechte Seite">
                        <figcaption><strong>Rechte</strong> Seite</figcaption>
                    </figure>
                </div>
            </p>
        </section>
        <section><span id="5.6" class="anchor"></span>
            <h2>6. Höhere Gewalt</h2>
            <p>
                Das Spiel muss unterbrochen werden, wenn Unvorhersehbarkeiten wie Gewitter, Starkregen, offenes Schuhband oder Sabotage auftreten. Sind diese beseitigt, wird der normale Spielbetrieb fortgeführt.
            </p>
        </section>
    </article>

    <article><span id="6" class="anchor"></span>
        <h1>Regel 06 - Spielgeschehen</h1>
        <section><span id="6.1" class="anchor"></span>
            <h2>1. Wurf</h2>
            <p>
                Überschreitet der Ball in der Luft oder am Boden vollständig die Wurfline, wird dies als Wurfversuch gezählt.
                <br> Geschieht dies ungewollt und auf eine jämmerliche Art und Weise, darf das gegnerische Team entscheiden, ob es eine Wiederholung zulässt.
            </p>
            <p>
                Geworfen werden darf erst, wenn die Flasche gestellt, der Ball und alle Spieler hinter ihren jeweiligen Linien sind.
            </p>
            <p>
                Dabei muss der werfende Spieler
                <ul>
                    <li>das Gesicht dem Spielfeld zuwenden,</li>
                    <li>sich hinter der Wurflinie befinden. Er darf sie weder berühren noch überschreiten, bevor der Ball seine Hand verlassen hat,</li>
                    <li>eine als Wurf erkennbare Bewegung ausführen. Dies kann von unten oder oben und ein- oder zweihändig erfolgen. Ein Rollen, wie es bei Kegeln oder sonstigen verweichlichten Sportarten der Fall ist, ist nicht gestattet. (Richtwert: mind.
                        1 m Flugstrecke)</li>
                </ul>
                <section class="new">
                    <h3> Abpraller</h3>
                    <p>
                        Prallt der geworfene Ball vom Gegner ab, zählt dies als ordnungsgemäßer Treffer vom Werferteam. Es ist irrelevant, ob dieser vor oder hinter der Linie geschieht.
                    </p>
                </section>
            </p>
        </section>

        <section><span id="6.2" class="anchor"></span>
            <h2>2. Trinken</h2>
            <p>
                Das Wurfteam muss trinken, wenn die Flasche bei einem regulären Treffer gefallen ist. Dies ist so lang erlaubt, bis die Flasche gestellt, der Ball und beide Gegner hinter ihrer Linie sind. Die Aufsteller zeigen dies durch das Rufen von “Halt“, „Stopp”,
                oder sonstigen eindeutigen, akustischen Signalen. Visuelle Zeichen können das Ganze ergänzend verdeutlichen.
            </p>
            <p>
                Die Werfer haben das Recht so lange zu trinken, bis sie das Stoppsignal von den Aufstellern bekommen. Alle anderen Zwischenrufe sind nicht zu beachten. Auch muss der aktuelle Füllstand niemanden mitgeteilt werden. Vor allem dem Gegner darf man die Einsicht
                verweigern.
            </p>
            <p>
                Die Dose darf erst berührt werden, wenn ein Treffer vorliegt.
            </p>
        </section>

        <section><span id="6.3" class="anchor"></span>
            <h2>3. Treffen der Flasche</h2>
            <p>Bei einem Treffer muss getrunken werden. Allerdings kann dies vom Offiziellen nicht direkt kontrolliert werden, da der Füllstand nicht einsehbar ist.
            </p>
            <p>
                Die Flasche gilt als getroffen, wenn diese mit ihrer kompletten Längsseite den Boden bzw. das Gras berührt. Eine wackelnde Bewegung, oder was im allgemeinen Sprachgebrauch als Stehaufmännchen-Effekt bekannt ist, ist nicht ausreichend.
            </p>
            <p>
                Bleibt die Flasche in extremer Schieflage stehen, darf der Schiedsrichter, nach eigenem Ermessen, diese aufrichten, um nachfolgenden Missverständnissen vorzubeugen.
               
                    <h3>Indirekter Treffer</h3>
                    <p>
                        Die Flasche fällt, ohne dass sie vom Ball getroffen wurde. Dies ist vor allem durch Windböen, starken Erschütterungen oder einer höheren Macht möglich und kann durch einen schlechten Stand begünstigt werden.
                        <br> Hier gilt zu unterscheiden
                        <h4>Fall nach Wurf ohne Treffer</h4>
                        Fällt die Flasche nach einem Wurf, obwohl diese eindeutig nicht getroffen wurde, zählt dies nicht als Treffer.
                        <h4>Fall nach Aufstellen</h4>
                        Fällt die getroffene Flasche nachdem sie vom gegnerischen Spieler aufgestellt wurde, ist es entscheidend, wo sich beide Gegner zu diesem Zeitpunkt befinden. Stehen beide bereits hinter ihrer Wurflinie und haben das zugehörige Stoppsignal getätigt, darf
                        nicht erneut getrunken werden. Fällt die Flasche allerdings bevor beide in ihrer Wurfzone angekommen sind, ist es dem Trefferteam erlaubt erneut ihr Bier anzusetzen.
                    </p>
                    <div class="row flunky-hits align-items-end">
                        <figure class="col-4">
                            <img class="w-100" src="img/flunky/hit.png" alt="Treffer">
                            <figcaption><strong>Treffer</strong></figcaption>
                        </figure>
                        <figure class="col-4">
                            <img class="w-100" src="img/flunky/noHit1.png" alt="Kein Treffer">
                            <figcaption><strong>Kein Treffer</strong></figcaption>
                        </figure>
                        <figure class="col-4">
                            <img class="w-100" src="img/flunky/noHit2.png" alt="Kein Treffer">
                            <figcaption><strong>Kein Treffer</strong></figcaption>
                        </figure>
                    </div>
                
            </p>
        </section>

        <section><span id="6.4" class="anchor"></span>
            <h2>4. Erstwurf</h2>
            <p>
                <ul>
                    <li>Das Team, das beim Münzwurf gewinnt, führt den ersten Wurf aus. Teamintern wird festgelegt, wer diesen tätigen darf</li>
                    <li>Das gegnerische Team entscheidet, auf welcher Seite es spielt</li>
                    <li>Jeder Spieler und der Schiedsrichter muss sein Einverständnis zu Start geben. Auf verbale oder nonverbale Weise</li>
                </ul>
                <br> Ist ein Spieler nicht fähig seine Dose beim ersten Treffer zu öffnen, wird ihm eine kurze Unterbrechung gewährt, um sein Unvermögen vor dem nächsten Spielzug zu kompensieren.
            </p>
        </section>

        <section><span id="6.5" class="anchor"></span>
            <h2>5. Folgewürfe</h2>
            <p>
                Die Würfe werden abwechselnd ausgeführt. Das bedeutet, dass innerhalb eines Teams nicht zwei Mal hintereinander derselbe Spieler werfen darf.
                <br> Wurde der Erstwurf ausgeführt, ist das Gegnerische Team an der Reihe. Dieses darf entscheiden, wer von Beiden als Erstes beginnt. Somit ist die Reihenfolge für das komplette Spiel festgelegt.
            </p>
        </section>

        <section><span id="6.6" class="anchor"></span>
            <h2>6. Konter</h2>
            <p>
                Konterwürfe sind erlaubt. Diese Regel gilt als gesetzt, darf aber begegnungsintern, <span class="new">durch
                    Absprache</span>, verboten werden. Eine Zuwiderhandlung hat keine Bestrafung durch den Offiziellen zur Folge, zieht aber den Zorn der Gegner auf sich.
                <section class="new">
                    <h3>Dosen abstellen</h3>
                    <p>
                        Das Werferteam hat zu beachten, dass deren Dosen ordnungsgemäß abgestellt werden, falls ein Kontertreffer gelandet wurde. Es ist nicht erlaubt mit dem Bier die Wurflinie zu überschreiten.
                    </p>
                </section>
            </p>
        </section>
    </article>

    <article><span id="7" class="anchor"></span>
        <h1>Regel 07 - Bestimmung des Spielausgangs</h1>
        <section><span id="7.1" class="anchor"></span>
            <h2>1. Spielabschluss</h2>
            <p>
                Ein Spieler kann seine Runde abschließen, wenn seine Dose leer ist. Hierzu muss die Dose so umgedreht werden, indem sie mit der Öffnung nach unten, exakt vertikal, gehalten wird. (mindestens 3 Sekunden)<br> Es darf hierbei kein mäßiger
                Bierfluss erkennbar sein. Als Richtwert dient das Fassungsvermögen eines Kronkorkens. Dieser wird nicht als physisches Messwerkzeug herangezogen, sondern dient dem Offiziellen lediglich als visuelles Hilfsmittel.
                <br>
                <em>Hinweis:</em> Schaum zählt nicht als Bier. Austretender Bierschaum ist von tatsächlicher Flüssigkeit zu unterscheiden und darf, gerade bei Dosen, nicht überbewertet werden
            </p>
        </section>

        <section><span id="7.2" class="anchor"></span>
            <h2>2. Sieger des Spiels</h2>
            <p>
                Das Team, in dem beide Spieler als erste ihre Dosen geleert haben, hat gewonnen. Hierzu zählen auch verteilte Strafbiere.
                <br> Ein Spieler darf nur nach einem Treffer seines Teams das Spiel beenden.
            </p>
        </section>

        <section><span id="7.3" class="anchor"></span>
            <h2>3. Spieldauer</h2>
            <p>
                Generell wird die Dauer des Spiels nicht durch die Zeit begrenzt, sondern durch den Sieg eines Teams.
                <section class="new">
                    <h3>Zeitlimit</h3>
                    <p>
                        Kann das Spiel allerdings nach insgesamt 10 Minuten nicht beendet werden, kommen alle Dosen (inkl. Strafbiere, exkl. geleerte Biere) zum Wiegen. Hier wird festgestellt welches Team in Summe weniger zu trinken übrig hat. Es wird nicht auf unterschiedliche
                        Dichten der Inhalte oder Nettogewichte der verschiedenen Sorten Rücksicht genommen.
                        <br> Das Team mit den leichteren Dosen gewinnt.
                        <br> Werden Trefferstatistiken geführt, muss dieser Spieleingriff dort vermerkt werden.
                    </p>
                </section>
            </p>
        </section>
    </article>

    <article><span id="8" class="anchor"></span>
        <h1>Regel 08 - Fouls und unsportliches Betragen</h1>
        <section><span id="8.1" class="anchor"></span>
            <h2>1. Strafbier</h2>
            <p>
                Strafbiere werden für Vergehen und Verstöße bei laufendem Spiel gegeben.
                <br> Darunter versteht man ein zusätzliches Getränk, gleichen Alkoholgehalts, wie das mit dem gestartet wurde. Das Strafbier vergrößert somit die Biermenge, die im normalen Spielbetrieb getrunken werden muss.
                <br> Es darf<span class="new">, nach Erhalt, jederzeit</span> geöffnet werden.
                <section>
                    <h3>Strafweizen</h3>
                    <p>
                        Eine Sonderform ist hier das so genannte Strafweizen. Diese besonders harte Art der Bestrafung wird nicht vom Offiziellen, sondern von der Allgemeinheit erteilt und darf ein Mal im Turnier angewandt werden.
                        <br> Sie ist einzig und allein für den Spieler „Robert Kraus” zugelassen, weil er es verdient aber auch verkraften kann. <span class="new">Die optimale Trinktemperatur liegt hier zwischen handwarm und
                            brühwarm. </span>
                    </p>
                </section>
            </p>
            <p>
                Ein Strafbier wird per roter Karte angezeigt.<br> Direkt dazu führen:
                <ul>
                    <li>
                        <strong>Umgefallenes Bier</strong><br> Das Umfallen einer Dose steht unter Strafe, sobald alle Spieler einer Begegnung sich zum Start des Spiels bereiterklärt haben. Ob dies im offenen oder geschlossenen Zustand geschieht ist dabei
                        nicht relevant. Unerheblich ist auch der Grund dafür (z.B. Treffer vom Gegner, Zuschauer oder nichtsnutzigen Teamkollegen). Jeder Spieler ist selbst für seine Dose verantwortlich.
                    </li>
                    <li class="new">
                        <strong>Unsachgemäßer Spielabschluss</strong><br> Dreht ein Spieler seine Dose auf den Kopf, mit der Absicht das Match beenden zu wollen,
                        <ul>
                            <li>und ein mehr als schwacher Bierfluss zu erkennen ist, <a href="#7.1">(Regel 07 – 1.
                                    Spielabschluss)</a>
                            </li>
                            <li>ohne dass der Schiedsrichter dies bemerkt,</li>
                        </ul>
                        muss mit einem Strafbier gerechnet werden.
                    </li>
                    <li>
                        <strong>Überlaufendes Bier</strong><br> Generell darf kein Bier beim Öffnen, Trinken oder Abstellen auslaufen. Geringe Schaumbildung ist tolerierbar.
                    </li>
                    <li>
                        <strong>Kotzen ohne Vorankündigung (TK)</strong><br> Das Übergeben, ohne Berücksichtigung der Regel „Taktisches Kotzen“, steht unter Strafe.
                    </li>
                    <li>
                        <strong>Tauschen der Dose</strong><br> In keinem Fall ist das Tauschen oder gar Teilen der Getränke nach Spielbeginn erlaubt. Weder mit dem Teamkollegen noch mit einem Zuschauer. Jeder Spieler hat seine eigene Dose.
                    </li>
                    <li>
                        <strong>Grobes unsportliches Verhalten</strong><br>
                        <em>Spieler</em><br> Das Werferteam darf das Aufstellerteam aktiv nicht behindern, indem es den Ball sperrt oder weiterleitet. Das Aufstellerteam darf das Werferteam nicht direkt am Leeren der Dose hindern. Dies wäre durch Anrempeln
                        der Fall.

                        <div clasS="new">
                            <em>Zuschauer</em><br> Geht so ein schwerwiegender Eingriff in das Spielgeschehen von einem Zuschauer aus, muss dieser in seiner nächsten Partie mit einem Strafbier als Konsequenz rechnen. Ist der Störenfried bereits ausgeschieden
                            oder nicht am Turnier beteiligt, wird die Gemeinschaft eine gleichwertige Bestrafung finden und vollstrecken.
                        </div>
                    </li>
                    <li class="new">
                        <strong>Verwirrtes Bier</strong><br> Ein Spieler aus dem Aufstellerteam trinkt verbotener Weise von seinem Bier, obwohl der Gegner die Flasche getroffen hat. Ist dies der Fall sollte der Teilnehmer unter vermehrter Beobachtung stehen,
                        da an seinem (sich verschlechternden) Verstand gezweifelt werden muss.
                        <small>(Diese Regel wurde aus gutem Grund in das Regelwerk aufgenommen.)</small>
                    </li>
                </ul>
            </p>
        </section>

        <section><span id="8.2" class="anchor"></span>
            <h2>2. Taktisches Kotzen (TK)</h2>
            <p>
                Übermannt einem Spieler plötzliches Unwohlsein, so dass ein Übergeben unvermeidbar ist, muss dies kurz vorher durch lautes Rufen von „TK“ angekündigt werden. Ist es ihm nicht mehr möglich zu sprechen, muss dies nonverbal erfolgen.<br>

                <figure class="col-4 mx-auto">
                    <img clasS="w-100" src="img/flunky/tk.png" alt="Offizielles TK-Handzeichen">
                    <figcaption>Offizielles TK-Handzeichen</figcaption>
                </figure>
                <br> Wird dieser Hilferuf öfter im Turnier von derselben Person benutzt, ohne sich jemals übergeben zu müssen, wird dieser Missbrauch mit einer Verwarnung bzw. einem Strafbier geahndet. Dies liegt im Ermessen des Offiziellen (Richtwerte:
                > 1x pro Spiel, > 3x im Turnier)<br> Wurde taktisches Kotzen regelkonform angewandt, wird pausiert.<br> Kann das Spiel trotz kurzer Pause (etwa 5 Min.) nicht fortgesetzt werden, wird es beendet und dem Team des betroffenen Spielers eine
                Niederlage zugeschrieben.
            </p>
        </section>

        <section><span id="8.3" class="anchor"></span>
            <h2>3. Verwarnungswürdige Vergehen</h2>
            <p>
                Verwarnungen werden per gelber Karte angezeigt. Häufen sich diese Vergehen, führt dies zu einem Strafbier. Wann das Fass voll ist liegt im Ermessen des Schiedsrichters.
                <br> Hierzu zählen:
                <ul>
                    <li>
                        <strong>Beleidigung des Offiziellen</strong><br> Als Beleidigung wird gewertet, wenn z.B. sein Geschlecht in Frage gestellt oder das tatsächliche bzw. vermutete Gewicht seiner Mutter erwähnt wird.
                    </li>
                    <li>
                        <strong>Nicht abwechselnder Werfer</strong><br> Geschieht ein Wurf in falscher Reihenfolge, muss dies in darauffolgender Runde wieder angepasst werden.
                    </li>
                    <li>
                        <strong>Fehlstart</strong><br> Die Aussteller dürfen erst dann ihre Linie übertreten, wenn der Ball des Werfers die Flasche oder erstmalig den Boden berührt.
                    </li>
                    <li>
                        <strong>Übertreten</strong><br> Als Übertreten zählt bereits das Berühren der Wurflinie mit dem Fuß, der Hand oder einem anderen Körperteil.
                    </li>
                    <li>
                        <strong>Zeitspiel</strong><br> Zeitspiel liegt vor, wenn ein Spieler bewusst, aus taktischen Gründen, den Spielfortschritt verzögert.
                    </li>
                    <li>
                        <strong>Berühren/Festhalten der Dose</strong><br> Die Dose darf nur dann berührt werden, wenn getrunken werden darf.
                    </li>
                    <li>
                        <strong>Zu spätes Absetzen</strong><br> Es muss unmittelbar nach dem Stoppsignal das Getränk abgesetzt werden.
                    </li>
                    <li>
                        <strong>Diskutieren</strong><br> Das Führen von nervigen Diskussionen, mit dem Offiziellen oder dem Gegner, ist im Spielbetrieb nicht vorgesehen.
                    </li>
                    <li class="new">
                        <strong>Verfehlen des Flaschenplatzes</strong><br> Die umgefallene Flasche muss innerhalb des Kreises aufgestellt werden.
                    </li>
                </ul>
            </p>
        </section>

        <section><span id="8.4" class="anchor"></span>
            <h2>4. Trefferjubel</h2>
            <p>
                Der Trefferjubel ist in angemessenem Rahmen zu gestalten und darf nicht zu überschwänglich ausfallen oder den Gegner aufhetzen. Zu unterbinden sind Jubelszenen, wenn dadurch zu viel Zeit verloren geht. Das Verlassen des Spielfeldes ist kein verwarnungswürdiges
                Vergehen. Die Spieler sind jedoch angehalten, so rasch wie möglich auf das Feld zurückzukehren.
            </p>
        </section>
    </article>

    <article id="glossary">
        <h1>Glossar</h1>
        <section>
            <p>
                <dl>
                    <dt>Absicht</dt>
                    <dd>Eine gewollte Handlung (kein Versehen).</dd>

                    <dt>Antäuschen/Vortäuschen</dt>
                    <dd>Eine Handlung, mit der versucht wird, einen Gegner zu verwirren.</dd>

                    <dt>Behindern</dt>
                    <dd>Die Handlung oder Bewegung eines Gegners verzögern, blockieren oder verhindern.</dd>

                    <dt>Drittperson</dt>
                    <dd>Eine Person, die kein Teamoffizieller oder nicht auf der Teamliste (Spieler, Auswechselspieler und Teamoffizielle) aufgeführt ist.</dd>

                    <dt>Ermessen</dt>
                    <dd>Von einem Schiedsrichter oder Spieloffiziellen eingesetzte Ermessenskompetenz bei einer Entscheidung.
                    </dd>

                    <dt>Protestieren</dt>
                    <dd>Öffentliche Kritik (verbal und/oder körperlich) an der Entscheidung eines Spieloffiziellen; mit einer Verwarnung zu bestrafen (gelbe Karte).</dd>

                    <dt>Simulieren/Schwalbe</dt>
                    <dd>Eine Handlung, die etwas vorgibt, das nicht erfolgt ist (siehe auch Täuschen); von einem Spieler begangen, um einen unfairen Vorteil zu erlangen.</dd>

                    <dt>Spielfeld (Platz)</dt>
                    <dd>Der zwischen den Seitenlinien, Torlinien und Tornetzen (wo diese verwendet werden) befindliche Spielraum.
                    </dd>

                    <dt>Täuschen</dt>
                    <dd>Eine Handlung, um den Schiedsrichter in die Irre zu führen, damit er eine falsche Entscheidung ergreift, von der der Täuschende oder sein Team profitiert.</dd>

                    <dt>Unsportliches Betragen</dt>
                    <dd>Unfaire Handlung/Verhaltensweise; mit Verwarnung zu bestrafen.</dd>

                    <dt>Untersuchung verletzter Spieler</dt>
                    <dd>Schnelle Prüfung einer Verletzung, üblicherweise durch Irgendjemand, um zu sehen, ob der Spieler behandelt werden muss.</dd>

                    <dt>Vernachlässigbar</dt>
                    <dd>Unbedeutend, minimal.</dd>

                    <dt>Verstoß</dt>
                    <dd>Eine Handlung, die gegen die Regeln verstößt/diese verletzt.</dd>

                    <dt>Verwarnung</dt>
                    <dd>Offizielle Strafe, die zu einer Meldung an eine Disziplinarinstanz führt; durch Zeigen der gelben Karte ausgesprochen; <span class="new">mehrere</span> Verwarnungen in einem Spiel führen zum Strafbier für den betreffenden Spieler.</dd>

                    <dt>Zeichen/Signal</dt>
                    <dd>Physisches Signal vom Schiedsrichter oder einem Spieloffiziellen; umfasst für gewöhnlich eine Bewegung mit der Hand dem Arm, der Fahne oder den Einsatz der Pfeife (ausschließlich Schiedsrichter).
                    </dd>
                </dl>
            </p>
        </section>
    </article>
</div>`

})