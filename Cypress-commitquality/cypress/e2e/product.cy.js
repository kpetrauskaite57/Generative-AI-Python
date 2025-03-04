describe('Loading products page', () => {
    beforeEach(() => {
        cy.visit('https://commitquality.com/')
    });

    it('Displays the products table', () => {
        cy.get("table.product-list-table").should("be.visible");
    });

    it('Displays the products filter', () => {
        // Is the input being displayed?
        // Is the filter button being displayed?
        // Is the Reset button being displayed?
        cy.get("button.filter-button").should("be.visible"); // Selected by <button> and class=filter-button
        cy.contains("Filter").should("be.visible"); // Selected by <button> and text=Filter
        cy.get("button[data-testid=reset-filter-button]").should("be.visible"); // Selected by <button> and attribute data-testid
    });

    it('Displays the show more button', () => {
        cy.contains("button", "Show More").should("be.visible");
    });

    it('Displays Add a Product button', () => {
        cy.contains("a", "Add a Product").should("be.visible");
    });
});

describe('Products table labels', () => {
    beforeEach(() => {
        cy.visit('https://commitquality.com/')
    });

    it('Product ID is displayed in the table header', () => {
        cy.get("table.product-list-table thead tr th").contains("ID").should("be.visible");
    });

    it('Name is displayed in the table header', () => {
        cy.get("table.product-list-table thead tr th").contains("Name").should("be.visible");
    });

    it('Price is displayed in the table header', () => {
        cy.get("table.product-list-table thead tr th").contains("Price").should("be.visible");
    });

    it('Date Stocked is displayed in the table header', () => {
        cy.get("table.product-list-table thead tr th").contains("Date Stocked").should("be.visible");
    });
});

describe('Products table columns', () => {
    beforeEach(() => {
        cy.visit('https://commitquality.com/')
    });

    it('Product ID is displayed in the table body', () => {
        cy.get("table.product-list-table tbody tr td[data-testid='id']").should("be.visible");
    });

    it('Name is displayed in the table body', () => {
        cy.get("table.product-list-table tbody tr td[data-testid='name']").should("be.visible");
    });

    it('Price is displayed in the table body', () => {
        // Assuming there is a `data-testid` for price, add it here
        cy.get("table.product-list-table tbody tr td[data-testid='price']").should("be.visible");
    });

    it('Date Stocked is displayed in the table body', () => {
        cy.get("table.product-list-table tbody tr td[data-testid='dateStocked']").should("be.visible");
    });
});

describe('Products filter', () => {
    beforeEach(() => {
        cy.visit('https://commitquality.com/')
    });

    it('Empty (single whitespace) filter should display the first 10 products', () => {
        cy.get("input.filter-textbox").type(" ");
        cy.contains("button", "Filter").click();
        cy.get("table.product-list-table tbody tr").should("have.length", 10);
    });

    it('Entering "Product 2" displays Product 2 items', () => {
        cy.get("input.filter-textbox").type("Product 2");
        cy.contains("button", "Filter").click();
        cy.get("table.product-list-table tbody tr").should("have.length", 6);
    });

    it('Entering non-existing product displays "No Products found"', () => {
        cy.get("input.filter-textbox").type("non-existing product");
        cy.contains("button", "Filter").click();
        cy.get("table.product-list-table tbody tr").should("have.length", 0);
        cy.contains("No products found").should("be.visible");
    });

    it('Clicking reset empties the "filter" input', () => {
        cy.get("input.filter-textbox").type("Product 2");
        cy.get("button[data-testid=reset-filter-button]").click();
        cy.get("input.filter-textbox").should("have.value", "");
    });

    it('Clicking reset displays the first 10 products', () => {
        cy.get("button[data-testid=reset-filter-button]").click();
        cy.get("table.product-list-table tbody tr").should("have.length", 10);
    });

    it ('Clicking Show More displays more products', () => {
        cy.get("button[data-testid=show-more-button]").click();
        cy.get("table.product-list-table tbody tr").should("have.length.greaterThan", 10);
    });

    it('Clicking Add Product displays the Add Product page', () => {
        cy.get("a.add-product-button").click();
        cy.contains("Add Product").should("be.visible");
        cy.url().should('eq', 'https://commitquality.com/add-product');
    });
});