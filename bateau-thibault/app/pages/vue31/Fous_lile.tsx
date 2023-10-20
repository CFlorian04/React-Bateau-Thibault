import React from "react";
import Poème from "../../modèles/poème";
import Background from "../../modèles/background";
import Restaurant from "../../modèles/présentation";


const Fous_lile = () => {
  return (
    <Background>
        <Restaurant
          title="Les fous de l'île"
          source={require("../../../assets/images/fousDeLIle.png")}
        >
        </Restaurant>
      <Poème></Poème>
    </Background>
  );
};
export default Fous_lile;
