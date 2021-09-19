# sprint6

S6.Intro React
Descripció




Ja has arribat al teu primer lliurament de React. Una vegada tenint els conceptes clars de javascript, veuràs que amb l'ajuda de React, podràs fer de manera fàcil i ràpida aplicacions més potents del que podíem fer amb javascript pla (vanilla javascript).

Pren-te amb calma aquest lliurament, els primers passos en React costen una mica, ja que has d'entendre la manera en la qual les aplicacions en React es construeixen. No oblidis que en React, la web la dividim en petits trossos o components, que són mòduls reutilitzable que representen una part de la nostra aplicació. Aquestes parts poden ser grans o petites, però, generalment, estan ben definides: tenen un propòsit únic i obvi.

En aquest lliurament posarem en pràctica els conceptes bàsics que has après de React. Un client que té com a producte principal una web de gestió empesarial desenvolupada amb React, ens ha demanat que desenvolupem un tutorial, en la qual mitjançant dos botons els nous usuaris puguin avançar i retrocedir en els consells, modificant-se el text d'ajuda i la imatge de fons.

Com de moment no tenim el material perquè crear el tutorial, per a fer la demo al client mostrarem una petita història de 4 passos, quedant de la següent manera:






Començarem creant una web en react des de zero, incloent tots els passos necessaris, per a passar després ha crear els nostres primers components i fer ús de props.

Després, modificarem la pàgina per convertir-l'en una web interactiva que mostrarà una història. Aplicarem els tècniques fonamentals per aplicar estils a la web i afegirem accions que l'usuari pugui interactuar amb la nostra aplicació.


Notes

Tens els següents indicacions del responsable frontend:

- Crearem la base del projecte sobre la qual treballar executant el comando: npx create-react-app nom_del_projecte. 

Més informació d'aquest pas: Link

- Si encara no has preparat el teu ordinador per a poder treballar amb React, acudeix al Annex I del document per a fer-lo.

- Com de moment no consumim dades d'un servidor usant una API, treballarem amb dades hardcodeadas en la aplicación. 

- Està prohibit copiar el codi, ja que d'aquesta manera no s'aprèn res. A més com podràs observar, el segon lliurament del sprint 5 és una miniprueba de nivell amb el mentor, el la que hauràs de demostrar en directe que has adquirit els conceptes de javascript. No et preocupis, si treballes els lliuraments no tindràs problemes.

Nivell 1

- Exercici 1
Com ja hem indicat, una aplicació amb React està composta de components, diguem que cada component és una peça del puzle, tenint aquests components un propòsit únic i obvi.

Pots crear tants components com vulguis, i sempre que ho consideris necessari, pots usar un o diversos component dins d'un altre. 

Per exemple, si féssim una landing page amb react, dins del component principal (base de la web) podríem importar el component header, menú, formulari de contacti….

En aquest primer exercici, crearem un component que s'encarregarà de renderitzar una frase, i l’importarem i usarem en el component principal App.



Has de dur a terme els següents passos:

1. Crear la carpeta components

2. Crear la carpeta escena dins de la carpeta components

3. Dins de la carpeta escena implementarem el primer component. Per a això crear el fitxer Escena.js. Aquest primer component només ha de retornar el següent string:

"El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial"

4. Ja tenim el nostre primer component creat, però encara no es mostrarà la frase. Per a això usarem el nostre flamant component Escena. En el return del component app has d'usar el component Escena.



El resultat ha de ser:



Ajuda: Aquí tens un repàs de com crear i utilitzar el teu primer component en react


- Exercici 2
Genial, ja tens el primer component creat i funcionant. De moment només es mostra una frase, en aquest exercici farem que es mostrin totes les frases de la història. 

Per a això, has de dur a terme les següents tasques:

1. Llegirem els dades d'un un arxiu json amb els textos de la història en el component App:

[
  "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
  "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
  "L'heroi va decidir travessar la porta que el portava a casa",
  "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ..."
]
2. S'ha de passar per props cadascun dels textos de la història al component Escena. (El component escena renderitzarà una sola línia de text)


3. Modificarem el component Escena per a mostrar totes les línies de text obtingudes del component pare App mitjançant props.


L’exercici hauria de quedar així:

Captura joc història

- Exercici 3
És moment d'aplicar estils al nostre component Escena. Has de maquetar aquest component utilitzant styled-components:




