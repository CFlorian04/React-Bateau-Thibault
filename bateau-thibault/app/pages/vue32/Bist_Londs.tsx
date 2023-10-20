import React from "react";

import Poème from "../../modèles/poème";
import Background from "../../modèles/background";
import Présentation from "../../modèles/présentation";


const Bist_Londs = () => {
  return (
    <Background>
        <Présentation
          title="Bistrot Landais"
          source={require("../../../assets/images/bistrotLandais.png")}
        >
        </Présentation>

      <Poème></Poème>
    </Background>
  );
};
export default Bist_Londs;
