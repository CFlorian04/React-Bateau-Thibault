import Poème from "../../modèles/poème";
import Background from "../../modèles/background";
import Restaurant from "../../modèles/présentation";



const Bist_Somm = () => {
  return (
    <Background>

        <Restaurant
          title="Bistrot du sommelier"
          source={require("../../../assets/images/duSommelier.png")}
        />
      <Poème></Poème>
    </Background>
  );
};
export default Bist_Somm;
