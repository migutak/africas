const apioptions = {
    apiKey: 'c8f6dc99cbb87d29d85a5fc496bcd1e81e54141600e1b8aa1c43808c74018abd',         // use your sandbox app API key for development in the test environment
    username: 'sandbox',      // use 'sandbox' for development in the test environment
};
const AfricasTalking = require('africastalking')(apioptions);

// Initialize a service e.g. SMS
sms = AfricasTalking.SMS

// Use the service
const options = {
    to: ['+254724409198','+254722803176'],
    message: "Dear customer, Please download your demand notice @ https://2d649aff.ngrok.io/home"
}

// Send message and capture the response or error
sms.send(options)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });