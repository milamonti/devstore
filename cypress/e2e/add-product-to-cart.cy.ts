describe("add product to cart", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("should be able to navigate to the product page and add it to cart", () => {
    cy.get("a[href^='/product'").first().click();

    cy.url().should("include", "/product");

    cy.contains("Adicionar ao carrinho").click();

    cy.contains("Cart (1)").should("exist");
  });

  it("should not add duplicated items do cart", () => {
    cy.get("a[href^='/product'").first().click();

    cy.url().should("include", "/product");

    cy.contains("Adicionar ao carrinho").click();
    cy.contains("Adicionar ao carrinho").click();

    cy.contains("Cart (1)").should("exist");
  });

  it("should be able to search for a product and add it to cart", () => {
    cy.get("input[name='query']").type("moletom").parent("form").submit();

    cy.url().should("include", "/search?q=moletom");

    cy.get("a[href^='/product'").first().click();

    cy.url().should("include", "/product");

    cy.contains("Adicionar ao carrinho").click();
  });
});
