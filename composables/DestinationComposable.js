import config from "../config.js";
import axiosConfig from "../axiosConfig.js";

console.log("Config:", config);
console.log("AxiosConfig:", axiosConfig);

let CrmWebsite = config.CRM_WEBSITE;

function DestinationComposable() {
  // Get popular destinations from CRM API
  const GetPopularDestinations = async () => {
    let RuntimeConfig = useRuntimeConfig();
    const CRMHost = RuntimeConfig.public.CRM_HOST;
    let RawData = null;
    const AxiosResponse = await axiosConfig.get(
      `${CRMHost}/estates?webSite=${CrmWebsite}&pageNumber=0&pageSize=20`
    );
    RawData = AxiosResponse.data;
    return RawData;
  };
  // Get destinations from CRM API according to destination ID as basic
  const GetDestinationByIDAsBasic = async (id) => {
    let RuntimeConfig = useRuntimeConfig();
    const CRMHost = RuntimeConfig.public.CRM_HOST;
    let RawData = null;
    let AxiosResponse = null;
    AxiosResponse = await axiosConfig.get(
      `${CRMHost}/estates/${id}?webSite=${CrmWebsite}`
    );

    if (AxiosResponse.message) {
      RawData = AxiosResponse.message;
      return RawData;
    }
    if (AxiosResponse.data) {
      RawData = AxiosResponse.data;
      return RawData;
    } else {
      return AxiosResponse;
    }
  };
  return {
    GetPopularDestinations,
    GetDestinationByIDAsBasic,
  };
}
export default DestinationComposable;
