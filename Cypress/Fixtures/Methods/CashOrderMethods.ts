import {CashOrderSelectors} from "../Selectors/CashOrderSelectors";

export class CashOrderMethods {
    static SelectDate = (day: number, month: string, year: number): Cypress.Chainable => {
        const maxAttempts = 36;
        let attempts = 0;

        const goToMonthYear = (): Cypress.Chainable => {
            return CashOrderSelectors.listOfCashOrderDateFromModalMonthButton()
                .filter(':visible')
                .invoke('text')
                .then(currentMonth => {
                    return CashOrderSelectors.listOfCashOrderDateFromModalYearButton()
                        .filter(':visible')
                        .invoke('text')
                        .then(currentYearText => {
                            const currentYear = parseInt(currentYearText.trim());
                            const currentMonthNormalized = currentMonth.trim().toUpperCase();
                            const targetMonthNormalized = month.trim().toUpperCase();

                            if (currentMonthNormalized === targetMonthNormalized && currentYear === year) {
                                return CashOrderSelectors.listOfCashOrderDateFromModalDay(day)
                                    .filter(':visible')
                                    .first()
                                    .click();
                            }
                            if (attempts >= maxAttempts) {
                                throw new Error(`Не удалось найти месяц ${month} и год ${year} за ${maxAttempts} кликов`);
                            }

                            attempts++

                            return CashOrderSelectors.listOfCashOrderDateFromModalPrevButton()
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