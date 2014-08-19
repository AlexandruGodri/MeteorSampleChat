var messages = new Meteor.Collection("chatMessages");

Template.chat.isLoggedIn = function() {
	return SessionAmplify.get("isLoggedIn");
}

Template.chatLoggedIn.nickname = function() {
	return SessionAmplify.get("nickname");
}

Template.chatMessages.messagesList = function() {
	var list = messages.find(
		{
		},
		{
			sort: { ts : -1 },
			limit: 50
		}
	);
	return list;
}

Template.chat.events = {
	'click #btnChoose': function() {
		var nickname = document.getElementById('inputNickname').value;
		SessionAmplify.set('nickname', nickname);
		SessionAmplify.set('isLoggedIn', true);
	},
	'click #btnSend': function() {
		var message = document.getElementById('inputMessage').value;
		var nickname = SessionAmplify.get("nickname");
		messages.insert({
			nickname: nickname,
			message: message,
			ts: new Date().getTime() 
		});
		document.getElementById('inputMessage').value = "";
		document.getElementById('inputMessage').focus();
	}
}

