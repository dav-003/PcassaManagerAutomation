export class SignInSelectors {

  static languageButton = () => cy.get('div[class*="_language_dropdown"]')

  static languageDropdown = () => cy.get('div[role="menu"]')

  static armenianLanguage = () => cy.get("button[role=\"menuitem\"]").eq(0)

  static englishLanguage = () => cy.get("button[role=\"menuitem\"]").eq(1)

  static russianLanguage = () => cy.get("button[role=\"menuitem\"]").eq(2)

  static licenseCodeField = () => cy.get('input[name="code"]')

  static submitButton = () => cy.get('button[type="submit"]')

  static tryFreeButton = () => cy.get('button[type="button"]')

  static signedUpUser = () => cy.get('[class*="_registered_organizations"]')

  static signInModal = () => cy.get('[class*="login_modal"] > [class*="_modal_"]')

  static usernameInput = () => cy.get('input[name="login"]')

  static passwordInput = () => cy.get('input[name="password"]')

  static eyeButton = () => cy.get('[class*="show_password"]')

  static modalCloseButton = () => cy.get('[class*="close"]')

  static signInButton = () => cy.get('[class*="login_modal"] button[type="submit"]')

  static emptyFieldErrorMessage = () => cy.get('[class*="error_"]:contains("Դատարկ դաշտ")')

  static wrongCredentialsErrorMessage = () => cy.get('.Toastify__toast-body > :nth-child(2)')

  static homePageCaption = () => cy.get('[class*=\'title\']:contains("Գլխավոր")')

  static signInTitle = () => cy.get('[class*=\'mb-[50px]\'] > h3')
}
