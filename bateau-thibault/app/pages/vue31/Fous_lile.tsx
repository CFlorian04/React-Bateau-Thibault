import React from "react";
import Poème from "../../modèles/poème";
import Background from "../../modèles/background";
import Présentation from "../../modèles/présentation";


const Fous_lile = () => {
  return (
    <Background>
        <Présentation
          title="Les fous de l'île"
          source={require("../../../assets/images/fousDeLIle.png")}
        >
        </Présentation>
      <Poème></Poème>
    </Background>
  );
};
export default Fous_lile;
