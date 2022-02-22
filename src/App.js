import "./App.css";
import NavBar from "./Components/NavBar.js";
import Footer from "./Components/Footer.js";
import Form from "./Components/Form.js";

function App() {
  return (
    <div class="main-container">
        <header>
          <NavBar />
        </header>
        <div class="body-container">
          <Form/>
        </div>
        <Footer />
    </div>
  );
}

export default App;
