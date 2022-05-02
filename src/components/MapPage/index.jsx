import React from "react";
import { centros } from "../../data/maps-list.js";
import { useParams } from "react-router-dom";
import { CardMap, Iframe } from "./style"


const MapPage = () => {
    const params = useParams();
    const url = `https://www.google.com.br/maps?q=${params.q},%20Brasil&output=embed`

    const centro = centros.map(centro => {
        let card = ""
         if(centro.cep === params.q) {
            return (
                card = 
                <CardMap key={centro.cep}>
                    <h1>{centro.nome}</h1>
                    <p>{centro.endereco}, {centro.cidade} - {centro.estado}</p>
                    <p>{centro.cep}</p>
                    <p>{centro.telefone}</p>
                </CardMap>
           )
        }
        return card;
     })
       
    return(
        <>
            {centro}
            <Iframe 
                src={url}
                frameborder="0" 
                allowfullscreen="" 
                aria-hidden="false" 
                tabindex="0" 
                title="map">
            </Iframe>
        </>
    )
}

export default MapPage;