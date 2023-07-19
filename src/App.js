
import Apropos from "./pages/Apropos/Apropos";
import './App.css'
import Home from "./pages/home/Home";
import Erreur from "./pages/Erreur/Erreur";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loge from "./pages/Loge/Loge";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";



const App = () => {

	
    return (
		<>
		
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/logement/:id" element={<Loge />} />
				<Route path="/apropos" element={<Apropos />} />	
				<Route path="/" element={<Home />} />							
				<Route path="*" element={<Erreur />} />			
			</Routes>
			<Footer />
		</BrowserRouter>

		

		</>

  );
}

export default App;




