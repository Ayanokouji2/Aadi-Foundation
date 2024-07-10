import { Routes, Route } from 'react-router-dom';
import FacebookLogin from './Components/facebook/Facebook';

export default function App() {
	return (
		<Routes className="">
			<Route path='/' exact element={<FacebookLogin />} />
		</Routes>
	)
}