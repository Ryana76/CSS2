Gestione del box{
    il box model{
        ogni elemento html e' comtenuto in un box rettangolare
        le proprieta' css sono applicate al box
            *{
                midgh
                height
                padding{
                    #padding-tom
                    #padding-right
                    #padding-bottom
                    #padding-left

                    value{
                        numeri e inherit
                    }
                    dichiarare{
                        padding: #top #right #bottom #left
                    }
                }
                margins{
                    #margin-top
                    #margin-right
                    #margin-bottom
                    #margin-left#
                    
                    *si puo fare anche margine "inline"

                    *puoi mettere un foto anche "inline"

                    *esistono margini negativi anche
                }
                borders{
                    border-style{
                        border-top-style
                        border-right-style
                        border-bottom-style
                        border-left-style
                        value{
                            none
                            dotted
                            dashed
                            solid
                            double
                            groove
                            ridge
                            inset
                            outset
                        }
                    }
                    border-width{
                        bordet-top-width
                        border-right-width
                        border-bottom-width
                        border-left-width
                    }
                    border-color{
                        border-top-color
                        bordet-right-color
                        border-bottom-color
                        border-left-color
                    }
                }
            }
        Dimensioni{
            width{
                numeri e auto e inherit
            }
            
            height{
                numeri e auto e inherit
            }
        }
        sizing:
        #right-margin + #right-border + #right-padding + #width + #left-pedding + #left-border + #left-margin

        box-sizing{
            value{
                content-box{
                    solo contenuto
                }
                border-box{
                    include nel size border e padding
                }
            }
        }
        overflow{
            value{
                visibile
                hidden
                scroll
                auto
                inherit
            }
        }
        display?
    }
}