import { H as HelperComposable, i as instance, c as config } from "./axiosConfig-89e67415.js";
import "vue";
import "hookable";
import { u as useCookie } from "./cookie-daf610f3.js";
import "devalue";
import "defu";
import "destr";
import "klona";
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
  const CookieResID = useCookie("CookieResID");
  const CookieEstateID = useCookie("EstateID");
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
    const AxiosResponse = await instance.post(
      `${CRMHost}/reservations`,
      data,
      {
        headers: {
          Authorization: `Bearer ${AccessToken}`
        }
      }
    );
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
  const ConfirmPhoneNumber = async (code) => {
    let RawData = null;
    if (!code) {
      return "Verification Code Error";
    }
    if (!CookieResID.value) {
      return "Reservation ID Error";
    }
    const AxiosResponse = await instance.get(
      `${CRMHost}/reservations?code=${code}&webSite=${CrmWebsite}&reservationId=${CookieResID.value}`
    );
    RawData = AxiosResponse.data;
    return RawData;
  };
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
      const AxiosResponse = await instance.get(
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
  const SendCallBackInfo = async (data) => {
    let RawData = null;
    if (!data) {
      return "Call Back Error";
    }
    const AxiosResponse = await instance.post(`${CRMHost}/contact-us`, data);
    RawData = AxiosResponse.data;
    return RawData;
  };
  return {
    SendReservationData,
    ConfirmPhoneNumber,
    CheckAvailability,
    SendCallBackInfo
  };
}
export {
  ReservationComposable as R
};
//# sourceMappingURL=ReservationComposable-1557cdd6.js.map
