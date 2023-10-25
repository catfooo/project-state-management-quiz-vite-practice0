import useQuizStore from "../stores/useQuizStore"; // Adjust the path accordingly
import './CurrentQuestionZustand.css'

export const CurrentQuestionZustand = () => {
  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );
  const question = questions[currentQuestionIndex];
  const goToNextQuestion = useQuizStore((state) => state.goToNextQuestion)
  const totalQuestions = questions.length
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
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
      <button onClick={goToNextQuestion}>Next</button>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}>
          {currentQuestionIndex + 1} / {totalQuestions}
        </div>
      </div>
    </div>
  );
};
