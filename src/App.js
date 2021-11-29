import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import EditPost from './EditPost'
import About from './About'
import Missing from './Missing'
import { useEffect } from 'react'
import useAxiosFetch from './hooks/useAxiosFetch'
import { useStoreActions } from 'easy-peasy'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import { DataProvider } from './context/DataContext'

function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts)

  const { data, fetchError, isLoading } = useAxiosFetch(
    'http://localhost:3500/posts'
  )

  useEffect(() => {
    setPosts(data)
  }, [data, setPosts])
  return (
    <div className="App">
      <Router>
        <Header title={'Blog Zone'} />
        {/* <DataProvider> */}
        <Nav />

        <Routes>
          <Route
            path="/"
            element={<Home fetchError={fetchError} isLoading={isLoading} />}
          />

          <Route path="/post" element={<NewPost />} />

          <Route path="/post/:id" element={<PostPage />} />

          <Route path="/about" element={<About />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        {/* </DataProvider> */}
        <Footer />
      </Router>
    </div>
  )
}

export default App
