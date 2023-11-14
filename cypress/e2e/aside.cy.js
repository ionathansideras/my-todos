// Describe block for the "Aside test"
describe("Aside test", () => {
  // Test case: Opens the aside and tests the functionalities
  it("Opens the aside and tests the functionalities", () => {
    // Visit the specified URL
    cy.visit("http://localhost:5173/my-todos/");

    // Click on the menu toggle button
    cy.get(".menu-toggle").click();

    // Assert that the aside has been opened (left position is 0px)
    cy.get(".aside").should("have.css", "left", "0px");

    // Assert that there is a project with data-active attribute set to true
    cy.get(".projects").find("[data-active='true']").should("exist");

    // Type "sup" into the project input and assert its value
    cy.get(".project-input").type("sup").should("have.value", "sup");

    // Click on the "Add" button to add the project
    cy.get(".project-add").click();

    // Assert that a project containing "sup" exists in the projects list
    cy.get(".projects").find(":contains('sup')").should("exist");

    // The next line is repeated; you might want to remove one of them
    cy.get(".projects").find(":contains('sup')").should("exist");

    // Click on a project with data-active attribute set to false
    cy.get(".projects").find("[data-active='false']").click();

    // Assert that the project with text "sup" now has data-active attribute set to true
    cy.get(".projects")
      .find(":contains('sup')")
      .should("have.attr", "data-active", "true");

    // Click on the delete button of the project with text "sup"
    cy.get(".projects")
      .find(":contains('sup')")
      .find(".delete-project")
      .click();

    // Assert that the project with text "sup" no longer exists
    cy.get(".projects").find(":contains('sup')").should("not.exist");

    // Assert that there is still a project with data-active attribute set to true
    cy.get(".projects").find("[data-active='true']").should("exist");

    // Click on the menu toggle button to close the aside
    cy.get(".menu-toggle").click();

    // Assert that the aside is closed (left position is -300px)
    cy.get(".aside").should("have.css", "left", "-300px");
  });
});
