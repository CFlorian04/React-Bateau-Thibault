import React from "react";

import Poème from "../../modèles/poème";
import Background from "../../modèles/background";
import Présentation from "../../modèles/présentation";

const Saphir = () => {
  return (
    <Background>
      <Présentation 
        title="Saphir" 
        source={require("../../../assets/images/Saphir@3x.png")}
      >
      </Présentation>

      <Poème></Poème>
    </Background>
  );
};
export default Saphir;
