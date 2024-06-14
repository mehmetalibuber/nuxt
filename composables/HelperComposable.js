function HelperComposable() {
  let EmailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let PhoneNumberPattern = /^[0-9]{10}$/;
  let TCPattern = /^[0-9]{11}$/;
  let PasswordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  let GlobalPhoneNumberPattern = /^[0-9]{10,16}$/;

  // name control
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
  // surname control
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
  // e-mail address control
  const CheckGuestEmailAddress = (mail) => {
    if (EmailPattern.test(mail)) {
      return true;
    } else {
      return "InvalidEmail";
    }
  };
  // phone number control
  const CheckGuestPhoneNumber = (number) => {
    number = number.replace(/^0|\+90/g, "");
    number = number.replace(/\s/g, "");
    if (PhoneNumberPattern.test(number)) {
      return number;
    } else {
      return "1";
    }
  };
  // global phone number control
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
  // tc number control
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
  // passport number control
  const CheckGuestPassport = (passport) => {
    if (PhoneNumberPattern.test(passport)) {
      return true;
    } else {
      return "InvalidPassportNumber";
    }
  };
  // convert string type / yy-mm-dd
  const DateFormatter = (SelectedDates) => {
    const ParsedDate = new Date(SelectedDates);
    const Year = ParsedDate.getFullYear();
    const Month = ("0" + (ParsedDate.getMonth() + 1)).slice(-2);
    const Day = ("0" + ParsedDate.getDate()).slice(-2);

    return `${Year}-${Month}-${Day}`;
  };
  // calculate total nights
  const CalculateNights = (checkInDate, checkOutDate) => {
    //calculate 1 day as ms
    const OneDay = 1000 * 60 * 60 * 24;
    // convert dates to date objects
    const CheckInDate = new Date(checkInDate);
    const CheckOutDate = new Date(checkOutDate);
    // get time from date objects
    const CheckInTime = CheckInDate.getTime();
    const CheckOutTime = CheckOutDate.getTime();
    // find differences between times
    const TimeDifference = Math.abs(CheckOutTime - CheckInTime);
    const Nights = Math.round(TimeDifference / OneDay);
    return Nights;
  };
  // Numeric controls
  const IsNumeric = (val) => {
    return /^\d+$/.test(val);
  };
  // Password controls
  const CheckPasswordStrength = (password) => {
    const res = PasswordPattern.test(password);
    if (res) {
      return true;
    } else {
      return false;
    }
  };
  // Compare passwords
  const ComparePasswords = (password1, password2) => {
    return password1 === password2;
  };
  // get screen width
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
    // runtime config variable
    let RuntimeConfig = useRuntimeConfig();
    const CRMHost = RuntimeConfig.public.CRM_HOST;
    return CRMHost;
  };
  // set default cookie
  const SetDefaultCookie = () => {
    // use cookie filters
    const CookieFilters = useCookie("Filters");
    // obj
    const Filters = ref({
      GuestCount: null,
      Dates: [],
      UnParsedDates: [],
      City: null,
      SubCities: [],
      DTO: [],
      CurrentPage: 0,
      Projects: [],
    });

    // set dates
    CookieFilters.value = Filters.value;
    const DefaultCheckIn = DateFormatter(new Date());
    const DefaultCheckOut = DateFormatter(
      new Date().setDate(new Date().getDate() + 3)
    );
    CookieFilters.value.Dates[0] = DefaultCheckIn;
    CookieFilters.value.Dates[1] = DefaultCheckOut;

    // set default city
    const SelectedCity = ref({
      countryId: 225,
      fipsCode: "07",
      id: 2169,
      latitude: 37.0951672,
      longitude: 31.0793705,
      name: "Antalya",
    });
    CookieFilters.value.City = SelectedCity.value;
    //  console.log(CookieFilters.value);
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
    CheckGlobalGuestPhoneNumber,
  };
}
export default HelperComposable;
