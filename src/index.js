import 'core-js/fn/object/assign';
import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Main from './components/Main.js'
import Rechart from './components/Rechart.js';
import LineChart from './components/LineChart.js';
import PieChart from './components/PieChart.js';
import BarChart from './components/BarChart.js';
import AreaChart from './components/AreaChart.js';
import SameDataComposedChart from './components/SameDataComposedChart.js';
import SpecifiedChart from './components/SpecifiedChart.js';

// Render the main component into the dom
//ReactDOM.render(<Rechart/>, document.getElementById('app'));
render((
	<Router history={browserHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Rechart}/>
			<Route path='/barchart' component={BarChart}/>
			<Route path='/linechart' component={LineChart}/>
			<Route path='/piechart' component={PieChart}/>
			<Route path='/areachart' component={AreaChart}/>
			<Route path='/samedatacomposedchart' component={SameDataComposedChart}/>
			<Route path='/specifiedchart' component={SpecifiedChart}/>
		</Route>
	</Router>
), document.getElementById('app'));
