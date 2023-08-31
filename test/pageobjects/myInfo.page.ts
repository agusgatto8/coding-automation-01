import Components from '../pageobjects/components.page';

class InfoAdminPAge {

    public get inputFirstName () {
        return $('[name="firstName"]');
    }

    public get inputLastName () {
        return $('[name="lastName"]');
    }

    public get inputDateOfBirth () {
        return $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[3]/div[2]/div[1] // input [contains(@class, "oxd-input oxd-input--active")]');
    }

    public get saveBtn () {
        return $('button[type="submit"]');
    }

    public async nameCheck () {
        const firstName = await this.inputFirstName.getValue();
        const lastName = await this.inputLastName.getValue();
        const firstAndLastName = firstName + ' ' + lastName;
        const nameDashboard = await Components.nameAdmin.getText();
        if(nameDashboard === firstAndLastName) {
            console.log('The names are identical!')
        } else {
            console.log('There are differences in the names!')
        }
    }
}

export default new InfoAdminPAge();