describe('Add Product Page', () => {
  beforeEach(() => {
    cy.visit('https://commitquality.com/add-product');
  });

  it('Displays the Add Product page', () => {
    cy.contains('h1', 'Add Product').should('be.visible');
  });

  it('Displays the Name input', () => {
    cy.get('input[name="name"]').should('be.visible');
  });

  it('Displays the Price input', () => {
    cy.get('input[name="price"]').should('be.visible');
  });

  it('Displays the Date input', () => {
    cy.get('input[type="date"]').should('be.visible');
  });

  it('Displays the Submit button', () => {
    cy.get('button[type="submit"]').should('be.visible');
  });

  it('Displays the Cancel button', () => {
    cy.get('a[data-testid="cancel-button"]').should('be.visible');
  });

  describe('Label Tests', () => {
    beforeEach(() => {
      cy.visit('https://commitquality.com/add-product');
    });

    it('Displays a label for Name', () => {
      cy.get('label[for="name"]').should('exist').and('be.visible').and('contain.text', 'Name');
    });
  
    it('Displays a label for Price', () => {
      cy.get('label[for="price"]').should('exist').and('be.visible').and('contain.text', 'Price');
    });
  
    it('Displays a label for Date Stocked', () => {
      cy.get('label[for="dateStocked"]').should('exist').and('be.visible').and('contain.text', 'Date Stocked');
    });
  });

  describe('Form Submission buttons', () => {
    beforeEach(() => {
      cy.visit('https://commitquality.com/add-product');
    });

    it('Submit button and all the inputs work with valid data', () => {
      cy.get('input[data-testid="product-textbox"]').type('Antanas');
      cy.get('input[placeholder="Enter a price"]').type('123.45');
      cy.get('#dateStocked').type('2023-07-09');
      cy.contains("button", "Submit").click();
      cy.contains("ADVERTISE YOUR PRODUCT / SERVICE HERE: Contact me on X").should("be.visible");
      cy.url().should('eq', 'https://commitquality.com/');
    });

    it('Cancel button and all the inputs work with valid data', () => {
      cy.get('input[data-testid="product-textbox"]').type('Antanas');
      cy.get('input[placeholder="Enter a price"]').type('123.45');
      cy.get('#dateStocked').type('2023-07-09');
      cy.contains("a", "cancel").click();
      cy.contains("ADVERTISE YOUR PRODUCT / SERVICE HERE: Contact me on X").should("be.visible");
      cy.url().should('eq', 'https://commitquality.com/');
    });
  });

  it('Data was added to the table', () => { //praeiti lentele ir patikrinti ar yra vardas
    cy.get('input[data-testid="product-textbox"]').type('DataAdedToTheTable');
    cy.get('input[placeholder="Enter a price"]').type('123.45');
    cy.get('#dateStocked').type('2023-07-09');
    cy.contains("button", "Submit").click();
    cy.contains("DataAdedToTheTable").should("be.visible");
    cy.contains("123.45").should("be.visible");
    cy.contains("2023-07-09").should("be.visible");
    cy.url().should('eq', 'https://commitquality.com/');
  });

    describe('Form Submission', () => {
      beforeEach(() => {
        cy.visit('https://commitquality.com/add-product');
      });

    it('Name is required', () => {
      cy.get('input[placeholder="Enter a price"]').type('123.45');
      cy.get('#dateStocked').type('2023-07-09');
      cy.contains("button", "Submit").click();
      cy.contains('Name must be at least 2 characters.').should("be.visible");
    });

    it('Name should be at least 2 characters', () => {
      cy.get('input[data-testid="product-textbox"]').type('A');
      cy.get('input[placeholder="Enter a price"]').type('123.45');
      cy.get('#dateStocked').type('2023-07-09');
      cy.contains("button", "Submit").click();
      cy.contains('Name must be at least 2 characters.').should("be.visible");
    });

    it('Price is required', () => {
      cy.get('input[data-testid="product-textbox"]').type('Antanas');
      cy.get('#dateStocked').type('2023-07-09');
      cy.contains("button", "Submit").click();
      cy.contains('Price must not be empty and within 10 digits').should("be.visible");
    });

    it('Price must be within 10 digits', () => {
      cy.get('input[data-testid="product-textbox"]').type('Antanas');
      cy.get('input[placeholder="Enter a price"]').type('1234567891011');
      cy.get('#dateStocked').type('2023-07-09');
      cy.contains("button", "Submit").click();
      cy.contains('Price must not be empty and within 10 digits').should("be.visible");
    });

    it('Date is required', () => {
      cy.get('input[data-testid="product-textbox"]').type('Antanas');
      cy.get('input[placeholder="Enter a price"]').type('123.45');
      cy.contains("button", "Submit").click();
      cy.contains('Date must not be empty').should("be.visible");
    });

    it('Date must not be in the future', () => {
      cy.get('input[data-testid="product-textbox"]').type('A');
      cy.get('input[placeholder="Enter a price"]').type('123.45');
      cy.get('#dateStocked').type('2025-09-09');
      cy.contains("button", "Submit").click();
      cy.contains('Date must not be in the future.').should("be.visible");
    });
  });
});

//su valid data uzpildoma lentele ir duomenis perduodami
//testas su kalendoriumi spaudinejant