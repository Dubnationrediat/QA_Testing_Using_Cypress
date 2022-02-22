
import loginpage from"./login_page"

describe('test suit', () => { 

    let log = new loginpage();

    it('loginpageobject', () => {
        
      log.navigate('https://trytestingthis.netlify.app/')
      log.enterUserName('test')
      log.enterPassWord('test')
      log.clickLogIn()
    });
 })










