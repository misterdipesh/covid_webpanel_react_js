import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Covidpanel from './panel';
import ErrorComponent from './error';
import './panel.css';
class Covidapicall extends React.Component{

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
	onRetry=()=>{
		this.setState({error:false,loading:true});
		this.getRemoteData();
	};
	   handleChange=(event)=>{
        let data=this.state.covidData.filter(function (val) {
            if(val.country.toLowerCase().indexOf(event.target.value.toLowerCase())!=-1){
                return val;
            }
        });
        this.setState({
            duplicateData:data
        })
    };

	getRemoteData=()=>{
		let self=this;
		axios.get('https://coronavirus-19-api.herokuapp.com/countries').then(function(response){
		self.setState({
			covidData:response.data,
			duplicateData:response.data,
			loading:false,
			error:false
			})
		}).catch(function(error){
			self.setState({
				error:true
			})
		});
	};
	render(){
		return(
				<div>
				{this.state.error?<ErrorComponent Retry={this.onRetry}/>:this.state.loading?<div>Page is loading...</div>:
				<div><input className="searchbar" type="text"placeholder="Search a country..."onChange={this.handleChange} />{this.state.duplicateData.map((data)=><Covidpanel data={data}/>)}</div>}
				</div>			   
		);
	}
};
export default Covidapicall;