import React from "react";

const MapPage = () => {

    // const exibeIframe = (cep) => {
    //     document
    //       .querySelector("#iframe")
    //       .setAttribute(
    //         "src",
    //         `https://www.google.com.br/maps?q=${cep},%20Brasil&output=embed`
    //       );
    //   }

    return(
        <>
            <iframe 
                src="https://www.google.com.br/maps?q=41205-000,%20Brasil&output=embed" 
                frameborder="0" 
                allowfullscreen="" 
                aria-hidden="false" 
                tabindex="0" 
                id="iframe"
                title="map">
            </iframe>
        </>
    )
}

export default MapPage;