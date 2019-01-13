import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AllRoutes from '../routes/routing.jsx';

class Fulllayout extends React.Component {
	/*--------------------------------------------------------------------------------*/
	/*Change the layout settings [HEADER,SIDEBAR && DARK LAYOUT] from here            */
	/*--------------------------------------------------------------------------------*/
	constructor(props) {
		super(props);
		}



	render() {
		/*--------------------------------------------------------------------------------*/
		/* Theme Setting && Layout Options wiil be Change From Here                       */
		/*--------------------------------------------------------------------------------*/
		return (
		
					<div className="page-content container-fluid">
						<Switch>
							{AllRoutes.map((prop, key) => {
								if (prop.redirect) {
									return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
								}
								else {
									return (
										<Route path={prop.path} component={prop.component} key={key} />
									);
								}
							})}
						</Switch>
					</div>
				
              
                );
	}
}
export default Fulllayout;
