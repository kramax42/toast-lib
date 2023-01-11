describe('Toasts e2e tests', () => {
  it('\'Create toast\' buton should exist and work.', () => {
    cy.visit('/iframe.html?id=createtoast--create-toast');
    cy.get('[data-test=create-toast-btn]').should('exist');

    cy.get('[data-test=create-toast-btn]').click();
    cy.get('[data-test=toast-1]').should('exist')
  });

  it('\'Create toast\' buton should exist and work.', () => {

    const customToastOptions = {
      message: 'Test data',
      duration: 6000,
      indent: 50,
      toastsGap: 30,
      variant: 'info',
      position: 'top-right',
      animation: 'fade',
      theme: 'colored',
    }

    const pathArgs = `position:${customToastOptions.position};`+
          `toastsGap:${customToastOptions.toastsGap};`+ 
          `indent:${customToastOptions.indent};`+
          `duration:${customToastOptions.duration};`+
          `variant:${customToastOptions.variant};`+
          `animation:${customToastOptions.animation};`+ 
          `theme:${customToastOptions.theme};`;

    cy.visit(`/iframe.html?id=createtoast--create-toast&args=${pathArgs}`);
    cy.get('[data-test=create-toast-btn]').should('exist');

    cy.get('[data-test=create-toast-btn]').click();
    cy.get('[data-test=toast-1]').should('exist')
  });
});
