import React from "react";

import Poème from "../../modèles/poème";
import Background from "../../modèles/background";
import Présentation from "../../modèles/présentation";

const Bistrot_Gascons = () => {
  return (
    <Background>
      <Présentation 
        title="Bistrot des Gascons" 
        source={require("../../../assets/images/desGascons.png")}
      >
      </Présentation>

      <Poème></Poème>
    </Background>
  );
};
export default Bistrot_Gascons;
