import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AllRoutes from '../routes/routing.jsx';
import Navbars from '../components/navbarcomponent/navbarpage';
import Sidebar from '../components/sidebarcomponent/sidebar';

class Fulllayout extends React.Component {
	/*--------------------------------------------------------------------------------*/
	/*Change the layout settings [HEADER,SIDEBAR && DARK LAYOUT] from here            */
	/*--------------------------------------------------------------------------------*/
	constructor(props) {
		super(props);

		this.props.history.listen((location, action) => {
			if (window.innerWidth < 767) {
				console.log("test");
				document.getElementById('main-wrapper').classList.toggle("show-sidebar");
			}
		});
		}



	render() {
		/*--------------------------------------------------------------------------------*/
		/* Theme Setting && Layout Options wiil be Change From Here                       */
		/*--------------------------------------------------------------------------------*/
		return (
		<div id="main-wrapper">
			<Navbars/>
			<Sidebar/>
					<div className="container-fluid">
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
					</div>
				
              
                );
	}
}
export default Fulllayout;
