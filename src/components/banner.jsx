import { styled } from "styled-components"

const Figure = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
`

const H1 = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: white;
    max-width: 300px;
    padding: 0 64px;
`

function Banner({ backgroundImage, children }) {
    return (
        <Figure $backgroundImage={ backgroundImage }>
            <H1>
                { children }
            </H1>
        </Figure>
    )
}

export default Banner