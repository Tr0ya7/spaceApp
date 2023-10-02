import { styled } from 'styled-components'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { LuMaximize2 } from 'react-icons/lu'

const Figure = styled.figure`
    width: ${props => props.$maximized ? '90%' : '330px'};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }

    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        
        h3 {
            font-family: 'GandhiSansBold';
        }

        
        h4 {
            flex-grow: 1;
        }

        h3, h4 {
            margin: 0;
            font-size: 16px;
        }
    }
`

const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
        margin: 10px;
        cursor: pointer;
    }
`

function Image({ pic, maximized = false, onToggleFavorite, onMaximize }) {
    const favIcon = pic.favorite ? <AiFillHeart 
                                    onClick={ () => onToggleFavorite(pic) } 
                                   /> : <AiOutlineHeart 
                                            onClick={ () => onToggleFavorite(pic) } 
                                        />
    
    return (
        <Figure $maximized={ maximized } id={`pic-${ pic.id }`}>
            <img src={ pic.path } alt={ pic.alt } />
            <figcaption>
                <h3>
                    { pic.titulo }
                </h3>
                <Footer>
                    <h4>
                        { pic.fonte }
                    </h4>
                    {favIcon}
                    { !maximized && <LuMaximize2 aria-hidden={ maximized } onClick={() => onMaximize(pic)} /> }
                </Footer>
            </figcaption>
        </Figure>
    )
}

export default Image