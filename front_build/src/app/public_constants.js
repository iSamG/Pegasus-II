/**
 * Created by Kaygee on 27/03/2015.
 */

if (!window.location.origin) {
    window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
}

angular.module('pegasusApp.constants', [])
    .constant('PGConstants', {
        app_name : 'Pegasus',
        app_url : 'http://www.pegasusrises.com',
        app_email : 'support@pegasusrises.com',
        cacheMaxAge : 61 * 60 * 1000 // 1 hour 1minute,
    })
    .constant('PGRoutes', {
        authentication : '/auth/user',
        sendPasswordResetToken : 'user/send/password/link',
        register : '/register',
        login : '/login',
        logout : '/logout'
    });