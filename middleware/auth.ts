export default defineNuxtRouteMiddleware(async (to, from) => {
  const Router = useRouter(); // router
  const User = useCookie("User"); // cookie user
  const Localization = useCookie("i18n_redirected"); // localization

  // retun if login or register pages
  if (to.fullPath.includes("/login") || to.fullPath.includes("/register")) {
    return;
  }

  // access token expire control
  const AccessTokesExpiredControl = async () => {
    try {
      const UserData = await AuthComposable().GetUserInformations();
      if (UserData == "Access Denied") {
        await SignOut();
      }
    } catch (error) {
      console.error("Error during token expiry control:", error);
    }
  };

  // sign out
  const SignOut = async () => {
    try {
      if (process.client) {
        localStorage.removeItem("AccessToken");
      }
    } catch (error) {
      console.error("Error removing access token from localStorage:", error);
    }
    User.value = null;
    await Router.push("/user/login");
  };

  // redirect login page
  if (!User.value) {
    try {
      const redirectPath =
        Localization.value && Localization.value.toString() !== "tr"
          ? `/${Localization.value.toString()}/user/login`
          : "/user/login";

      // save redirect path
      if (process.client) {
        localStorage.setItem("RedirectAfterLogin", to.fullPath);
      }
      return Router.push(redirectPath);
    } catch (error) {
      console.error("Error during redirection:", error);
    }
  }

  await AccessTokesExpiredControl();
});
