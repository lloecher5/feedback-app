import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import FeedbackList from "./components/FeedBackList";

import FeedBackStats from "./components/FeedBackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedBackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <>
          <Header text="Feedback UI" />
          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <FeedbackForm />
                    <FeedBackStats />
                    <FeedbackList />
                  </>
                }
              ></Route>
              <Route exact path="/about" element={<AboutPage />} />
            </Routes>
            <AboutIconLink />
          </div>
        </>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
