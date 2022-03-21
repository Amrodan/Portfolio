import './App.css';
import About from './components/About';
import Header from './components/Header';
import Nav from './components/Nav';
import Testimonials from './components/Testimonials';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
	return (
		<div>
			<Header />
			<Nav />
			<About />
			<Experience />
			<Services />
			<Testimonials />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
