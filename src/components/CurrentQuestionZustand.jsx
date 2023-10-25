import useQuizStore from "../stores/useQuizStore"; // Adjust the path accordingly

export const CurrentQuestionZustand = () => {
  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );
  const question = questions[currentQuestionIndex];
  const goToNextQuestion = useQuizStore((state) => state.goToNextQuestion)

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
              <input type="radio" name="options"/>
              {option}
            </label>
          </div>
        ))}
      </div>
      <button onClick={goToNextQuestion}>okej</button>
    </div>
  );
};
