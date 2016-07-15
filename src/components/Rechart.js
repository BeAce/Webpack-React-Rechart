/**
 * Created by beace on 16/7/14.
 */
require('styles/App.css');
import React from 'react';
import LineChart from './LineChart.js';
import BarChart from './BarChart.js';
import AreaChart from './AreaChart.js';
import SameDataComposedChart from './SameDataComposedChart.js';
import PieChart from './PieChart.js';
import SpecifiedChart from './SpecifiedChart.js';
const data = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
  {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
  {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
  {name: 'Page G', uv: 3490, pv: 4300, amt: 2100}
];

export default class Rechart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      model: data
    }
  }

  render() {
    var model = this.state.model;
    return (
      <div className='chart-container'>
        <LineChart data={model}/>
        <BarChart data={model}/>
        <AreaChart data={model}/>
        <SameDataComposedChart data={model}/>

        <PieChart/>
        <SpecifiedChart/>
      </div>

    );
  }
}
