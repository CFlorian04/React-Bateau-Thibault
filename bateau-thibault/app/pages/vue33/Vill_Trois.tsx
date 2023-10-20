import React from "react";

import Poème from "../../modèles/poème";
import Background from "../../modèles/background";
import Présentation from "../../modèles/présentation";



const Vill_Trois = () => {
  return (
    <Background>
        <Présentation
          title="Villa 9-Trois"
          source={require("../../../assets/images/villa9Trois.png")}
        >
        </Présentation>

      <Poème></Poème>
    </Background>
  );
};
export default Vill_Trois;
