import { styled } from 'styled-components'
import tags from '../../json/tags.json'

const Section = styled.section`
    display: flex;
    align-items: center;
    gap: 64px;
    margin-top: 56px;
`

const H3 = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`

const Button = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    
    &:hover {
      border-color: #C98CF1;
    }
`

const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
`

function Tags({ setTag }) {
    return (
        <Section>
            <H3>
                Busque por tags:
            </H3>
            <Div>
                { tags.map(tag => <Button key={tag.id} onClick={() => setTag(tag.tag)}>
                                    <H3>
                                        {tag.titulo}
                                    </H3>
                                   </Button>) }
            </Div>
        </Section>
    )
}

export default Tags