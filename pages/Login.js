const { I } = inject();

// const { I, registerPage } = inject();

module.exports = {

  // Add your locators and methods here
  
  // setting locators
  txt: {
    email: '[name="username"]',
    password: '[name="password"]'
  },
  btn:{
    submit: {css: '.form-group-buttons>.btn.btn-primary'},
  },

  // introducing methods
  authenticate(email, password) {
    I.amOnPage('/')
    I.see('Welcome Back, Please login');
    I.fillField(this.txt.email, email);
    I.fillField(this.txt.password, password);
    I.click(this.btn.submit);
  },

  register(email, password) {
    // use another page object inside current one
    registerPage.registerUser({ email, password });
  }

}
