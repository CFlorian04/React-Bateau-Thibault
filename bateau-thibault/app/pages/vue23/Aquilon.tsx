import React from "react";

import Poème from "../../modèles/poème";
import Background from "../../modèles/background";
import Présentation from "../../modèles/présentation";

const Aquilon = () => {
  return (
    <Background>
      <Présentation 
        title="Aquilon" 
        source={require("../../../assets/images/Aquilon@3x.png")}
      >
      </Présentation>

      <Poème></Poème>
    </Background>
  );
};
export default Aquilon;
