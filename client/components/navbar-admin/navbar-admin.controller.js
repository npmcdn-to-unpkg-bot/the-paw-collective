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

        this.userEmail = this.getCurrentUser().email
    }

    isActive(route) {
        return route === this.$location.path()
    }
}

angular.module('animalCollectiveApp')
    .controller('NavbarAdminController', NavbarAdminController)
