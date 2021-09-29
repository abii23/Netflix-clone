
import './App.css';
import Banner from './components/Banner/Banner';
import './components/Navbar/NavBar'
import NavBar from './components/Navbar/NavBar';
import RowPost from './components/RowPost/RowPost';



function App() {
  return (
    <div className="body">

   <NavBar/>
   <Banner/>
   <RowPost/>
   <RowPost/>
   
    </div>
  );
}

export default App;
