HTML SEMANTICO{
    organizare il contenuto{
        prima di HTML5{
            block division: <div>
            inline division: <span>
        }
        HTML5{
            header:             <header>
            footer:             <footer>
            main:               <main>
            sezioni:            <selection>
            articoli:           <article>
            navigazione:        <nav>
            contenuto a parte   <aside>
        }
        main{
            il contenuto principale
            *   CONTENUTO ALL'INTERO DI MAIN DOVREBBE ESSERE UNIVOCO PER 
            IL DOCUMENTO
            
            *   CI POSSO ESSERE SOLO UN ELEMENTO MAIN INUN DOCUMENTO

            *   NON DEVE DISCENDENTE DI ALTRI COME HEATER FOOTER .....
        }
        aside{
            sono elementi correlati ma "marginali" rispetto al contenuto
                *  NON E' SIDBAR

            USARE{
                sondaggi
                citazioni
                informazioni aggiuntivi
                annunci
                link
            }

            *   NON HA UN ASPETTO DI DEFAULT
        }
        nav{
            sezione che permette la navigazione nel sito
                *   tipicamente mettono delle list nel <nav>
                        *   non tutte le liste
            
            nei siti responsivi spesso viene copressa per o dispositivi piccoli
        }
        header{
            si usa per materiale introduttivo
            
            due usi comuni{
                header della pagina
                header di una sezione o articolo
            }

            se usato in un "articolo" tipicamente contiene titolo, autore, data, ecc
        }
        footer{
            contiene le info che vanno alla fine di sezione logica
                *   autore, copyright
                    documenti correlati
                    link
            
            Usi comuni
                *   fondo pagina    
                    fine article, section
        }
        section{
            sezioni tematiche{
                possono contenere heading, paragrafi
                tutti gli elementi che abbia senso raggruppare
            }
            puo essere usato in diversi contesti{
                da dividere le sezioni della pagina
                a dividere le sezioni di un articolo
            }
        }
        article{
            porzioni di pagina auto-consistenti{
                teoricamente riusabili in contesti diffrenti
                e.g. syndaction: porzioni a disposizioni di altri siti
            }
            contesti operativi{
                blog
                giornali
            }
        }
        *   SI PUO ESSSERE ARTICOLI IN UNA SEZIONE E SEZIONI IN UN ARTICOLO

        figure{
            un'immagine e una didascalia possono essere ragguruppare in un elemento <figura>
                *   l'elemento <img> definisce l'immagine, l'elemento <figcaption> definisce la didascalia.(caption sotto foto)
        }
        diffrenza tra i head{
            <header>{
                elemento strutturale che identifica un segmento di pagina
                posto all'interno del body o di un suo sotto-elemento
            }
            <head>{
                direttamente incluso nel tag HTML 
                non mostrato dal browser
                contiene i metadati
            }
            <h1><h2><h3>...<h6>{
                identificano i titoli testuali della pagina
            }

        }
    }
}
ELEMENTI HTML GENERICI{
    elemnti generici{
        <div>{
            block elementi generic 
            divisione di contenuto
        }
        <span>{
            inline element generico 
            identifica una parola o una frase
        }
        con id e class{
            usati per motivi grafici
            o per legare azioni con js
        }
    }
}