- Exercici 4
Mostrarem totes les línies de l’aplicació però ressaltarem només una de cada vegada, que anirà canviant a mesura que premem els botons d’avançar o retrocedir:





Nivell 2

- Exercici 5
Enhorabona, ja has creat la base del projecte! ja es pot navegar per la història indicant a l'usuari en què punt es troba. 

Seria convenient mostrar a l'usuari una pantalla inicial de benvinguda, que contingui la descripció del projecte i un botó començar. En aquest exercici has d'usar el renderitzat condicional.

Ajuda: Com implementar el renderitzat condicional? Mitjançant una variable guardada en el state del component principal App, seràs capaç de mostrar la pantalla de benvinguda, i una vegada que aquesta variable canviï, ocultar la pantalla de benvinguda i mostrar la pantalla amb la història.

Nivell 3




- Exercici 6
Ja només et falta modificar la imatge de fons conforme l'usuari vagi canviant de frase. 

Modificar el fitxer JSON i convertir-l'en un fitxer JS amb un array d'objectes. Cada objecte tindrà dues propietats: txt i img:

- txt serà la propietat que emmagatzemarà el text de l'escena

- img serà la propietat que emmagatzemarà la imatge de fons que és veurà a la pantalla.

Pots descarregar els imatges de fons d'aquest enllaç.

Com en el array ja tens la frase a mostrar juntament amb la seva imatge, et resultarà senzill dinamitzar l'atribut "src" de la imatge.




Descàrrega les imatges necessàries per a fer l'exercici.



Recordatoris
- Els sprints duren dues setmanes i comencen en dilluns.

- És obligatori pujar tots els lliuraments almenys amb el nivell 1 al final del sprint per a poder passar al següent.

- Com a més tard el lliurament es farà el dilluns següent, dia que comença el nou sprint.

- És recomanable intentar aconseguir les màximes estrelles possibles en els exercicis. Si no et dóna temps, no et preocupis. És una manera de millorar el teu perfil de cara al procés d'ocupabilitat, però també es té en compte el feedback dels mentors).



Annex I




En aquest annex explicarem la preparació del teu ordinador i la creació del teu primer projecte react.



Els passos són els següents

1. Instal·lar Nodejs: Per a facilitar la creació del projecte i gestió de paquets, usarem npm. Per a poder utilitzar-ho haurem de tenir descarregat Node.js en nuesto ordenador. 
https://nodejs.org/en/download/



configuración de la instalación Node.js



2. Instal·lar la plantilla del nostre projecte


Executar el següent comando per a crear la base del projecte sobre la qual treballar:

npx create-react-app nom_del_projecte

Més informació d'aquest pas: Link


3.  Obrir el projecte amb el Visual Studio Code

Veuràs que en executar el comando anterior, s’ha creat una carpeta amb el nom del projecte.

Arrosseguem el directori acabat de crear al Visual Studio Code per obrir el projecte amb l’editor.



5. Comprendre l'estructura del projecte creat.

Veuràs que s'han creat diversos arxius i directoris, és important conèixer l'estructura del projecte. A continuació es mostra informació de cada part:

- Carpeta node_modules. Aquí es guarden les dependències del projecte. Veuràs que per defecte create-react-app ha creat vàries.

- Carpeta src: Aquesta carpeta conté el codi de l'aplicació. Per defecte el component principal es llaama App.js. També hi haurà un index.js que es encargarña d'introduir el component App en el <div> del index.html.

- Readme.md. Fitxer d'informació del projecte.

- Package.json. En aquest arxiu es defineixen les dependències de npm. Bé pots instal·lar els paquets amb npm install “nom del paquet” o pots definir totes les dependències del projecte i després executant npm intall es intalarán totes alhora.



npm i nom-del-paquet



- Gitignore. Aquí es definiran els arxius o carpetes que volem que git no tingui en compte.



6. Arrencar el projecte i visuarlo en el navegador. Desplegarem el nostre projecte en un entorn local (localhost) executant el comando:

npm start

(Instal·lant l’extensió de Visual Studio Code "npm de egamma" podrem executar el comando anterior fent clic en un botó:)

unidad 6 - cat 5



Una vegada executat hauràs de veure el missatge d'èxit:

unidad 6 - cat 6


Si entrem en http://localhost:3000 podrem veure l'aplicació:





Enhorabona! Ja tens el projecte funcionant, ara només farem petits canvis per a jugar amb React. 
