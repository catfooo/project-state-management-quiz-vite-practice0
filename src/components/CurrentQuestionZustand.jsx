import useQuizStore from "../stores/useQuizStore"; // Adjust the path accordingly

export const CurrentQuestionZustand = () => {
  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );
  const question = questions[currentQuestionIndex];

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  const nextQuestion = () => {
    useQuizStore.getState().goToNextQuestion()
  }

  return (
    <div className="managed-component">
      <h2>Using Zustand</h2>
      <h1>Question: {question.questionText}</h1>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}><input type="radio" name="options"/>{option}</li>
        ))}
      </ul>
      <button onClick={nextQuestion}>okej</button>
    </div>
  );
};
