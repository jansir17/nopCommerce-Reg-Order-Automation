class CardHolderData {
  UserFirstName = "//input[@id='BillingNewAddress_FirstName']";
  UserLastName = "//input[@id='BillingNewAddress_LastName']";
  UserEmailId = "//input[@id='BillingNewAddress_Email']";
  UserCompanyName = "//input[@id='BillingNewAddress_Company']";
  UserCountryId = "//select[@id='BillingNewAddress_CountryId']";
  UserStateId = "//select[@id='BillingNewAddress_StateProvinceId']";
  UserCity = "//input[@id='BillingNewAddress_City']";
  UserAddress = "//input[@id='BillingNewAddress_Address1']";
  UserZipCode = "//input[@id='BillingNewAddress_ZipPostalCode']";
  UserPhoneNumber = "//input[@id='BillingNewAddress_PhoneNumber']";
  UserCardHolderName = "//input[@id='CardholderName']";
  UserCardNumber = "//input[@id='CardNumber']";
  UserCardExpireMonth = "//select[@id='ExpireMonth']";
  UserCardExpireYear = "//select[@id='ExpireYear']";
  UserCardCode = "//input[@id='CardCode']";

  txtPassword = "//input[@placeholder='Password']";
  txtSubmitButton = "//button[normalize-space()='Login']";
  labelMessag = "//h6[normalize-space()='Dashboard']";

  setUserFirstName(userfirstname) {
    cy.xpath(this.UserFirstName).type(userfirstname);
  }
  setUserLastName(userlastname) {
    cy.xpath(this.UserLastName).type(userlastname);
  }
  setUserEmailId(useremailid) {
    cy.xpath(this.UserEmailId).type(useremailid);
  }
  setUserCompanyName(usercompanyname) {
    cy.xpath(this.UserCompanyName).type(usercompanyname);
  }
  setUserCountryId(usercountryid) {
    cy.xpath(this.UserCountryId).select(usercountryid);
  }
  setUserStateId(userstateid) {
    cy.xpath(this.UserStateId).select(userstateid);
  }
  setUserCity(usercity) {
    cy.xpath(this.UserCity).type(usercity);
  }
  setUserAddress(useraddress) {
    cy.xpath(this.UserAddress).type(useraddress);
  }
  setUserZipCode(userzipcode) {
    cy.xpath(this.UserZipCode).type(userzipcode);
  }
  setUserPhoneNumber(userphonenumber) {
    cy.xpath(this.UserPhoneNumber).type(userphonenumber);
  }
  setUserCardHolderName(usercardholdername) {
    cy.xpath(this.UserCardHolderName).type(usercardholdername);
  }
  setUserCardNumber(usercardnumber) {
    cy.xpath(this.UserCardNumber).type(usercardnumber);
  }
  setUserCardExpireMonth(usercardexpiremonth) {
    cy.xpath(this.UserCardExpireMonth).select(usercardexpiremonth);
  }
  setUserCardExpireYear(usercardexpireyear) {
    cy.xpath(this.UserCardExpireYear).select(usercardexpireyear);
  }
  setUserCardCode(usercardcode) {
    cy.xpath(this.UserCardCode).type(usercardcode);
  }
}

export default CardHolderData;
