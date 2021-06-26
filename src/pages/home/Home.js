import './home.css';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';
import Seccionquienes from '../../components/seccionquienes/Seccionquienes';
import Carrusel from '../../components/carrusel/Carrusel';
import Seccioncoctelmes from '../../components/seccioncoctelmes/Seccioncoctelmes';
function Home() {
	return(
		<div>
		    <Nav />
        <Carrusel /> 
		    <Seccionquienes />
		    <Seccioncoctelmes />   
      	<Footer />
		</div>

		);
}
export default Home;
