import React from "react";
import { Switch, Route, Router } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from "@material-ui/styles";

import Signin from './components/Signin'
import Signup from './components/Signup'


const generateClass = createGenerateClassName({
	productionPrefix: 'au',
})

export default ({ history, onSignIn }) => {
	return <div>
		<StylesProvider generateClassName={generateClass}>
			<Router history={history}>
				<Switch>
					<Route path="/auth/signin" >
						<Signin onSignIn={onSignIn} />
					</Route >
					<Route path="/auth/signup">
						<Signup onSignIn={onSignIn} />
					</Route>
				</Switch>
			</Router>
		</StylesProvider>
	</div>
}