

import './cardcoctelmes.css';


function Cardcoctelmes(props){

	return(

		<div className="cardmes h-100">
           	<img className="card-img-top" src={props.imgcard} alt="..." />
           	<div className="card-body">
	           	<h5 className="card-title"><img className="icon1" src={props.iconocard} />{props.titulocard}</h5>
	           	<p className="card-text">{props.parrafo}</p>
	           <p>{props.desc1}</p>
		       <p>{props.desc2}</p>
		       <p>{props.desc3}</p>
	       </div>
        </div>

		);
}

export default Cardcoctelmes;