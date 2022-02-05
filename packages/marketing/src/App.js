import React from "react";
import { Switch, Route, Router } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from "@material-ui/styles";

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClass = createGenerateClassName({
	productionPrefix: 'ma',
})

/* TODOS: 
** 1. En la pantalla principal, puedes ver una tarjeta con imagen, titulo, descripción, y dos botones; queremos renderizar ese mismo estilo de tarjeta, 
**	  basado en un arreglo llamado "Cards", el cual es en un arreglo de enteros, que representa el número de cada tarjeta. 
**   ¿Cómo podemos renderizar las 9 tarjetas que están en el arreglo, sin repetir el código 9 veces? 

** 2. ¡Necesitamos que la página se vea profesional! ¿Puedes añadir un footer con la siguiente estructura? : 

** 	  												Footer
**											Una descripción muy cool
**										Copyright @Esta es una prueba!!!
**	
**	Este footer tiene que tener un padding que utlice 6 unidades del spacing del tema


** 3. Las tarjetas de precios, en la ventana de "Pricing" se acomodan correctamente tanto en escritorio como en desktop, pero en este último, queda un espacio
**   negativo a la derecha de cada tarjeta. ¿Qué crees que pueda ser y cómo lo solucionarías? 


** 4. ¡El componente que engloba las tres tarjetas de pricing está enorme! ¿Crees poder refactorizarlo? Para que así, el archivo de "Pricing.js" sea más corto y legible.

*/
export default ({ history }) => {
	return <div>
		<StylesProvider generateClassName={generateClass}>
			<Router history={history}>
				<Switch>
					<Route exact path="/pricing" component={Pricing} />
					<Route path="/" component={Landing} />
				</Switch>
			</Router>
		</StylesProvider>
	</div>
}