import React from "react";

import Poème from "../../modèles/poème";
import Background from "../../modèles/background";
import Restaurant from "../../modèles/restaurant";

const GastMicher = () => {
  return (
    <Background>
      <Restaurant 
        title="Gast Micher" 
        source={require("../../../assets/images/GastMicher@3x.png")}
      >
      </Restaurant>

      <Poème></Poème>
    </Background>
  );
};
export default GastMicher;
