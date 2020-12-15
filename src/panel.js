import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './panel.css'
class Covidpanel extends Component{
	render(){
		let item=this.props.data;
		return(
		<div>
			<div>
				<p className='header'>{item.country}</p>
				<div className='maindiv'>
					<p className='datas'>Total cases: {item.cases}</p>
					<p className='datas'>Total Deaths: {item.deaths}</p>
					<p className='datas'>Total Recovered: {item.recovered}</p>
					<p className='datas'>Active Cases: {item.active}</p>
					<p className='datas'>New Cases: {item.todayCases}</p>
					<p className='datas'>New Deaths: {item.todayDeaths}</p>
				</div>
			</div>
		</div>
		
		);
	}
}
export default Covidpanel;
