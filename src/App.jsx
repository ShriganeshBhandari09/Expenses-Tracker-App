import "./App.css";
import ExpenseApp from "./components/ExpenseApp";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AppProvider from "./Context/AppProvider";

function App() {
  return (
    <>
      <AppProvider>
        <Navbar />
        <ExpenseApp />
        <Footer />
      </AppProvider>
    </>
  );
}

export default App;
