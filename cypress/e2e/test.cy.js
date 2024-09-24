describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('Form Submission', () => {
  it('should submit the form and display the user input', () => {
      // Visitar la página donde está el formulario
      cy.visit('http://localhost:8080'); // Asegúrate de que esta URL sea la correcta para tu entorno local

      // Ingresar un nombre y un correo electrónico
      cy.get('#name').type('Juan Pérez');
      cy.get('#email').type('juan@example.com');

      // Enviar el formulario
      cy.get('button[type="submit"]').click();

      // Verificar que el mensaje se cargó correctamente
      cy.get('#message').should('contain', 'Form submitted! Name: Juan Pérez, Email: juan@example.com');
  });
});
