import React from "react"
import CardMancha from "../../cards/CardMancha"
import { useIntl } from "gatsby-plugin-intl"
import featureMano from "../../../assets/img/home/featureMano.png"
import featureMaterial from "../../../assets/img/home/featureMaterial.png"
import featureTulum from "../../../assets/img/home/featureTulum.png"

const HomeFeaturesSection = () => {
  const intl = useIntl()

  return (
    <div className="HomeFeaturesSection ed-grid s-mb-2">
      <h2
        className="HomeFeaturesSection__title"
        dangerouslySetInnerHTML={{
          __html: intl.formatMessage({ id: "home.feature.title" }),
        }}
      />

      <div className="HomeFeaturesSection__featureList ">
        <CardMancha
          imgSrc={featureMano}
          title={intl.formatMessage({ id: "home.feature.cardTitleOne" })}
        />
        <CardMancha
          imgSrc={featureMaterial}
          title={intl.formatMessage({ id: "home.feature.cardTitleTwo" })}
        />
        <CardMancha
          imgSrc={featureTulum}
          title={intl.formatMessage({ id: "home.feature.cardTitleThree" })}
        />
      </div>
    </div>
  )
}

export default HomeFeaturesSection
