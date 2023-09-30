import { styled } from "styled-components"
import Title from "./title"
import Pics from '../../json/fotos.json'

const Div = styled.div`
    margin-left: 30px;
`

const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Img = styled.img`
    max-width: 212px;
    border-radius: 20px;
    margin-left: 30px;
`

const Button = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin: 16px 15px;
`

function Popular() {
    return (
        <section>
            <Title $align="center">
                <Div>
                    Populares
                </Div>
            </Title>
            <Section>
                { Pics.map(pic => <Img key={pic.id} src={pic.path} width={264.5} alt={pic.alt} />) }
            </Section>
            <Button>
                Ver mais
            </Button>
        </section>
    )
}

export default Popular