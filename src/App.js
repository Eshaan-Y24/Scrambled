import "./App.css";
import Container from "./components/Container";
import Container2 from "./components/Container2";
import Container3 from "./components/Container3";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container />
      <Container2 />
      <Container3 />
      <Footer />
    </div>
  );
}

export default App;
