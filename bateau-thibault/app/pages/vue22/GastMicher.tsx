import React from "react";

import Poème from "../../modèles/poème";
import Background from "../../modèles/background";
import Présentation from "../../modèles/présentation";

const GastMicher = () => {
  return (
    <Background>
      <Présentation 
        title="Gast Micher" 
        source={require("../../../assets/images/GastMicher@3x.png")}
      >
      </Présentation>

      <Poème></Poème>
    </Background>
  );
};
export default GastMicher;
