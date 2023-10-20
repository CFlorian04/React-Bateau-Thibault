import Poème from "../../modèles/poème";
import Background from "../../modèles/background";
import Présentation from "../../modèles/présentation";



const Bist_Somm = () => {
  return (
    <Background>

        <Présentation
          title="Bistrot du sommelier"
          source={require("../../../assets/images/duSommelier.png")}
        />
      <Poème></Poème>
    </Background>
  );
};
export default Bist_Somm;
