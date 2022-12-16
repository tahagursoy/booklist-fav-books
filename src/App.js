
import './App.css';
import NavigationBar from './components/navigationBar'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import BookList from './pages/BookList'
import BookDetails from './pages/BookDetails'
import Favourites from './pages/Favourites'
import NotFound from './pages/NotFound';


function App() {
  return (
    <div>
      <NavigationBar />

      <Routes>
        <Route exact strict path='/' element={<HomePage />}></Route>
        <Route exact strict path='/booklist/' element={<BookList />}></Route>
        <Route exact strict path='/booklist/:id' element={<BookDetails />}></Route>
        <Route exact strict path='/favourites' element={<Favourites />}></Route>
        <Route exact strict path='*' element={<NotFound />}></Route>
      </Routes>


      
    </div>
    
  );
}

export default App;
