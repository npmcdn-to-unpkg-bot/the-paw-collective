'use strict';

class NavbarAdminController {
    //start-non-standard
    menu = [{
        'title': 'Home',
        'link': '/'
    }];

    isCollapsed = true;
    //end-non-standard

    constructor($location, Auth) {
        this.$location = $location
        this.isLoggedIn = Auth.isLoggedIn
        this.isAdmin = Auth.isAdmin
        this.getCurrentUser = Auth.getCurrentUser

        this.title = "Create an animal"
        this.user = this.getCurrentUser()
    }

    isActive(route) {
        return route === this.$location.path()
    }
}

angular.module('paw_collective')
    .controller('NavbarAdminController', NavbarAdminController)
