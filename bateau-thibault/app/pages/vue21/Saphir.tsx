import React from "react";

import Poème from "../../modèles/poème";
import Background from "../../modèles/background";
import Restaurant from "../../modèles/restaurant";

const Saphir = () => {
  return (
    <Background>
      <Restaurant 
        title="Saphir" 
        source={require("../../../assets/images/Saphir@3x.png")}
      >
      </Restaurant>

      <Poème></Poème>
    </Background>
  );
};
export default Saphir;
