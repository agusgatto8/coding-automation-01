import Components from '../pageobjects/components.page';

class InfoAdminPAge {

    public get inputFirstName () {
        return $('[name="firstName"]');
    }

    public get inputLastName () {
        return $('[name="lastName"]');
    }


    public async nameCheck () {
        const firstName = await this.inputFirstName.getValue();
        const lastName = await this.inputLastName.getValue();
        const firstAndLastName = firstName + ' ' + lastName;
        const nameDashboard = await Components.nameAdmin.getText();
        console.log(await nameDashboard);
        console.log(await firstAndLastName);
        if(nameDashboard === firstAndLastName) {
            console.log('The names are identical!')
        } else {
            console.log('There are differences in the names!')
        }
    }
}

export default new InfoAdminPAge();