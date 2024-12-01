import "./App.css";
import ExpenseApp from "./components/ExpenseApp";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <ExpenseApp />
      <Footer/>
    </>
  );
}

export default App;
