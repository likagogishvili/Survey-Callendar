import { Helmet } from 'react-helmet-async';
import * as icons from "../assets/headerIcons/icons";

function MetaDecoratorKa() {
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
        content="საქსტატის გამოკვლევების საველე სამუშაოების კალენდარზე დატანილია გამოკვლევები პერიოდულობის მიხედვი: ყოველთვიური, კვარტალური, წლიური და ერთდროული"
      />
      <meta
        name="title"
        key="title"
        content="საქსტატის გამოკვლევების საველე სამუშაოების კალენდარი"
        data-react-helmet="true"
      />
      <meta
        property="og:title"
        key="og:title"
        content="საქსტატის გამოკვლევების საველე სამუშაოების კალენდარი"
        data-react-helmet="true"
      />
      <meta property="og:locale" key="og:locale" content="en_US" />
      <meta charSet="utf-8" />
      <meta property="og:type" key="og:type" content="website" />
      <meta
        data-react-helmet="true"
        property="og:description"
        key="og:description"
        content="საქსტატის გამოკვლევების საველე სამუშაოების კალენდარზე დატანილია გამოკვლევები პერიოდულობის მიხედვი: ყოველთვიური, კვარტალური, წლიური და ერთდროული"
      />
      <meta
        data-react-helmet="true"
        property="og:image"
        key="og:image"
        content={`${icons.metaImageGEO}`}

      />
    </Helmet>
  );
}
export default MetaDecoratorKa;
