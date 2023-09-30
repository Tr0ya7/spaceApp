import { styled } from "styled-components"
import TextField from "./textField"

const HeaderStyle = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    
    img {
        max-width: 212px;
    }
`

function Header() {
    return (
        <HeaderStyle>
            <a href="/">
                <img src="/images/logo.png" alt="logo" />
            </a>
            <TextField />
        </HeaderStyle>
    )
}

export default Header