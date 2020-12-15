import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
const Covid=()=>{

	componentDidMount() {
		this.getRemoteData();
	};
	constructor(props){
		super(props);
		this.state={
			covidData:[]
		}
	}	
	

	getRemoteData=()=>{
		let self=this;
		axios.get('https://coronavirus-19-api.herokuapp.com/countries').then(function(response){
		self.setState(){
			covidData:response.data
		}
		}).catch(function(error){
		
		});
	};

		return(
		<div>
			hello
		</div>
		);
};
export default Covid;