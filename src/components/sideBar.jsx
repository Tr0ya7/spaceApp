import { styled } from "styled-components"
import NavItem from "./navItem"

const Ul = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`

function SideBar() {
    return (
        <aside>
            <nav>
                <Ul>
                    <NavItem active activeIcon="/icons/active-home.png" InactiveIcon="/icons/home.png">
                            Início
                    </NavItem>
                    <NavItem activeIcon="/icons/active-eye.png" InactiveIcon="/icons/eye.png">
                        Mais vistas
                    </NavItem>
                    <NavItem activeIcon="/icons/active-like.png" InactiveIcon="/icons/like.png">
                        Mais curtidos
                    </NavItem>
                    <NavItem activeIcon="/icons/active-new.png" InactiveIcon="/icons/new.png">
                        Novas
                    </NavItem>
                    <NavItem activeIcon="/icons/active-lamp.png" InactiveIcon="/icons/lamp.png">
                        Surpreeda-me
                    </NavItem>
                </Ul>
            </nav>
        </aside>
    )
}

export default SideBar