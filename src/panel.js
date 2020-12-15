import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class Covidpanel extends Component{
	render(){
		return(
		<div>{this.props.data.country}
		</div>
		
		);
	}
}
export default Covidpanel;
