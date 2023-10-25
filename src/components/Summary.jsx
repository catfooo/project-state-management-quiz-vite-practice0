import useQuizStore from "../stores/useQuizStore";
import { useNavigate } from "react-router-dom";

export const Summary = () => {
  const quizOver = useQuizStore((state) => state.quizOver);
  const restart = useQuizStore((state) => state.restart);
  const navigate = useNavigate()

  const handleRestartClick = () => {
    restart()
    navigate('/')
  }
  return (
    <div className="summary-part">
        <p>test</p>
      {/* create the summary part, show the how many questions that user has answered correct
        <p>You have answered 2 correct questions</p> 
        */}
      {/* show the picture when the user answered how many correct questions */}
      {/* restart button */}
      {quizOver && (
        <button className="restart-btn" onClick={handleRestartClick}>
          Restart
        </button>
      )}
    </div>
  );
};
