import React from "react";

import Poème from "../../modèles/poème";
import Background from "../../modèles/background";
import Restaurant from "../../modèles/présentation";



const Vill_Trois = () => {
  return (
    <Background>
        <Restaurant
          title="Villa 9-Trois"
          source={require("../../../assets/images/villa9Trois.png")}
        >
        </Restaurant>

      <Poème></Poème>
    </Background>
  );
};
export default Vill_Trois;
