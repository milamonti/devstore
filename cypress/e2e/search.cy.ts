describe("search products", () => {
  beforeEach(() => cy.visit("http://localhost:3000"));

  it("should be able to search for products", () => {
    cy.get("input[name='query']").type("moletom").parent("form").submit();

    cy.location("pathname").should("include", "/search");
    cy.location("search").should("include", "q=moletom");

    cy.get("a[href^='/product']").should("exist");
  });
});
