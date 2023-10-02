import { styled } from "styled-components"
import Image from "./image"
import { AiOutlineClose } from 'react-icons/ai'

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
            background: none;
            border: none;
            cursor: pointer;
        }
    }
`

function Maximized({ pic, onClose, onToggleFavorite }) {
    return (
        <>
            {pic && <>
                <Overlay />
                <Dialog open={ !!pic } onClose={ onClose }>
                    <Image pic={ pic } maximized={true} onToggleFavorite={ onToggleFavorite } />
                    <form method="dialog">
                        <button>
                            <AiOutlineClose color="white" />
                        </button>
                    </form>
                </Dialog>
            </>}
        </>
    )
}

export default Maximized