import React from "react";

import Poème from "../../modèles/poème";
import Background from "../../modèles/background";
import Restaurant from "../../modèles/présentation";

const Aquilon = () => {
  return (
    <Background>
      <Restaurant 
        title="Aquilon" 
        source={require("../../../assets/images/Aquilon@3x.png")}
      >
      </Restaurant>

      <Poème></Poème>
    </Background>
  );
};
export default Aquilon;
