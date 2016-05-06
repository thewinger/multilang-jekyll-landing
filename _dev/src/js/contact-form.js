var contactform =  document.getElementById('form-contact');
var email = btoa('winger.87');
var server = btoa('gmail.com');
var base_url = '//formspree.io/';
var action =  base_url + atob(email) + '@' + atob(server); 
contactform.setAttribute('action', action); 

