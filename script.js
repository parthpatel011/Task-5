$(document).ready(function() {
    var fname = $("#fname");
    // var name_regex = /^[a-zA-Z]+$/;
    var lname = $("#lname");
    var email = $("#email");
    var email_regex = /^[\w-.]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,4}$/;
    var number = $("#number");
    var number_regex = /^(\+91|\+91-|0)?[789]\d{9}$/;
    var password = $("#password");
    var password_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    var cfm_password = $("#cfm_password");
    // var isValid = true; 



    fname.on("blur", function() {
        if (fname.val().trim().length === 0) {
            fname.attr('placeholder', 'Name is required');
            fname.css('border', '1px solid red');
            $('#fname_error').text('First Name is required');
            // isValid = false;
        }
    });

    fname.on("focus", function() {
        fname.attr('placeholder', ''); // Remove the placeholder text on focus
        fname.css('border', ''); 
        $('#fname_error').text('');
    });

    fname.on("input", function() {
        if (fname.val().trim().length > 0) {
            fname.css('border', ''); // Remove the red border if a valid name is entered
        }
    });

    
    lname.on("blur", function() {
        if (lname.val().trim().length === 0) {
            lname.attr('placeholder', 'Name is required');
            lname.css('border', '1px solid red');
            $('#lname_error').text('Last Name is required');
            // isValid = false; 

        }
    });

    lname.on("focus", function() {
        lname.attr('placeholder', ''); // Remove the placeholder text on focus
        lname.css('border', ''); 
        $('#lname_error').text('');
    });

   lname.on("input", function() {
        if (lname.val().trim().length > 0) {
            lname.css('border', ''); // Remove the red border if a valid name is entered
        }
    });

    // For email id //

    email.on("blur", function() {
        if (!email_regex.test(email.val())) {
            email.attr('placeholder', 'Email is invalid');
            email.css('border', '1px solid red');
            $('#email_error').text('Enter Valid Email Id');
            // isValid = false; 
        }
    });

    email.on("focus", function() {
        email.attr('placeholder', ''); // Remove the placeholder text on focus
        email.css('border', ''); 
        $('#email_error').text('');
        });

    email.on("input", function() {
        if (email.val().trim().length > 0) {
            email.css('border', ''); // Remove the red border if a valid name is entered
        }
    });

    // For mobile number //
    
    number.on("blur", function() {
        if (!number_regex.test(number.val())) {
            number.attr('placeholder', 'Enter Valid Mobile Number');
            number.css('border', '1px solid red');
            $('#number_error').text('Enter Valid Mobile Number');
            // isValid = false; 
        }
    });

    number.on("focus", function() {
        number.attr('placeholder', ''); // Remove the placeholder text on focus
        number.css('border', ''); 
        $('#number_error').text('');
        });

    number.on("input", function() {
        if (number.val().trim().length > 0) {
            number.css('border', ''); // Remove the red border if a valid name is entered
        }
    });
    
    // For password //

     
    password.on("blur", function() {
        if (!password_regex.test(password.val())) {
            password.attr('placeholder', 'Enter Valid Mobile Number');
            password.css('border', '1px solid red');
            $('#password_error').text('Password must be more than 8 characters and contain atleast one Uppercase,Lowercase,Number and Special Character');
            // isValid = false; 
        }
    });

    password.on("focus", function() {
        password.attr('placeholder', ''); // Remove the placeholder text on focus
        password.css('border', ''); 
        $('#password_error').text('');
        });

    password.on("input", function() {
        if (password.val().trim().length > 0) {
            password.css('border', ''); // Remove the red border if a valid name is entered
        }
    });

    // For confirm password //


       
    cfm_password.on("blur", function() {
        if (cfm_password.val()!==password.val()) {
            cfm_password.attr('placeholder', 'Enter Valid Mobile Number');
            cfm_password.css('border', '1px solid red');
            $('#cfm_password_error').text('Both password must be same');
            // isValid = false; 
        }
    });

    cfm_password.on("focus", function() {
        cfm_password.attr('placeholder', ''); // Remove the placeholder text on focus
        cfm_password.css('border', ''); 
        $('#cfm_password_error').text('');
        });

    cfm_password.on("input", function() {
        if (cfm_password.val().trim().length > 0) {
            cfm_password.css('border', ''); // Remove the red border if a valid name is entered
        }
    });


    $("form").submit(function(event) {
        event.preventDefault(); // Prevents the form from submitting
        var isValid = false;
        if(fname.val().length == ''){
            $('#fname_error').text('First Name is required');

        }
        if(lname.val().length == ''){
            $('#lname_error').text('Last Name is required');
        }
        if(email.val().length == ''){
            $('#email_error').text('Email Id is required');
        }
        if(number.val().length == ''){
            $('#number_error').text('Mobile Number is required');
        }
        if(password.val().length == ''){
            $('#password_error').text('Password is required');
        }
        if(cfm_password.val().length == ''){
            $('#cfm_password_error').text('Confirm Password is required');
        }
        

        // if (isValid) {
        //     // All validations passed, allow form submission
        //     $("form").off("submit").submit();
        // }

    });
});
