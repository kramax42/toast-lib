const MAX_DISPLAYING_TOASTS = 3;

describe('Toasts e2e tests', () => {

  beforeEach(() => {
    cy.viewport('macbook-11');
  });

  // it('\'Create toast\' button should exist and work.', () => {
  //   cy.visit('/iframe.html?id=createtoast--create-toast');
  //   cy.get('[data-test=create-toast-btn]').should('exist');

  //   cy.get('[data-test=create-toast-btn]').click();
  //   cy.get('[data-test=toast-1]').should('exist')
  // });

  // it('\'Create toast\' buton should exist and work.', () => {

  //   const customToastOptions = {
  //     message: 'Test data',
  //     duration: 6000,
  //     indent: 50,
  //     toastsGap: 30,
  //     variant: 'info',
  //     position: 'top-right',
  //     animation: 'fade',
  //     theme: 'colored',
  //     isAutoClose: false,
  //   }

  //   const pathArgs = `position:${customToastOptions.position};`+
  //         `toastsGap:${customToastOptions.toastsGap};`+ 
  //         `indent:${customToastOptions.indent};`+
  //         `duration:${customToastOptions.duration};`+
  //         `variant:${customToastOptions.variant};`+
  //         `animation:${customToastOptions.animation};`+ 
  //         `isAutoClose:${customToastOptions.isAutoClose};`+ 
  //         `theme:${customToastOptions.theme};`;

  //   cy.visit(`/iframe.html?id=createtoast--create-toast&args=${pathArgs}`);
  //   cy.get('[data-test=create-toast-btn]').should('exist');

  //   cy.get('[data-test=create-toast-btn]').click();
  //   cy.get('[data-test=toast-1]').should('exist')
  // });

  // it('toast should be able for auto-closing', () => {
  //   cy.visit('/iframe.html?id=createtoast--create-toast');
  //   cy.get('[data-test=create-toast-btn]').click();
  //   cy.get(`div[data-test="toast-1"]`).should('exist');
  //   cy.wait(6000);
  //   cy.get(`div[data-test="toast-1"]`).should('not.exist');
  // });

  // it(`amount of displaying toasts in container should be less or equal then ${MAX_DISPLAYING_TOASTS}`, () => {
  //   cy.visit('/iframe.html?id=createtoast--create-toast');
  //   for (let i = 0; i <= MAX_DISPLAYING_TOASTS; i += 1) {
  //     cy.get('[data-test=create-toast-btn]').click();
  //   }

  //   cy.get(`div[data-test="toast-${MAX_DISPLAYING_TOASTS}"]`).should('exist');
  //   cy.get(`div[data-test="toast-${MAX_DISPLAYING_TOASTS + 1}"]`).should(
  //     'not.exist',
  //   );
  // });

  it(`amount of displaying toasts in container should be less or equal then ${MAX_DISPLAYING_TOASTS}`, () => {
    cy.visit('/iframe.html?id=createtoast--create-toast');

    cy.get('[data-test=create-toast-btn]').click();
    cy.wait(1210);

    // cy.get(`div[data-test="toast-1"]`)
    // cy.get(`#toas`)
    //  .trigger('mousedown', { which: 1 })
    //  .trigger('mousemove', { clientX: 220, clientY: 0 })
    //  .trigger('mouseup', {force: true})

    //  const myItem = cy.get(`#toas`);
     cy.get(`#content`).trigger('mousedown', 20, 20, { force: true }).trigger('mousemove', 200, 20, { force: true }).trigger('mouseup', { force: true });
    //  cy.get(`#content`).click().trigger('mouseup', 200, 20, { force: true });


    //  cy.get(`#content`)
    //  .trigger('mousedown', { button: 0 })
    //  .wait(1500)
    //  .trigger('mousemove', {
    //         clientX: 357.75,
    //         clientY: 682.25,
    //         screenX: 1811.75,
    //         screenY: 799.25,
    //         pageX: 682.25,
    //         pageY: 105.8125
    //     })
    //   .trigger('mouseup', { force: true });

  });

 
});
