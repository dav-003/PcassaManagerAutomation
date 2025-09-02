export class ActsSelectors {

    static listOfActsDateFromInput = () => cy.get('div[class*="_datepicker_"] input[placeholder="Date from"]')

    static listOfActsDateFromModal = () => cy.get(':nth-child(2) > [class*=_datepicker_] > .text-gray-700 > .ease-out > .mt-2\\.5')

    static listOfActsDateFromInputPrevButton = () => cy.get(':nth-child(2) > [class*=_datepicker_] > .text-gray-700 > .ease-out > .mt-2\\.5 > .lg\\:flex-row > .items-stretch > .md\\:w-\\[296px\\] > .border > :nth-child(1) > .dark\\:text-white\\/70')

    static listOfActsDateFromInputMonthButton = () => cy.get(':nth-child(2) > [class*=_datepicker_] > .text-gray-700 > .ease-out > .mt-2\\.5 > .lg\\:flex-row > .items-stretch > .md\\:w-\\[296px\\] > .border > .flex > :nth-child(1) > .w-full')

    static listOfActsDateFromInputYearButton = () => cy.get(':nth-child(2) > [class*=_datepicker_] > .text-gray-700 > .ease-out > .mt-2\\.5 > .lg\\:flex-row > .items-stretch > .md\\:w-\\[296px\\] > .border > .flex > :nth-child(2) > .w-full')

    static listOfActsDateFromDatepickerDay = (day: number) =>
        cy.get(`[class="grid grid-cols-7 gap-y-0.5 my-1"] button.flex.items-center.justify-center.w-12.h-12.lg\\:w-10.lg\\:h-10`)
            .contains(day)
            .should('be.visible')

    static listOfActsTbody = () => cy.get('[class*="_act_list_"] + [class*="_table_"] [class*="_tbody_"]')

    static listOfActsTbodyRow = (row: number) => cy.get('[class*="_act_list_"] + [class*="_table_"] [class*="_tbody_"] tr').eq(row)

    static listOfActsTbodyRows = () => cy.get('[class*="_act_list_"] + [class*="_table_"] [class*="_tbody_"] tr')

}