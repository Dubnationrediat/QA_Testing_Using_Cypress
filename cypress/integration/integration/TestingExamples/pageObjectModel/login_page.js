
export default class loginpage{

    userNameId = '#uname'
    passwordId = '#pwd'
    ButtonId='[type="submit"]'

    navigate(url){
        cy.visit(url);
    }
     enterUserName(name){
        cy.get(this.userNameId).type(name);
     }
     enterPassWord(password){
        cy.get(this.passwordId).type(password);
     }
     clickLogIn(){
        cy.get(this.ButtonId).click();
     }
}




