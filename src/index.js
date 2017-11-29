import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import ReactDOM from 'react-dom';

injectTapEventPlugin ();



class App extends Component {
	render (){
		return (

				<MuiThemeProvider>
						<AppBar 
							title = "Hubii"
							iconClassNameRight="muidocs-icon-navigation-expand-more"
						/>
					</MuiThemeProvider>
			);
	};
};


	ReactDOM.render(<App />, document.getElementById('root'));
