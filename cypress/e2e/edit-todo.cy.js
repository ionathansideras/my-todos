describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/my-todos/");

    cy.get(".todo-div").should("exist");

    cy.get(".todo-form").should("have.css", "top", "-300px");

    cy.get("#edit").click();
    cy.get(".todo-form.todo-form-visible.edit").should("exist");

    cy.get("#todo-name-input").should("have.value", "Welcome");
    cy.get("#todo-name-input").type(" to Cypress");
    cy.get("#todo-name-input").should("have.value", "Welcome to Cypress");

    cy.get(".add-todo").click();
    cy.get(".todo-name").should("have.text", "Welcome to Cypress");

    cy.get("#edit").click();
    cy.get(".todo-form.todo-form-visible.edit").should("exist");

    cy.get("#todo-name-input").should("have.value", "Welcome to Cypress");
    cy.get("#todo-name-input").type(" my dude");
    cy.get("#todo-name-input").should(
      "have.value",
      "Welcome to Cypress my dude"
    );
    cy.get(".add-todo").click();

    cy.get(".hide-todo-form").click();
    cy.get(".todo-form").should("have.css", "top", "-300px");

    cy.get(".todo-name").should("not.have.text", "Welcome to Cypress my dude");
  });
});
