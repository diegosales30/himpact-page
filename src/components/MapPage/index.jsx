import { useState, useRef } from "react";
import { Map, TileLayer } from "react-leaflet";
import { maptiler } from "../../api/constants"

export const MapPage = () => {
    const [center, setCenter] = useState({ lat: 13.084622, long: 80.248357 })
    const zoomLevel = 8;
    const mapReference = useRef()

    return(
        <>
            <Map
                center={center}
                zoom={zoomLevel}
                reference={mapReference}
            >
                <TileLayer
                    url={maptiler.url}
                    attr={maptiler.attr}
                >
                </TileLayer>
            </Map>
        </>
    )
}