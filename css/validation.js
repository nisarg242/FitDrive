$(document).ready(function () {
    $("#fName").focus();

    $("#contactForm").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            number:{
                required:true,
                number:true,
                digits:true
            },
            fName: {
                required: true
            },
            lName: {
                required: true
            },
            phone: {
                required: true,
                digits: true,
                rangelength: [10, 10]
            }
        },
        messages: {
            number: {
                rangelength: "Please enter a 10-digit phone number."
            }
        }
    }); // end validate
}); // end ready
