import "./App.css";
import Footer from "./components/Footer/Footer";
import Upperbox from "./Containers/upper/Upperbox";
import Pages from "./Pages/Pages";

function App() {
  return (
    <div className="App">
      <Upperbox />
      <Pages />
      <Footer />
    </div>
  );
}

export default App;
