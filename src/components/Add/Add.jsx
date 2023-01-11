import "./Add.css";

import Button from "components/Button/Button";

const Add = ({ handleInputChange, inputValue, handleAddButtonClick }) => {
  return (
    <div className="AddBar">
      <input
        onChange={handleInputChange}
        value={inputValue}
        id="inputAdd"
        type="text"
      />
      <Button onClick={handleAddButtonClick}>Add Task</Button>
    </div>
  );
};

export default Add;
