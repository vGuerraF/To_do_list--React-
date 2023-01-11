import "./TaskDetails.css";

import Button from "components/Button/Button";
import { useParams, useNavigate } from "react-router-dom";

const TaskDetails = () => {
  const params = useParams();

  const navigate = useNavigate();
  const handleGoBackClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="ButtonContainer">
        <Button onClick={handleGoBackClick}>Go Back</Button>
      </div>
      <div className="DescriptionContainer">
        <span>{params.taskTitle}</span>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam iusto
          non aliquam iste minima vero libero quae.
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
