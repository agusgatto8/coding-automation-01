
class HomePageAdmin {

    public get dashboardAdminContainer () {
        return $('//*[@id="app"] // div [contains(@class, "oxd-layout-context")]');
    }

    public get timeWorkSection () {
        return $('//*[@id="app"] // p [contains(., "Time at Work")]');
    }

    public get myActionsSection () {
        return $('//*[@id="app"] // p [contains(., "My Actions")]');
    }

    public get quickLaunchSection () {
        return $('//*[@id="app"] // p [contains(., "Quick Launch")]');
    }
}

export default new HomePageAdmin();
