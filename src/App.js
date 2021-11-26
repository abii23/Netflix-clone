
import './App.css';
import Banner from './components/Banner/Banner';
import './components/Navbar/NavBar'
import NavBar from './components/Navbar/NavBar';
import RowPost from './components/RowPost/RowPost';
import {netflixOrginals,Action} from './url'



function App() {
  return (
    <div className="body">

   <NavBar/>
   <Banner/>
   <RowPost title='Netflix Orginals' url={netflixOrginals}/>
   <RowPost title='Action' url={Action} isSmall/>
   
    </div>
  );
}

export default App;
