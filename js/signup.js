var signup = {    
    init : function () {
        var signup_button = document.querySelector("#signup-button");
        signup_button.addEventListener("click",signup.showDetails);
    },
    showDetails : function () {        
        var username = document.querySelector("#username").value;
        var password = document.querySelector("#password").value;
        var confirmPassword = document.querySelector("#confirm-password").value;
        var email = document.querySelector("#email").value;
        var companyName = document.querySelector("#company-name").value;
        var designation = document.querySelector("#designation").value;
        if(signup.validateUsername(username) == false)
            console.error('invalid user name : '+username);
        if(signup.validatePassword(password , confirmPassword)) {
            console.error('password not matching');
        }
        if (signup.validateEmail(email) == false) {
            console.error('INvalid email address :'+email);
        }
        console.log('Welcome '+username);
    },
    validateUsername : function (username) {
        var usernameRegex = /^[a-zA-Z0-9]{6,19}$/;
        var result = usernameRegex.test(username.toLowerCase());
        return result;
    },
    validatePassword : function(password, confirmPassword) {
        if(password == confirmPassword)
            return true;
        else
           return false;
    },
    validateEmail : function (email) {
        var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var result = emailRegex.test(email);    
        return email;
    }
}
window.addEventListener("load", signup.init, false);