describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/my-todos/");

    cy.get(".todo-div").should("exist");

    cy.get(".todo-form").should("have.css", "top", "-300px");

    cy.get(".open-todo-form").click();
    cy.get(".todo-form.todo-form-visible").should("exist");

    cy.get("#todo-name-input").should("have.value", "");
    cy.get("#todo-name-input").type("New Todo");
    cy.get("#todo-name-input").should("have.value", "New Todo");
    cy.get("#todo-details-input").type("New Todo Details");
    cy.get("#todo-details-input").should("have.value", "New Todo Details");

    cy.get(".add-todo").click();
    cy.get(".todo-name").eq(1).should("have.text", "New Todo");
    cy.get(".todo-details").eq(1).should("have.text", "New Todo Details");
    cy.get(".todo-priority")
      .eq(1)
      .invoke("attr", "class")
      .should("include", "not-important");

    // cy.get("#edit").click();
    // cy.get(".todo-form.todo-form-visible.edit").should("exist");

    // cy.get("#todo-name-input").should("have.value", "Welcome to Cypress");
    // cy.get("#todo-name-input").type(" my dude");
    // cy.get("#todo-name-input").should(
    //   "have.value",
    //   "Welcome to Cypress my dude"
    // );
    // cy.get(".add-todo").click();

    // cy.get(".hide-todo-form").click();
    // cy.get(".todo-form").should("have.css", "top", "-300px");

    // cy.get(".todo-name").should("not.have.text", "Welcome to Cypress my dude");
  });
});
