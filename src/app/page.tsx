import Features from "@components/homepage/features/Features";
import Hero from "@components/homepage/hero/Hero";
import Services from "@components/homepage/services/Services";
import Car from "@components/homepage/car/Car";
import ChooseUs from "@components/homepage/chooseUs/ChooseUs";
import Cta from "@components/homepage/cta/Cta";
import { sendRequest } from "@utils/api.utils";

export default async function Home() {
  const res = await sendRequest<IBackendResponse<THomepage>>({
    url: "/homepage",
    nextOptions: { cache: 'force-cache' }
  });
  const homepage = res.data;
  return (
    <main>
      <Hero data={homepage.hero} />
      <Services data={homepage.services} />
      <Features data={homepage.features} />
      <Car data={homepage.car} />
      <ChooseUs data={homepage.chooseus} />
      <Cta data={homepage.cta} />
    </main>
  );
}
