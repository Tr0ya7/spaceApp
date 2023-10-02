import { styled } from 'styled-components'
import { BsFacebook } from 'react-icons/bs'
import { AiFillTwitterCircle, AiOutlineInstagram } from 'react-icons/ai'

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 100px;
    background-color: #04244F;
    padding: 22px;
    box-sizing: border-box;
`

const Ul = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;

    li {
        display: inline-block;
        margin-right: 32px;
    }
`

const P = styled.p`
    font-size: 16px;
    color: white;
    margin: 0;
`

function Footer() {
    return (
        <StyledFooter>
            <Ul>
                <li>
                    <a href="#">
                        <BsFacebook />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <AiFillTwitterCircle />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <AiOutlineInstagram />
                    </a>
                </li>
            </Ul>
            <P>
                Desenvolvido por Luiz Henrique
            </P>
        </StyledFooter>
    )
}

export default Footer