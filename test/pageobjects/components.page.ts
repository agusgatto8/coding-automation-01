class Components {

    public get headerAdmin () {
        return $('//*[@id="app"] // div [contains(@class, "oxd-topbar-header toggled")]');
    }

    public get nameSection () {
        return $('//*[@id="app"]/div[1]/div[1]/header // div [contains(@class, "oxd-topbar-header-title")]');
    }

    public get nameAdmin () {
        return $('//*[@id="app"]/div[1]/div[1]/header // span [contains(@class, "oxd-userdropdown-tab")]');
    }

    public get logoutBtn () {
        return $('[href="/web/index.php/auth/logout"]');
    }

    public get navBar () {
        return $('//*[@id="app"]  // nav [contains(@class, "oxd-navbar-nav")]');
    }

    public get openCloseNavBarBtn () {
        return $('button[type="button"]');
    }

    public get myInfoBtn () {
        return $('//*[@id="app"]/div[1]/div[1]/aside/nav // li [contains(@class, "oxd-main-menu-item-wrapper")] [6]');
    }
}

export default new Components();
