/**
 * Created by beace on 16/7/14.
 */
import React from 'react';
import {ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
const data = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
  {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
  {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
  {name: 'Page G', uv: 3490, pv: 4300, amt: 2100}
];
export default class SameDataComposedCharts extends React.Component {
  render() {
    return (
      <div className='container'>
        <h2>组件叠加图</h2>
        <div className='wrapper'>
          <ResponsiveContainer>
            <ComposedChart width={600} height={400} data={data} margin={{top:20,right:20,left:20,bottom:20}}>
              <XAxis dataKey='name'/>
              <YAxis/>
              <Tooltip/>
              <Legend/>
              <CartesianGrid stroke='#f5f5f5'/>
              <Bar dataKey='uv' barSize={20} fill='#413ea0'/>
              <Line type='monotone' dataKey='uv' stroke='#ff7300'/>
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    )
  }
}
