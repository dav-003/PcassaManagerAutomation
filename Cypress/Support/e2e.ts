import './commands'

Cypress.on('uncaught:exception', (err) => {
    if (err.message.includes('className.includes')) {
        return false;
    }
})