import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { CurrentQuestionZustand } from "./components/CurrentQuestionZustand";
import { Summary } from "./components/Summary";

export const App = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<CurrentQuestionZustand />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </Router>
    
      // <div>
      //   <CurrentQuestionZustand />
      //   <Summary />
      // </div>
    
  );
};
