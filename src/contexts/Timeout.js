import React from "react";

const {Provider, Consumer} = React.createContext({
	isShow: false,
	showTime: ()=>{
		return 100;
	},
});

const withTime = Component => props => {
	return (
		<Consumer>
			{({ isShow, showTime}) => <Component{...props} showTime={showTime} />}
		</Consumer>
	);
};



export {Provider,withTime};

