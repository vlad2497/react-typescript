import React, { useState } from "react";

interface IFormProps {
  onAdd(title: string): void;
}

const Form: React.FC<IFormProps> = (props) => {
  const [title, setTitle] = useState<string>("");

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const inputKeyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(title);
      setTitle("");
    }
  };

  return (
    <div className="inpit-field mt-2">
      <input
        value={title}
        onChange={inputChangeHandler}
        onKeyPress={inputKeyPressHandler}
        type="text"
        id="title"
        placeholder="Название задачи"
      />
      <label htmlFor="title" className="active">
        Введите задачу
      </label>
    </div>
  );
};

export default Form;
