import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
  } from "react-router-dom";
  import FormResume from "../FormResume";
  import Home from "../Home";
  import FormResume2 from "../FormResume2";
  import FormResume3 from "../FormResume3";
  import FormResume4 from "../FormResume4";
  import Resume from "../Templates/Resume";
  import FormQuestion from "../FormQuestion";
  import FormQuestion2 from "../FormQuestion2";
  import FormQuestion3 from "../FormQuestion3";
  import QuestionPaper from "../Templates/QuestionPaper";
  
  export default function AppRouter() {

  document.body.style = 'background: #151515;';

    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formresume" element={<FormResume />} />
          <Route path="/formresume2" element={<FormResume2 />} />
          <Route path="/formresume3" element={<FormResume3 />} />
          <Route path="/formresume4" element={<FormResume4 />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/formquestion" element={<FormQuestion />} />
          <Route path="/formquestion2" element={<FormQuestion2 />} />
          <Route path="/formquestion3" element={<FormQuestion3 />} />
          <Route path="/questionpaper" element={<QuestionPaper />} />
                     
        </Routes>
        
      </>
    );
  }