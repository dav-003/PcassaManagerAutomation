import {SignInSelectors} from "../Selectors/SignInSelectors";
import {SignInData} from "../Models/SignInModels";
import {LicenseCodes} from "../Models/SignInModels";

export class SignInMethods {

  static SignIn = (username: string, password: string) => {
    SignInMethods.OpenSignInModal()
    SignInMethods.FillSignIn({username,password})
    SignInSelectors.signInButton().click()
    SignInSelectors.homePageCaption().should('be.visible')
  }

  static OpenSignInModal = () => {
    SignInSelectors.licenseCodeField().type(LicenseCodes.Code_4004)
    SignInSelectors.submitButton().click()
    SignInSelectors.signInModal().should('be.visible')
  }

  static FillSignIn = (data : SignInData) => {
    data.username && SignInSelectors.usernameInput().type(data.username)
    data.password && SignInSelectors.passwordInput().type(data.password)
  }
}

