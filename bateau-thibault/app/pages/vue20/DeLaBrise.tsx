import React from "react";

import Poème from "../../modèles/poème";
import Background from "../../modèles/background";
import Présentation from "../../modèles/présentation";

const DeLaBrise = () => {
  return (
    <Background>
      <Présentation 
        title="De La Brise" 
        source={require("../../../assets/images/DeLaBrise@3x.png")}
      >
      </Présentation>

      <Poème></Poème>
    </Background>
  );
};
export default DeLaBrise;
