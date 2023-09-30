import { styled } from "styled-components"
import Popular from "./popular"
import Tags from "./tags"
import Title from "./title"
import Image from "./image"

const Div = styled.div`
    display: flex;
`

const Section = styled.section`
    flex-grow: 1;
`

const Ul = styled.ul`
    list-style: none;
`

const ImageContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

function Gallery({ value = [], photoSelected, onToggleFavorite }) { //foi declarado o valor inicial de um array vazio para não gerar erros no console
    return (
        <>
            <Tags />
            <Div>
                <Section>
                    <Title>
                        Navegue pela galeria
                    </Title>
                    <ImageContainer>
                        { value.map(pic => <Image 
                                            key={ pic.id } 
                                            pic={ pic } 
                                            onMaximize={ photoSelected }
                                            onToggleFavorite={ onToggleFavorite }
                                           />) }
                    </ImageContainer>
                </Section>
                <Popular />
            </Div>
        </>
    )
}

export default Gallery