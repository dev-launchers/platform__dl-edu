import "./styles.css";

import Header from "./master/Header"
import MainContent from "./master/MainContent"
import Footer from "./master/Footer"

export default function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
