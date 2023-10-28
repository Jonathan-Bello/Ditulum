import React from "react"
import CardMancha from "../../cards/CardMancha"

import featureMano from "../../../assets/img/home/featureMano.png"
import featureMaterial from "../../../assets/img/home/featureMaterial.png"
import featureTulum from "../../../assets/img/home/featureTulum.png"

const HomeFeaturesSection = () => {
  return (
    <div className="HomeFeaturesSection ed-grid">
      <h2 className="HomeFeaturesSection__title">
        Nos comprometemos con <b>elevar tu estilo de vida</b>
      </h2>

      <div className="HomeFeaturesSection__feutureList ">
        <CardMancha imgSrc={featureMano} title={"Productos hechos a mano"} />
        <CardMancha
          imgSrc={featureMaterial}
          title={"Materiales y elementos naturales"}
        />
        <CardMancha
          imgSrc={featureTulum}
          title={"Inspirados en la escencia de Tulum"}
        />
      </div>
    </div>
  )
}

export default HomeFeaturesSection
