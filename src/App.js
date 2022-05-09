import Mainroutes from "./components/Mainroutes";
import Navbar from "./components/Header/Navbar";
import { BrowserRouter, Link } from "react-router-dom";

import Productpage from "./components/Header/Productpage";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./components/Context/CartProvider";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Productpage />
      <Mainroutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
