import Error from './Pagina-Error.png';
import Nav from '../../components/nav/Nav';

function Error404() {
	return(
		<div>
			<Nav />
			<div className="fondoerror text-center mt-3">
				<h2 className="tituloerror">Página No Encontrada</h2>
				<img src={Error} width="650px" />
			</div>
		</div>
		);

}
export default Error404;
