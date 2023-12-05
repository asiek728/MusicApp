import './App.css'
import { ArtistInfo, ListSongs, CommentsForm } from './components'

function App() {

  return (
    <>
      <ArtistInfo />
      <ListSongs />
      <br /><br />
      <CommentsForm />

      <p className="read-the-docs">
        Footer
      </p>
    </>
  )
}

export default App
