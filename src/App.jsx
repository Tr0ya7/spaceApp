import { styled } from "styled-components"
import Banner from "./components/banner"
import Globals from "./components/globals"
import Header from "./components/header"
import SideBar from "./components/sideBar"
import banner from '../public/images/banner.png'
import Pics from '../json/fotos.json'
import { useState, useEffect } from "react"
import Gallery from "./components/gallery"
import Maximized from "./components/maximized"
import Footer from "./components/footer"

const GradientBackground = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244f 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const Div = styled.div`
  padding: 0 50px;
  margin: 0 auto;
  max-width: 100%;
`

const Main = styled.main`
  display: flex;
  gap: 24px;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

function App() {
  const [picsInPhotos, setPicsInPhotos] = useState(Pics)
  const[selectedPic, setSelectedPic] = useState(null)
  const [filter, setFilter] = useState('')
  const [tag, setTag] = useState(0)
  
  function onToggleFavorite(pic) {
    if (pic.id === selectedPic?.id) {
      setSelectedPic({
        ...selectedPic,
        favorite: !selectedPic.favorite
      })
    }

    setPicsInPhotos(picsInPhotos.map(picInGallerySelected => {
      return {
        ...picInGallerySelected,
        favorite: picInGallerySelected.id === pic.id ? !pic.favorite : picInGallerySelected.favorite
      }
    }))
  }

  useEffect(() => {
    const filterPics = Pics.filter(pic => {
      const filterByTags = !tag || pic.tagId === tag;
      const filterByTitle = !filter || pic.titulo.toLowerCase().includes(filter.toLowerCase())

      return filterByTags && filterByTitle
    })

    setPicsInPhotos(filterPics)
  }, [filter, tag])

  return (
    <GradientBackground>
      <Globals />
      <Div>
        <Header />
        <Main>
          <SideBar />
          <Section>
            <Banner backgroundImage={ banner }>
              A galeria mais completa de fotos do espaço!
            </Banner>
            <Gallery
              value={ picsInPhotos }
              photoSelected={ pic => setSelectedPic(pic) }
              onToggleFavorite={ onToggleFavorite }
            />
          </Section>
        </Main>
      </Div>
      <Maximized 
        pic={ selectedPic } 
        onClose={() => setSelectedPic(null)} 
        onToggleFavorite={ onToggleFavorite }
      />
      <Footer />
    </GradientBackground>
  )
}

export default App