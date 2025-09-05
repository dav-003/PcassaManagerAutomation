import {ActsSelectors} from "../Selectors/ActsSelectors";

export class ActsMethods {

    static SelectDate = (day: number, month: string, year: number): Cypress.Chainable => {
        const maxAttempts = 36;
        let attempts = 0;

        const goToMonthYear = (): Cypress.Chainable => {
            return ActsSelectors.listOfActsDateFromInputMonthButton()
                .filter(':visible')
                .invoke('text')
                .then(currentMonth => {
                    return ActsSelectors.listOfActsDateFromInputYearButton()
                        .filter(':visible')
                        .invoke('text')
                        .then(currentYearText => {
                            const currentYear = parseInt(currentYearText.trim());
                            const currentMonthNormalized = currentMonth.trim().toUpperCase();
                            const targetMonthNormalized = month.trim().toUpperCase();

                            if (currentMonthNormalized === targetMonthNormalized && currentYear === year) {
                                return ActsSelectors.listOfActsDateFromDatepickerDay(day)
                                    .filter(':visible')
                                    .click();
                            }
                            if (attempts >= maxAttempts) {
                                throw new Error(`Не удалось найти месяц ${month} и год ${year} за ${maxAttempts} кликов`);
                            }

                            attempts++

                            return ActsSelectors.listOfActsDateFromInputPrevButton()
                                .filter(':visible')
                                .click()
                                .then(() => cy.wait(100))
                                .then(goToMonthYear);
                        })
                })
        }
        return goToMonthYear()
    }
}