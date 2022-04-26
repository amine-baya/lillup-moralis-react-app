import "./styles.css";
import ProfileHolder from "./profileHolder/ProfileHolder";
import CreateHolder from "./createHolder/CreateHolder";
import PortfolioHolder from "./portfolioHolder/PortfolioHolder";
import LearnerPage from "./learnerPage/LearnerPage";
import Footer from "./component/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChartHolder from "./chartHolder/ChartHolder";
import Header from "./component/header/Header";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProfileHolder />} />
          <Route path="/creator" element={<CreateHolder />} />
          <Route path="/portfolio" element={<PortfolioHolder />} />
          <Route path="/chart" element={<ChartHolder />} />
          <Route path="/learner" element={<LearnerPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
