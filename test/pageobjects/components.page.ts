class Components {

    public get headerAdmin () {
        return $('//*[@id="app"] // div [contains(@class, "oxd-topbar-header toggled")]');
    }

    public get nameSection () {
        return $('//*[@id="app"]/div[1]/div[1]/header/div[1] // h6 [contains(., "Dashboard")]');
    }

    public get nameAdmin () {
        return $('//*[@id="app"]/div[1]/div[1]/header // span [contains(@class, "oxd-userdropdown-tab")]');
    }

    public get navBar () {
        return $('//*[@id="app"]  // nav [contains(@class, "oxd-navbar-nav")]');
    }

    public get openCloseNavBarBtn () {
        return $('button[type="button"]');
    }

    public get myInfoBtn () {
        return $('//*[@id="app"]/div[1]/div[1]/aside/nav // li [contains(@class, "oxd-main-menu-item-wrapper")] [8]');
    }
}

export default new Components();
