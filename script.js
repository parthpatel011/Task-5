$(document).ready(function() {
    var fname = $("#fname");
    var lname = $("#lname");
    var email = $("#email");
    var email_regex = /^[\w-.]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,4}$/;
    var number = $("#number");
    var number_regex = /^(\+91|\+91-|0)?[789]\d{9}$/;
    var password = $("#password");
    var password_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    var cfm_password = $("#cfm_password");




    fname.on("blur", function() {
        if (fname.val().trim().length === 0) {
            fname.attr('placeholder', 'Name is required');
            fname.css('border', '1px solid red');
            $('#fname_error').text('First Name is required');
          
        }
    });

    fname.on("focus", function() {
        fname.attr('placeholder', ''); 
        fname.css('border', ''); 
        $('#fname_error').text('');
    });

    fname.on("input", function() {
        if (fname.val().trim().length > 0) {
            fname.css('border', ''); 
        }
    });

    
    lname.on("blur", function() {
        if (lname.val().trim().length === 0) {
            lname.attr('placeholder', 'Name is required');
            lname.css('border', '1px solid red');
            $('#lname_error').text('Last Name is required');

        }
    });

    lname.on("focus", function() {
        lname.attr('placeholder', '');
        lname.css('border', ''); 
        $('#lname_error').text('');
    });

   lname.on("input", function() {
        if (lname.val().trim().length > 0) {
            lname.css('border', ''); 
        }
    });

    // For email id //

    email.on("blur", function() {
        if (!email_regex.test(email.val())) {
            email.attr('placeholder', 'Email is invalid');
            email.css('border', '1px solid red');
            $('#email_error').text('Enter Valid Email Id');
        }
    });

    email.on("focus", function() {
        email.attr('placeholder', ''); 
        email.css('border', ''); 
        $('#email_error').text('');
        });

    email.on("input", function() {
        if (email.val().trim().length > 0) {
            email.css('border', '');
        }
    });

    // For mobile number //
    
    number.on("blur", function() {
        if (!number_regex.test(number.val())) {
            number.attr('placeholder', 'Enter Valid Mobile Number');
            number.css('border', '1px solid red');
            $('#number_error').text('Enter Valid Mobile Number');
        }
    });

    number.on("focus", function() {
        number.attr('placeholder', ''); 
        number.css('border', ''); 
        $('#number_error').text('');
        });

    number.on("input", function() {
        if (number.val().trim().length > 0) {
            number.css('border', ''); 
        }
    });
    
    // For password //

     
    password.on("blur", function() {
        if (!password_regex.test(password.val())) {
            password.attr('placeholder', 'Enter Valid Mobile Number');
            password.css('border', '1px solid red');
            $('#password_error').text('Password must be more than 8 characters and contain atleast one Uppercase,Lowercase,Number and Special Character');
          
        }
    });

    password.on("focus", function() {
        password.attr('placeholder', '');
        password.css('border', ''); 
        $('#password_error').text('');
        });

    password.on("input", function() {
        if (password.val().trim().length > 0) {
            password.css('border', ''); 
        }
    });

    // For confirm password //


       
    cfm_password.on("blur", function() {
        if (cfm_password.val()!==password.val()) {
            cfm_password.attr('placeholder', 'Enter Valid Mobile Number');
            cfm_password.css('border', '1px solid red');
            $('#cfm_password_error').text('Both password must be same');
           
        }
    });

    cfm_password.on("focus", function() {
        cfm_password.attr('placeholder', ''); 
        cfm_password.css('border', ''); 
        $('#cfm_password_error').text('');
        });

    cfm_password.on("input", function() {
        if (cfm_password.val().trim().length > 0) {
            cfm_password.css('border', '');
        }
    });

    $("form").submit(function(event) {
        event.preventDefault(); 
        var valid = 0; 
        
        if (fname.val().length == '') {
            $('#fname_error').text('First Name is required');
            valid = 1; 
        }
        
        if (lname.val().length == '') {
            $('#lname_error').text('Last Name is required');
            valid = 1; 
        }
    
        if (email.val().length == '') {
            $('#email_error').text('Email Id is required');
            valid = 1; 
        }
    
        if (number.val().length == '') {
            $('#number_error').text('Mobile Number is required');
            valid = 1; 
        }
    
        if (password.val().length == '') {
            $('#password_error').text('Password is required');
            valid = 1; 
        }
    
        if (cfm_password.val().length == '') {
            $('#cfm_password_error').text('Confirm Password is required');
            valid = 1; 
        }
    
        if (valid == 0) {
            alert('All the values are valid and the form is submitted.');
        } 
        else{
            alert('All the field are required')
        }
    });
    
    
});
