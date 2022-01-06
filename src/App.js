import './assets/css/main.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/UI/Header'
import Footer from './components/UI/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import RecipesPage from './pages/RecipesPage'
import RecipesDetailPage from './pages/RecipesDetailPage'

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/about' element={<AboutPage></AboutPage>}></Route>
          <Route path='/contact' element={<ContactPage></ContactPage>}></Route>
          <Route path='/recipes' element={<RecipesPage></RecipesPage>}></Route>
          <Route path='/recipes/:recipeId' element={<RecipesDetailPage></RecipesDetailPage>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  )
}

export default App
