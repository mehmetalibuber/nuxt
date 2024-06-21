import { H as HelperComposable, i as instance, c as config } from "./axiosConfig-89e67415.js";
let CRMHost;
const CRMHostRes = HelperComposable().GetCRMHost();
CRMHostRes.then((res) => {
  CRMHost = res;
}).catch((error) => {
  console.error(error);
});
function AuthComposable() {
  const SendRegisterData = async (data) => {
    let RawData = null;
    if (!data) {
      return "1";
    }
    const AxiosResponse = await instance.post(
      `${CRMHost}/auth/register`,
      data
    );
    if (AxiosResponse.status) {
      return "0";
    }
    if (AxiosResponse.message) {
      RawData = AxiosResponse.message;
      return RawData;
    } else {
      return AxiosResponse;
    }
  };
  const SendLoginData = async (data) => {
    let RawData = null;
    if (!data) {
      return "1";
    }
    const AxiosResponse = await instance.post(`${CRMHost}/auth/login`, data);
    if (AxiosResponse.status) {
      return AxiosResponse.data;
    }
    if (AxiosResponse.message) {
      RawData = AxiosResponse.message;
      return RawData;
    } else {
      return AxiosResponse;
    }
  };
  const GetUserInformations = async () => {
    let RawData = null;
    const AccessToken = localStorage.getItem("AccessToken");
    if (!AccessToken) {
      return "Please login again";
    }
    const AxiosResponse = await instance.get(`${CRMHost}/me/account`, {
      headers: {
        Authorization: `Bearer ${AccessToken}`
      }
    });
    if (AxiosResponse.status) {
      return AxiosResponse.data;
    }
    if (AxiosResponse.message) {
      RawData = AxiosResponse.message;
      return RawData;
    } else {
      return AxiosResponse;
    }
  };
  const GetUserReservations = async () => {
    let RawData = null;
    const AccessToken = localStorage.getItem("AccessToken");
    if (!AccessToken) {
      return "Please login again";
    }
    const AxiosResponse = await instance.get(`${CRMHost}/me/reservations`, {
      headers: {
        Authorization: `Bearer ${AccessToken}`
      }
    });
    if (AxiosResponse.status) {
      return AxiosResponse.data;
    }
    if (AxiosResponse.message) {
      RawData = AxiosResponse.message;
      return RawData;
    } else {
      return AxiosResponse;
    }
  };
  const GetLoginVerificationCode = async (number) => {
    let RawData = null;
    if (!number) {
      return "Please Enter Your Phone Number";
    }
    const Website = config.CRM_WEBSITE;
    const LoginData = {
      phone: number,
      webSite: Website
    };
    const AxiosResponse = await instance.post(
      `${CRMHost}/auth/phone`,
      LoginData
    );
    if (AxiosResponse.status) {
      return AxiosResponse.data;
    }
    if (AxiosResponse.message) {
      RawData = AxiosResponse.message;
      return RawData;
    } else {
      return AxiosResponse;
    }
  };
  const ConfirmVerificationCode = async (code, number) => {
    let RawData = null;
    if (!code) {
      return "Please Enter Your Phone Verification Code";
    }
    if (!number) {
      return "Please Refresh Page";
    }
    const Website = config.CRM_WEBSITE;
    const AxiosResponse = await instance.get(
      `${CRMHost}/auth/phone?webSite=${Website}&code=${code}&phone=${number}`
    );
    if (AxiosResponse.status) {
      return AxiosResponse.data;
    }
    if (AxiosResponse.message) {
      RawData = AxiosResponse.message;
      return RawData;
    } else {
      return AxiosResponse;
    }
  };
  const GetUserCoupons = async () => {
    let RawData = null;
    const AccessToken = localStorage.getItem("AccessToken");
    if (!AccessToken) {
      return "Please login again";
    }
    const AxiosResponse = await instance.get(`${CRMHost}/me/coupons `, {
      headers: {
        Authorization: `Bearer ${AccessToken}`
      }
    });
    if (AxiosResponse.status) {
      return AxiosResponse.data;
    }
    if (AxiosResponse.message) {
      RawData = AxiosResponse.message;
      return RawData;
    } else {
      return AxiosResponse;
    }
  };
  const CheckUserCoupon = async (coupon, price, accommodation) => {
    let RawData = null;
    let ReplacementCharacter = "%3F";
    let ReplacedCoupon = "";
    let TrimmedCoupon = "";
    const AccessToken = localStorage.getItem("AccessToken");
    if (!AccessToken) {
      return "Please login again";
    }
    if (!coupon) {
      return "Please coupon select";
    }
    if (!price) {
      return;
    }
    if (!accommodation) {
      return;
    }
    TrimmedCoupon = coupon.trim();
    ReplacedCoupon = TrimmedCoupon;
    if (TrimmedCoupon[TrimmedCoupon.length - 1] == "?") {
      ReplacedCoupon = TrimmedCoupon.slice(0, -1) + ReplacementCharacter;
    }
    const AxiosResponse = await instance.post(
      `${CRMHost}/coupons/${ReplacedCoupon} `,
      {
        totalAmount: price,
        accommodation
      },
      {
        headers: {
          Authorization: `Bearer ${AccessToken}`
        }
      }
    );
    if (AxiosResponse.status) {
      return AxiosResponse.data;
    }
    if (AxiosResponse.message) {
      RawData = AxiosResponse.message;
      return RawData;
    } else {
      return AxiosResponse;
    }
  };
  const GetUserGuests = async () => {
    let RawData = null;
    const AccessToken = localStorage.getItem("AccessToken");
    if (!AccessToken) {
      return "error get user guest";
    }
    const AxiosResponse = await instance.get(`${CRMHost}/me/guest`, {
      headers: {
        Authorization: `Bearer ${AccessToken}`
      }
    });
    if (AxiosResponse.status) {
      return AxiosResponse.data;
    }
    if (AxiosResponse.message) {
      RawData = AxiosResponse.message;
      return RawData;
    } else {
      return AxiosResponse;
    }
  };
  return {
    SendRegisterData,
    SendLoginData,
    GetUserInformations,
    GetUserReservations,
    GetLoginVerificationCode,
    ConfirmVerificationCode,
    GetUserCoupons,
    CheckUserCoupon,
    GetUserGuests
  };
}
export {
  AuthComposable as A
};
//# sourceMappingURL=AuthComposable-14236e1c.js.map
