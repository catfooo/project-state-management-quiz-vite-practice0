import { useNavigate } from "react-router-dom";
import useQuizStore from "../stores/useQuizStore"; // Adjust the path accordingly
import './CurrentQuestionZustand.css'

export const CurrentQuestionZustand = () => {
  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );
  const question = questions[currentQuestionIndex];
  // const goToNextQuestion = useQuizStore((state) => state.goToNextQuestion)
  const totalQuestions = questions.length
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100
  const navigate = useNavigate()

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  const handleNextQuestion = () => {
    // move to the next question
    // check if this is the last question
    if (currentQuestionIndex + 1 === totalQuestions) {
      // Call the goToNextQuestion function to set quizOver to true
      useQuizStore.getState().goToNextQuestion();
      // navigate to the summary page when the last question is reached
      // window.location.href = "/summary"
      navigate('/summary')
    } else {
      // otherwise move to the next question
      // useQuizStore.setState((state) => ({ currentQuestionIndex: state.currentQuestionIndex + 1, }))
      useQuizStore.getState().goToNextQuestion()
    }
  }

  return (
    <div className="managed-component">
      <h1>Question: {question.questionText}</h1>
      <div>
        {question.options.map((option, index) => (
          <div key={index}>
            <label>
              <input type="radio" name="radio-btn"/>
              {option}
            </label>
          </div>
        ))}
      </div>
      {/* <button onClick={goToNextQuestion}>Next</button> */}
      <button onClick={handleNextQuestion}>Next</button>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}>
          {currentQuestionIndex + 1} / {totalQuestions}
        </div>
      </div>
    </div>
  );
};
