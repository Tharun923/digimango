export const strings = new Map([
  [
    "en-TEST",
    {
      test: "value",
    },
  ],
  [
    "en",
    {
      billHistory: "Bills History",
      pendingBills: "Pending Bills",
      appName: "Mango Mart",
      checkout: "Checkout",
      home: "Home",
      login: "Login",
      register: "Register",
      orderSummary: "Order Summary",
      addBill: "Add New Bill",
    },
  ],
]);

export function userLanguage({ nav = navigator } = { nav: navigator }) {
  if (nav.language == null) {
    return strings.get("en");
  }

  const specificLanguage = strings.get(nav.language);
  if (!specificLanguage) {
    // if there is no exact match for language,
    // use the last entry that starts with the user's browser language
    const language = Array.from(strings.keys())
      .filter((i) => nav.language.startsWith(i))
      .pop();
    return strings.get(language);
  }

  //if found, return the user's specific browser language
  return specificLanguage;
}

export default userLanguage();
