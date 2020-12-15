import React from 'react';
import ReactDOM from 'react-dom';
class ErrorComponent extends React.Component{
	render(){
		return(
			<div>
				<p>Something went wrong<br/>Please try again...</p><br/>
				<button onClick={this.props.Retry}>Retry</button>
			</div>);
	}
};
export default ErrorComponent;