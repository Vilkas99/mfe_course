import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';


/* TODOS: 
** 1. El enrutado de la aplicación funciona, pero la barra de direcciones no se actualiza, a pesar de que su contenido sí. 
** 		Por ejemplo: Si haces click en "pricing" te llevará a la ventana de pricing, y si haces click en "App" te llevará a la pantalla principal.
**		pero en ambos casos, la barra de direcciones sigue siendo la misma.

** 2. El botón de Login, por el momento, tiene la palabra "Login" completamente fija, queremos que cuando el usuario se desplace a "localhost:8080/pricing", el botón
	  mueste el texto: "Lo lograste!"
*/

import Header from './components/Header';

const MarketingLazy = lazy(() => import('./components/MarketingApp'))

const AuthLazy = lazy(() => import('./components/AuthApp'))

const generateClass = createGenerateClassName({
	productionPrefix: 'co',
})


export default () => {
	const [isSigneId, setIsSigneId] = useState(false)
	return (<BrowserRouter>
		<StylesProvider generateClassName={generateClass}>
			<div>
				<Header onSignOut={() => setIsSigneId(false)} isSignedIn={isSigneId} />
				<Suspense fallback={<div>Cargando...</div>}>
					<Switch>
						<Route path="/auth">
							<AuthLazy onSignIn={() => setIsSigneId(true)} />
						</Route>
						<Route path="/" component={MarketingLazy} />
					</Switch>
				</Suspense>
			</div>
		</StylesProvider>
	</BrowserRouter>)
}