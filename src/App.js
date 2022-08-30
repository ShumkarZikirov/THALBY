
import './App.css';

import Header from "./components/header/header";
import HeaderInfo from "./components/header-info/header-info";
import MainCards from "./components/main-card/main-cards";
import MainInfo from "./components/main-info/main-info";
import MainInfo2 from "./components/main-info2/main-info2";
import MainInfo3 from "./components/main-info3/main-info3";
import MainColors from "./components/main-colors/main-colors";
import MainPeople from "./components/main-people/main-people";
import Form from "./components/form/form";
import Footer from "./components/footer/footer";
function App() {
  return (
    <div className="App">
        <Header/>
        <HeaderInfo/>
        <MainCards/>
        <MainInfo/>
        <MainInfo2/>
        <MainInfo3/>
        <MainColors/>
        <MainPeople/>
        <Form/>
        <Footer/>
    </div>
  );
}

export default App;
