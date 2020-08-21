import React, {useEffect, useState, useRef} from "react"
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
    let imageRef = useRef();

    useEffect(()=>{
        const img = imageRef.current;
            if (img && img.complete) {
                triggerHasLoaded();
            }
    },[])

    const triggerHasLoaded = () => {
        if(!hasLoaded) {
            setHasLoaded(true)
        }
    }



    return src !== null ?  
        <Container aspectRatio={src.dimensions.height / src.dimensions.width * 100}>
            <img ref={imageRef} className={hasLoaded && "show-image"} onLoad={() => triggerHasLoaded()} src={src.url}/>
        </Container>
        :
        null
}