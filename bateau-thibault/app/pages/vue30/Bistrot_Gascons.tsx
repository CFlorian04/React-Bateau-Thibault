import React from "react";

import Poème from "../../modèles/poème";
import Background from "../../modèles/background";
import Restaurant from "../../modèles/présentation";

const Bistrot_Gascons = () => {
  return (
    <Background>
      <Restaurant 
        title="Bistrot des Gascons" 
        source={require("../../../assets/images/desGascons.png")}
      >
      </Restaurant>

      <Poème></Poème>
    </Background>
  );
};
export default Bistrot_Gascons;
