import { Helmet } from 'react-helmet-async';
import * as icons from "../assets/headerIcons/icons";

function MetaDecoratorEn() {
  return (
    <Helmet>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        data-react-helmet="true"
      />
      <meta
        httpEquiv="X-UA-Compatible"
        content="IE=edge"
        data-react-helmet="true"
      />
      <meta
        data-react-helmet="true"
        name="description"
        key="description"
        content="Calendar of Fieldworks of Geostat Surveys is for showing Monthly, Quarterly, Annual and Simultaneous fieldworks"
      />
      <meta
        name="title"
        key="title"
        content="Calendar of Fieldworks of Geostat Surveys"
        data-react-helmet="true"
      />
      <meta
        data-react-helmet="true"
        property="og:title"
        key="og:title"
        content="Calendar of Fieldworks of Geostat Surveys"
      />
      <meta property="og:locale" key="og:locale" content="en_US" />
      <meta charSet="utf-8" />
      <meta property="og:type" key="og:type" content="website" />
      <meta
        data-react-helmet="true"
        property="og:description"
        key="og:description"
        content="Calendar of Fieldworks of Geostat Surveys is for showing Monthly, Quarterly, Annual and Simultaneous fieldworks"
      />
      <meta
        data-react-helmet="true"
        property="og:image"
        key="og:image"
        content={`${icons.metaImage}`}
      />
    </Helmet>
  );
}
export default MetaDecoratorEn;
