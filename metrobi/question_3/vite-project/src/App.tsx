import "./App.scss";
import ExtraContent from "./components/extraContent";
import Footer from "./components/footer";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import MainContent from "./components/mainContent";
import RelatedImages from "./components/relatedImages";
import RelatedPost from "./components/relatedPost";
import SideBar from "./components/sideBar/sideBar";

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <MainContent />
      <SideBar />
      <ExtraContent />
      <RelatedImages />
      <RelatedPost />
      <Footer />
    </div>
  );
}

export default App;
