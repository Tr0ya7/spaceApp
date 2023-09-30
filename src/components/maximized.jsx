import { styled } from "styled-components"
import Image from "./image"

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, .7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const Dialog = styled.dialog`
    position: fixed;
    top: 35px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 800px;
    display: flex;
    justify-content: center;
    
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`

function Maximized({ pic }) {
    return (
        <>
            {pic && <>
                <Overlay />
                <Dialog open={ !!pic }>
                    <Image pic={ pic } maximized={true} />
                    <form method="dialog">
                        <button>
                            Ok
                        </button>
                    </form>
                </Dialog>
            </>}
        </>
    )
}

export default Maximized