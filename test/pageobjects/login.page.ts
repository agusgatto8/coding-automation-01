import { $ } from '@wdio/globals'
import Page from './page';

class LoginPage extends Page {

    public get pageTitle () {
        return $('//*[@id="app"]/div[1]/div // h5 [contains(., "Login")]');
    }

    public get inputUsername () {
        return $('[name="username"]');
    }

    public get inputPassword () {
        return $('[name="password"]');
    }

    public get btnSubmit () {
        return $('button[type="submit"]');
    }

    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    public open () {
        return super.open('web/index.php/auth/login');
    }
}

export default new LoginPage();
