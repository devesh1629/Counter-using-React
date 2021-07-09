import React, { useState } from 'react';


const App = () => {
	const state = useState();

	const [count, setCount] = useState(0);

	const IncNum = () => {
		setCount(count + 1);
  };
  const DecNum = () => {
		setCount(count - 1);
	};
	return (
		<div>
			<h1> {count} </h1>
			<button onClick={IncNum}> Increase </button>
      <br/>
      <br/>
      <button onClick={DecNum}> Decrease </button>
		</div>
	);
};
export default App;
