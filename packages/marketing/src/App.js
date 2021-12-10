import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from "@material-ui/styles";

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClass = createGenerateClassName({
	productionPrefix: 'ma',
})

export default () => {
	return <div>
		<StylesProvider generateClassName={generateClass}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/pricing" component={Pricing} />
					<Route path="/" component={Landing} />
				</Switch>
			</BrowserRouter>
		</StylesProvider>
	</div>
}