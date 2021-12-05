

import React from 'react';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/';
import About from './pages/about/about';
import Resume from './pages/resume/resume';
import Contact from './pages/contact/contact';

import Navbar from './components/Navbar/Navbar';

function App() {
return (
	<Router>
	<Navbar/>
	<Routes>
		<Route path='/' element={<Home/>} />
		<Route path='/about' element={<About/>} />
		<Route path='/resume' element={<Resume/>} />
		<Route path='/contact' element={<Contact/>} />
		
		
	</Routes>
	</Router>
);
}

export default App;

