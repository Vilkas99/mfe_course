import React from "react";
import { Switch, Route, Router } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from "@material-ui/styles";

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClass = createGenerateClassName({
	productionPrefix: 'ma',
})

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