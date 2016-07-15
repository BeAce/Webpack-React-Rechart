import React from 'react';
import NavLink from './NavLink.js';


export default React.createClass({
  render() {
    return (
      <div className="nav">
        <h1>Rechart</h1>
        <ul>
          <li><NavLink to='/' onlyActiveOnIndex>Rechart All</NavLink></li>
          <li><NavLink to='/barchart'>Barchart</NavLink></li>
          <li><NavLink to='/linechart'>Linechart</NavLink></li>
          <li><NavLink to='/piechart'>Piechart</NavLink></li>
          <li><NavLink to='/areachart'>Areachart</NavLink></li>
          <li><NavLink to='/samedatacomposedchart'>SameDataComposedChart</NavLink></li>
          <li><NavLink to='/specifiedchart'>SpecifiedChart</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
