import React from "react";
import { useHistory } from "react-router-dom";

const AboutPage: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <h1>О нас</h1>
      <p>Супер пупер приложение</p>
      <button className="btn" onClick={() => history.push("/")}>
        Вернуться назад
      </button>
    </>
  );
};

export default AboutPage;
