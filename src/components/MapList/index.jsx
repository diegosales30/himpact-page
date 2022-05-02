import React from "react";
import { useHistory } from "react-router-dom";
import { centros } from "../../data/maps-list.js";
import { MapListArea, Title, CardMap } from "./style.js"

const MapList = () => {
    const history = useHistory();

    const handleNavigation = (path) => {
        return history.push(`/maps/details/${path}`);
    };

    const list = centros.map(centro => {
       return (
            <CardMap key={centro.cep} onClick={() => handleNavigation(`${centro.cep}`)}>
                <h1>{centro.nome}</h1>
                <p>{centro.endereco}, {centro.cidade} - {centro.estado}</p>
                <p>{centro.cep}</p>
                <p>{centro.telefone}</p>
            </CardMap>
       )
    })

    return (
        <MapListArea>
        <Title>Encontre aqui pontos de coleta seletiva</Title>
            {list}
        </MapListArea>
    )
}

export default MapList