import React from "react";

import Poème from "../../modèles/poème";
import Background from "../../modèles/background";
import Restaurant from "../../modèles/présentation";


const Bist_Londs = () => {
  return (
    <Background>
        <Restaurant
          title="Bistrot Landais"
          source={require("../../../assets/images/bistrotLandais.png")}
        >
        </Restaurant>

      <Poème></Poème>
    </Background>
  );
};
export default Bist_Londs;
