import Breadcrumb from "@components/breadcrumb/Breadcrumb";
import { sendRequest } from "@utils/api.utils";
import CarsPage from '@components/carsPage/CarsPage.component';

export default async function page() {
  const carspageRes = await sendRequest<IBackendResponse<TCarspage>>({
    url: '/carpage',
  });
  return (
    <>
      <Breadcrumb title="car list"/>
      <CarsPage carsPageRes={carspageRes} />
    </>
  )
}

