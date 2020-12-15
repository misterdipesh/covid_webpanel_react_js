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
					<p className='datas'style={{background:"#fc52f0",color:"white",borderRadius:"12px",padding:"5px",width:"300px"}}>Total cases: {item.cases}</p>
					<p className='datas'style={{background:"red",color:"white",borderRadius:"12px",padding:"5px",width:"300px"}}>Total Deaths: {item.deaths}</p>
					<p className='datas'style={{background:"green",color:"white",borderRadius:"12px",padding:"5px",width:"300px"}}>Total Recovered: {item.recovered}</p>
					<p className='datas'style={{background:"blue",color:"white",borderRadius:"12px",padding:"5px",width:"300px"}}>Active Cases: {item.active}</p>
					<p className='datas'style={{background:"#800000",color:"white",borderRadius:"12px",padding:"5px",width:"300px"}}>Critical Cases: {item.critical}</p>
					<p className='datas'style={{background:"#ffe963",color:"white",borderRadius:"12px",padding:"5px",width:"300px"}}>New Cases: {item.todayCases}</p>
					<p className='datas'style={{background:"#ae3200",color:"white",borderRadius:"12px",padding:"5px",width:"300px"}}>New Deaths: {item.todayDeaths}</p>
				</div>
			</div>
		</div>
		
		);
	}
}
export default Covidpanel;
