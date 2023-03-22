import React from "react";

//create your first component
const Home = ({hours, minutes, seconds}) => {
	return (
		<div>
			<h1>Browser Counter</h1>
			<h2>{hours}:{minutes}:{seconds}</h2>
		</div>
	);
};

export default Home;
