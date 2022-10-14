import './Home.css';
import Playlist from '../../components/Playlist/Playlist';
import Footer from '../../components/Footer/Footer';
// colocar o <Reprodutor/> em cada album...
function Home() {
    return (
        <>
            <Playlist/>
            <div id="footer">
                <Footer/>
            </div>
            
        </>
    );
  }
  
export default Home;