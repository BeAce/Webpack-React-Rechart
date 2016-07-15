/**
 * Created by beace on 16/7/14.
 */
import React from 'react';
import {Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, Tooltip} from 'recharts';
const data = [
  {subject: 'Math', A: 120, B: 110, fullMark: 150},
  {subject: 'Chinese', A: 98, B: 130, fullMark: 150},
  {subject: 'English', A: 86, B: 130, fullMark: 150},
  {subject: 'Geography', A: 99, B: 100, fullMark: 150},
  {subject: 'Physics', A: 85, B: 90, fullMark: 150},
  {subject: 'History', A: 65, B: 85, fullMark: 150}
];

export default class SpecifiedCharts extends React.Component {
  render() {
    return (
      <div className='container'>
        <h2>功能图</h2>
        <div className='wrapper'>
          <RadarChart cx={300} cy={150} outerRadius={150} width={600} height={400} data={data}>
            <Radar name='Mike' dataKey='A' stroke='blue' fill='blue' fillOpacity={0.6}/>
            <Radar name='Lily' dataKey='B' stroke='yellow' fill='yellow' fillOpacity={0.6}/>
            <PolarGrid/>
            <Legend/>
            <Tooltip/>
            <PolarAngleAxis dataKey='subject'/>
            <PolarRadiusAxis angle={30} domain={[0,150]}/>
          </RadarChart>
        </div>
      </div>
    )
  }
}
