import React from "react";

import Poème from "../../modèles/poème";
import Background from "../../modèles/background";
import Restaurant from "../../modèles/présentation";

const DeLaBrise = () => {
  return (
    <Background>
      <Restaurant 
        title="De La Brise" 
        source={require("../../../assets/images/DeLaBrise@3x.png")}
      >
      </Restaurant>

      <Poème></Poème>
    </Background>
  );
};
export default DeLaBrise;
