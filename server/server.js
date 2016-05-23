var auth0config = {
	service:      'auth0',
    loginStyle:   'popup',
    disableSignupAction: true
};

if (typeof Meteor.settings !== 'undefined' &&
	typeof Meteor.settings.auth0 !== 'undefined' &&
	typeof Meteor.settings.auth0.domain !== 'undefined' &&
	typeof Meteor.settings.auth0.clientId !== 'undefined' &&
	typeof Meteor.settings.auth0.secret !== 'undefined') {
	auth0config.domain = Meteor.settings.auth0.domain;
	auth0config.clientId = Meteor.settings.auth0.clientId;
	auth0config.secret = Meteor.settings.auth0.secret;

	if (typeof Meteor.settings.auth0.disableSignupAction !== 'undefined') {
		auth0config.disableSignupAction = Meteor.settings.auth0.disableSignupAction;
	}
} else {
	throw 'No auth0 configuration specified';
}

ServiceConfiguration.configurations.remove({ service: 'auth0' });
ServiceConfiguration.configurations.insert(auth0config);
