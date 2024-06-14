import config from "../config.js";
import axios from "axios";

// get CRM_HOST from env // dev or prod
let CRMHost;
const CRMHostRes = HelperComposable().GetCRMHost();
CRMHostRes.then((res) => {
  CRMHost = res;
}).catch((error) => {
  console.error(error);
});

function ReservationComposable() {
  let CrmWebsite = config.CRM_WEBSITE;
  let CrmPaymentType = config.CRM_PAYMENT_TYPE;

  //cookie
  const CookieResID = useCookie("CookieResID");
  const CookieEstateID = useCookie("EstateID");

  // send reservation data
  const SendReservationData = async (data) => {
    let RawData = null;
    const AccessToken = localStorage.getItem("AccessToken");
    if (!AccessToken) {
      return "Please login again";
    }
    if (!data) {
      return "1";
    }
    data.webSite = Number(CrmWebsite);
    data.paymentType = Number(CrmPaymentType);
    const AxiosResponse = await axios.post(`${CRMHost}/reservations`, data, {
      headers: {
        Authorization: `Bearer ${AccessToken}`,
      },
    });
    if (AxiosResponse) {
      if (AxiosResponse.data) {
        RawData = AxiosResponse.data;
      }
      if (AxiosResponse.message) {
        return AxiosResponse.message;
      }
    }
    return RawData;
  };
  // confirm phone number
  const ConfirmPhoneNumber = async (code) => {
    let RawData = null;
    if (!code) {
      return "Verification Code Error";
    }
    if (!CookieResID.value) {
      return "Reservation ID Error";
    }
    const AxiosResponse = await axios.get(
      `${CRMHost}/reservations?code=${code}&webSite=${CrmWebsite}&reservationId=${CookieResID.value}`
    );
    RawData = AxiosResponse.data;
    return RawData;
  };
  // check availability //comp.
  const CheckAvailability = async (CheckIn, CheckOut) => {
    let RawData = null;
    let EstateID = CookieEstateID.value;
    if (!EstateID) {
      return "1";
    }
    if (!CheckIn) {
      return "please select check-in date";
    }
    if (!CheckOut) {
      return "please select check-out date";
    }
    try {
      const AxiosResponse = await axios.get(
        `${CRMHost}/estates/free?webSite=${CrmWebsite}&endDate=${CheckOut}&startDate=${CheckIn}&estateId=${EstateID}`
      );
      if (!AxiosResponse) {
        return "1";
      }
      if (!AxiosResponse.data) {
        return AxiosResponse.message;
      }
      RawData = AxiosResponse.data;
      return RawData;
    } catch (error) {
      let err = error.request;
      return JSON.parse(err.response).message;
    }
  };

  // call back
  const SendCallBackInfo = async (data) => {
    let RawData = null;
    if (!data) {
      return "Call Back Error";
    }

    const AxiosResponse = await axios.post(`${CRMHost}/contact-us`, data);
    RawData = AxiosResponse.data;
    return RawData;
  };
  return {
    SendReservationData,
    ConfirmPhoneNumber,
    CheckAvailability,
    SendCallBackInfo,
  };
}
export default ReservationComposable;
