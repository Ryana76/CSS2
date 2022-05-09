Gestione del background{
    background{
        background-color{
            value{
                name of color or number
                trasparent{
                    value{
                        numbre da 0 fino a 1
                    }
                }
                inherit
            }
            opacity
        }
        immagini nel background{
            background-image{
                value{
                    url()
                    none
                    inherit
                }
            }
            background-repeat{
                value{
                    repeat
                    repeat-x
                    repeat-y
                    no-repeat
                    inherit
                }
            }
            background-pisition{
                numeri
                percentuale
                left
                right
                top
                bottom
                inherit
            }
            background-attachment{
                scroll
                foxed
                local
                inherit
            }
            *{
                background: color url() repeat posizion(puo essere anche piu di uno) attachment
            }
        }
    }
}
List{
    list-style-type{
        value{
            none
            disc
            circle
            square
            decimal
            decimal-leading-zero
            lower-alpha
            upper-alpha
            lower-latin
            upper-latin
            lower-roman
            upper-roman
            lower-greek
            inherit
        }
    }
    list-style-position{
        value{
            inside
            outside
            inherit
        }
    }
    list-style-image{
        value{
            url()
            none
            inherit
        }
    }
}
punti spicifici di una pagina{
    identificazione dell'ancora{
        ogni id puo'essere usato come ancora{
            <h1 id = "startH">
                H
            </h1>
        }
        creazione del link{
            si usa come # ed il nome dell'identificatore{
                <p>
                    ...
                    <a href="#startH">
                        H
                    </a>
                    ...
                </p>
            }
        }
    }
}
punti specifici in altre pagine{
    come indrizzo con tag <a href="url"></a>
    anche se non esiste pagina o id, funziona ancora come un link
}
Target{
    _blank{
        per aprire un altra finestra
    }
}
altri Link{
    mailto: hdfkag@hksgad.com
    tel: 3516955000
    in tag <a href="qua"></a>
}
Style di link{
    Specifici{
        :link{
            link non visitati
        }
        :visited{
            gia visitati dall'utenti
        }
    }
    legati ad azioni dell'utente{
        :focus{
            l'elemento e' selezionato
        }
        :hover{
            il muose e' sopra l'elemento
            *DOPO :LINK E :VISITED VIENE
        }
        :active{
            nel momento del click
            *ANCHE QUESTO DOPO :HOVER
        }
    }
}