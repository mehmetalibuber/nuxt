import { f as useRuntimeConfig } from '../server.mjs';
import { ref } from 'file://C:/Projects/nuxt/node_modules/vue/index.mjs';
import { u as useCookie } from './cookie-daf610f3.mjs';
import axios from 'file://C:/Projects/nuxt/node_modules/axios/index.js';

function HelperComposable() {
  let EmailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let PhoneNumberPattern = /^[0-9]{10}$/;
  let TCPattern = /^[0-9]{11}$/;
  let PasswordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  let GlobalPhoneNumberPattern = /^[0-9]{10,16}$/;
  const CheckGuestName = (name) => {
    if (!name) {
      return "InvalidName";
    }
    const Name = name.trim();
    if (!Name) {
      return "InvalidName";
    }
    if (Name.length > 28) {
      return "NameIsTooLong";
    } else {
      return true;
    }
  };
  const CheckGuestSurname = (surname) => {
    if (!surname) {
      return "InvalidSurname";
    }
    const Surname = surname.trim();
    if (!Surname) {
      return "InvalidSurname";
    }
    if (Surname.length > 22) {
      return "SurnameIsTooLong";
    } else {
      return true;
    }
  };
  const CheckGuestEmailAddress = (mail) => {
    if (EmailPattern.test(mail)) {
      return true;
    } else {
      return "InvalidEmail";
    }
  };
  const CheckGuestPhoneNumber = (number) => {
    number = number.replace(/^0|\+90/g, "");
    number = number.replace(/\s/g, "");
    if (PhoneNumberPattern.test(number)) {
      return number;
    } else {
      return "1";
    }
  };
  const CheckGlobalGuestPhoneNumber = (number) => {
    let TrimmedNumber;
    if (number) {
      TrimmedNumber = number.trim();
      if (GlobalPhoneNumberPattern.test(TrimmedNumber)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
  const CheckGuestTC = (tc) => {
    const value = tc.toString();
    const isEleven = TCPattern.test(tc);
    let totalX = 0;
    for (var i = 0; i < 10; i++) {
      totalX += Number(value.substr(i, 1));
    }
    const isRuleX = totalX % 10 == value.substr(10, 1);
    let totalY1 = 0;
    let totalY2 = 0;
    for (var i = 0; i < 10; i += 2) {
      totalY1 += Number(value.substr(i, 1));
    }
    for (var i = 1; i < 10; i += 2) {
      totalY2 += Number(value.substr(i, 1));
    }
    const isRuleY = (totalY1 * 7 - totalY2) % 10 == value.substr(9, 0);
    if (isEleven && isRuleX && isRuleY) {
      return true;
    } else {
      return "InvalidTC";
    }
  };
  const CheckGuestPassport = (passport) => {
    if (PhoneNumberPattern.test(passport)) {
      return true;
    } else {
      return "InvalidPassportNumber";
    }
  };
  const DateFormatter = (SelectedDates) => {
    const ParsedDate = new Date(SelectedDates);
    const Year = ParsedDate.getFullYear();
    const Month = ("0" + (ParsedDate.getMonth() + 1)).slice(-2);
    const Day = ("0" + ParsedDate.getDate()).slice(-2);
    return `${Year}-${Month}-${Day}`;
  };
  const CalculateNights = (checkInDate, checkOutDate) => {
    const OneDay = 1e3 * 60 * 60 * 24;
    const CheckInDate = new Date(checkInDate);
    const CheckOutDate = new Date(checkOutDate);
    const CheckInTime = CheckInDate.getTime();
    const CheckOutTime = CheckOutDate.getTime();
    const TimeDifference = Math.abs(CheckOutTime - CheckInTime);
    const Nights = Math.round(TimeDifference / OneDay);
    return Nights;
  };
  const IsNumeric = (val) => {
    return /^\d+$/.test(val);
  };
  const CheckPasswordStrength = (password) => {
    const res = PasswordPattern.test(password);
    if (res) {
      return true;
    } else {
      return false;
    }
  };
  const ComparePasswords = (password1, password2) => {
    return password1 === password2;
  };
  const GetScreenWidth = () => {
    return window.innerWidth;
  };
  const CheckGuestUserName = (username) => {
    if (!username) {
      return "InvalidUserName";
    }
    const UserName = username.trim();
    if (UserName.length < 3) {
      return "InvalidUserName";
    } else {
      return true;
    }
  };
  const GetCRMHost = async () => {
    let RuntimeConfig = /* @__PURE__ */ useRuntimeConfig();
    const CRMHost = RuntimeConfig.public.CRM_HOST;
    return CRMHost;
  };
  const SetDefaultCookie = () => {
    const CookieFilters = useCookie("Filters");
    const Filters = ref({
      GuestCount: null,
      Dates: [],
      UnParsedDates: [],
      City: null,
      SubCities: [],
      DTO: [],
      CurrentPage: 0,
      Projects: []
    });
    CookieFilters.value = Filters.value;
    const DefaultCheckIn = DateFormatter(/* @__PURE__ */ new Date());
    const DefaultCheckOut = DateFormatter(
      (/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() + 3)
    );
    CookieFilters.value.Dates[0] = DefaultCheckIn;
    CookieFilters.value.Dates[1] = DefaultCheckOut;
    const SelectedCity = ref({
      countryId: 225,
      fipsCode: "07",
      id: 2169,
      latitude: 37.0951672,
      longitude: 31.0793705,
      name: "Antalya"
    });
    CookieFilters.value.City = SelectedCity.value;
  };
  return {
    CheckGuestName,
    CheckGuestSurname,
    CheckGuestEmailAddress,
    CheckGuestPhoneNumber,
    CheckGuestTC,
    CheckGuestPassport,
    DateFormatter,
    CalculateNights,
    IsNumeric,
    CheckPasswordStrength,
    ComparePasswords,
    GetScreenWidth,
    CheckGuestUserName,
    GetCRMHost,
    SetDefaultCookie,
    CheckGlobalGuestPhoneNumber
  };
}
const config = {
  CRM_HOST: "https://testcrm.geccele.com/api/web",
  //CRM_HOST: "https://crm.geccele.com/api/web",
  CRM_WEBSITE: "1",
  GoogleMapsAPIKey: "AIzaSyB1jnI1NLP_vSzfjXBGYAUb9R99s0S4rVE",
  CRM_FILTER_URL: "",
  CRM_TURKIYE_ID: "225",
  CRM_ANTALYA_ID: "2169",
  CRM_FILTER_NEIGHBORHOOD: "neighborhood",
  CRM_PAYMENT_TYPE: "1",
  GOOGLE_DIRECTION_URL: "https://www.google.com/maps/dir/?api=1&destination="
};
const instance = axios.create({
  baseURL: config.CRM_HOST,
  // base url
  timeout: 3e4,
  //timeout
  headers: { "X-Custom-Header": "foobar" }
});
instance.interceptors.request.use(
  function(config2) {
    config2.headers["Accept-Language"] = "tr";
    return config2;
  },
  function(error) {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  function(response) {
    const ResData = response.data.data;
    if (ResData.numberOfElements === 0 || ResData == "")
      ;
    return response;
  },
  function(error) {
    if (error.response) {
      if (error.response.status) {
        error.response.status;
      }
    }
    return error.response.data;
  }
);

export { HelperComposable as H, config as c, instance as i };
//# sourceMappingURL=axiosConfig-89e67415.mjs.map
