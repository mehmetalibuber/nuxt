import config from "../config.js";
import axiosConfig from "../axiosConfig.js";

const router = useRoute;
// Config Variables
//let CrmHost = config.CRM_HOST;
let CrmWebsite = config.CRM_WEBSITE;
let CrmTurkiyeID = config.CRM_TURKIYE_ID;
let CrmAntalyaID = config.CRM_ANTALYA_ID;
//let Neighborhood = config.CRM_FILTER_NEIGHBORHOOD;

// character  variables
let BracketLeft = "%5B";
let BracketRight = "%5D";

// get CRM_HOST from env // dev or prod
let CRMHost;
const CRMHostRes = HelperComposable().GetCRMHost();
CRMHostRes.then((res) => {
  CRMHost = res;
}).catch((error) => {
  console.error(error);
});

function DestinationComposable() {
  // Get destinations from CRM API according to page number
  const GetDestinations = async (PageNumber) => {
    let RawData = null;
    if (!PageNumber) {
      PageNumber = 0;
    }
    const AxiosResponse = await axiosConfig.get(
      `${CRMHost}/estates?webSite=${CrmWebsite}&pageNumber=${PageNumber}`
    );
    RawData = AxiosResponse.data;
    return RawData;
  };
  // Get destinations from CRM API according to destination ID
  const GetDestinationByID = async (id, dates) => {
    let RawData = null;
    let CheckIn = dates[0];
    let CheckOut = dates[1];
    const AxiosResponse = await axiosConfig.get(
      `${CRMHost}/estates/${id}?webSite=${CrmWebsite}&endDate=${CheckOut}&startDate=${CheckIn}`
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
  // Get destinations from CRM API according to destination ID as basic
  const GetDestinationByIDAsBasic = async (id) => {
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
  // Get popular destinations from CRM API
  const GetPopularDestinations = async () => {
    let RawData = null;
    const AxiosResponse = await axiosConfig.get(
      `${CRMHost}/estates?webSite=${CrmWebsite}&pageNumber=1&pageSize=20`
    );
    RawData = AxiosResponse.data;
    return RawData;
  };
  // Get similar destinations from CRM API
  const GetSimilarDestinations = async () => {
    let RawData = null;
    const AxiosResponse = await axiosConfig.get(
      `${CRMHost}/estates?webSite=${CrmWebsite}`
    );
    RawData = AxiosResponse.data;
    return RawData;
  };
  // get filtered destinations if it has city
  const GetDestinationsByCity = async (city) => {
    let RawData = null;
    let CityID = 2169;
    if (city) {
      CityID = city;
    }
    const AxiosResponse = await axiosConfig.get(
      `${CRMHost}/estates?webSite=${CrmWebsite}&city=${CityID}`
    );
    RawData = AxiosResponse.data;
    return RawData;
  };
  // get cities
  const GetCities = async (id) => {
    let CountryID = CrmTurkiyeID;
    if (id) {
      CountryID = id;
    }
    let RawData = null;
    const AxiosResponse = await axiosConfig.get(
      `${CRMHost}/in-estate/cities/${CountryID}`
    );
    RawData = AxiosResponse.data;
    return RawData;
  };
  // get filtered destinations if it has city
  const GetSubCitiesByCity = async (city) => {
    let RawData = null;
    let CityID = CrmAntalyaID;
    if (city) {
      CityID = city;
    }
    const AxiosResponse = await axiosConfig.get(
      `${CRMHost}/in-estate/subCities/${CityID}`
    );
    RawData = AxiosResponse.data;
    return RawData;
  };
  // get filtered destinations if it has filter cookie value
  const GetFilteredDestinations = async (CookieFilters) => {
    if (!CookieFilters) {
      router.push("/error");
    }
    let CheckIn = CookieFilters.Dates[0];
    let CheckOut = CookieFilters.Dates[1];
    let RawData = null;
    if (!CheckIn) {
      return "please select check-in date";
    }
    if (!CheckOut) {
      return "please select check-out date";
    }
    let CurrentPage = CookieFilters.CurrentPage;
    if (!CurrentPage) {
      CurrentPage = 0;
    }
    //city
    let CityID = CookieFilters.City.id;
    if (!CityID) {
      CityID = CrmAntalyaID;
    }
    // subcities
    let SubCitiesPatters;
    if (CookieFilters.SubCities) {
      if (CookieFilters.SubCities.ItemID) {
        if (CookieFilters.SubCities.ItemID.length > 0) {
          let CookieSubCities = CookieFilters.SubCities.ItemID;
          // static conditions
          let StaticAntalyaSubCities = [];
          if (
            CookieSubCities.includes("1") ||
            CookieSubCities.includes("3") ||
            CookieSubCities.includes("4")
          ) {
            StaticAntalyaSubCities.push("108441");
          }
          if (CookieSubCities.includes("2")) {
            StaticAntalyaSubCities.push("107095");
          }
          if (CookieSubCities.includes("5")) {
            StaticAntalyaSubCities.push("107981");
          }
          if (CookieSubCities.includes("6")) {
            StaticAntalyaSubCities.push("108017");
          }
          if (CookieSubCities.includes("7")) {
            StaticAntalyaSubCities.push("108224");
          }
          CookieSubCities = StaticAntalyaSubCities;
          // static end
          SubCitiesPatters = CookieSubCities.map(
            (sub, index) =>
              `&subCitys${BracketLeft}${index}${BracketRight}=${sub}`
          ).join("&");
        } else {
          SubCitiesPatters = ``;
        }
      } else {
        SubCitiesPatters = ``;
      }
    }
    // sub accordion items for more filter
    let SubFilterPatters;
    if (CookieFilters.DTO) {
      if (CookieFilters.DTO.ItemID) {
        if (CookieFilters.DTO.ItemID.length > 0) {
          let CookieSubFilters = CookieFilters.DTO.ItemID;
          SubFilterPatters = CookieSubFilters.map((sub, index) => {
            const cleanedSub = sub.replace("p-", ""); // 'p-' delete
            return `&propertyDetail${BracketLeft}${index}${BracketRight}=${cleanedSub}`;
          }).join("&");
        } else {
          SubFilterPatters = ``;
        }
      } else {
        SubFilterPatters = ``;
      }
    }
    // try to send request to api
    const AxiosResponse = await axiosConfig.get(
      `${CRMHost}/estates?webSite=${CrmWebsite}&city=${CityID}&endDate=${CheckOut}&startDate=${CheckIn}${SubCitiesPatters}${SubFilterPatters}&pageNumber=${CurrentPage}`
    );
    RawData = AxiosResponse.data;
    return RawData;
  };
  // get properties and rooms
  const GetPropertiesAndRooms = async () => {
    let RawData = null;
    const AccessToken = localStorage.getItem("AccessToken");
    if (!AccessToken) {
      return "Please login again";
    }
    const AxiosResponse = await axiosConfig.get(
      `${CRMHost}/properties-and-room`,
      {
        headers: {
          Authorization: `Bearer ${AccessToken}`,
        },
      }
    );
    if (AxiosResponse) {
      if (AxiosResponse.data) {
        RawData = AxiosResponse.data;
        return RawData;
      }
    } else {
      return AxiosResponse;
    }
  };
  return {
    GetDestinations,
    GetDestinationByID,
    GetPopularDestinations,
    GetSimilarDestinations,
    GetDestinationsByCity,
    GetCities,
    GetSubCitiesByCity,
    GetFilteredDestinations,
    GetPropertiesAndRooms,
    GetDestinationByIDAsBasic,
  };
}
export default DestinationComposable;
