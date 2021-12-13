import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';


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