import React, {useEffect, useState} from "react"
import styled from "styled-components"

const Container = styled.div`
    position: relative;
    padding-bottom: ${props => props.aspectRatio}%;

    img {
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        opacity: 0;
    }

    .show-image {
        opacity: 1;
        transition-duration: 0.2s;
    }
`


export default ({src}) => {
    let [hasLoaded, setHasLoaded] = useState(false);


    return src !== null ?  
        <Container aspectRatio={src.dimensions.height / src.dimensions.width * 100}>
            <img className={hasLoaded && "show-image"} onLoad={() => setHasLoaded(true)} src={src.url}/>
        </Container>
        :
        null
}