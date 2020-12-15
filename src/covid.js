import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
class Covid extends React.Component{

	constructor(props){
		super(props);
		this.state={
			covidData:[],
			loading:true
		}
	}	
	componentDidMount() {
		this.getRemoteData();
	}
	

	getRemoteData=()=>{
		let self=this;
		axios.get('https://coronavirus-19-api.herokuapp.com/countries').then(function(response){
		self.setState({
			covidData:response.data,
			loading:false
			})
		}).catch(function(error){
		
		});
	};
	render(){
		return(
				<div>{this.state.loading?<div>Page is loading...</div>:
				<div>{this.state.covidData.map((data)=><div>{data.country}</div>)}</div>}
				</div>			   
		);
	}
};
export default Covid;