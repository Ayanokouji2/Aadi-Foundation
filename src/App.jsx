import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import { UserProvider } from './Context/user.context'
const App = () => {
	const [user, setUser] = useState(null);
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home setUser={setUser} />} />
				<Route path='/profile' element={user ? <Profile userData={user} /> : <h1>Please Login In First</h1>} />
			</Routes>
		</div>
	)
}

export default App