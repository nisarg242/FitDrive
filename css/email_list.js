$(document).ready(function () {
    // add span element after each input element
    $(":text").after("<span>*</span>");

    // move focus to first text box
    $("#fName").focus();

    // the handler for the click event of a submitbutton
    $("#contactForm").submit(
		function (event) {
		    var isValid = true;

		    // validate the email entry with a regular expression
		    var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
		    var email = $("#email").val();
		    if (email == "") {
		        $("#email").next().text("This field is required.");
		        isValid = false;
		    } else if (!emailPattern.test(email)) {
		        $("#email").next().text("Must be a valid email address.");
		        isValid = false;
		    } else {
		        $("#email").next().text("");
		    }

		    // validate the second email entry
		    var email2 = $("#email_2").val();
		    if (email2 == "") {
		        $("#email_2").next().text("This field is required.")
		        isValid = false;
		    } else if (email !== email2) {
		        $("#email_2").next().text("Must equal first email entry.");
		        isValid = false;
		    } else {
		        $("#email_2").next().text("");
		    }

		    // validate the first name entry
		    var firstName = $("#fName").val().trim();
		    if (firstName == "") {
		        $("#fName").next().text("This field is required.");
		        isValid = false;
		    }
		    else {
		        $("#fName").val(firstName);
		        $("#fName").next().text("");
		    }

		    // validate the last name entry
		    var lastName = $("#lName").val().trim();
		    if (lastName == "") {
		        $("#lName").next().text("This field is required.");
		        isValid = false;
		    }
		    else {
		        $("#lName").val(lastName);
		        $("#lName").next().text("");
		    }

		    // validate the state entry
		    var state = $("#state").val();
		    if (state == "") {
		        $("#state").next().text("This field is required.");
		        isValid = false;
		    } else if (state.length != 2) {
		        $("#state").next().text("Use 2-character code.");
		        isValid = false;
		    }
		    else {
		        $("#state").next().text("");
		    }

		    // validate the zip code entry (regular expression)
		    var zip = $("#phone").val();
		    if (zip == "") {
		        $("#phone").next().text("This field is required.");
		        isValid = false;
		    } else if (zip.length != 10) {
		        $("#phone").next().text("Phone number is incorrect.");
		        isValid = false;
		    }
		    else {
		        $("#phone").next().text("");
		    }

		    // submit the form if all entries are valid 
		    if (isValid == false) {
		        event.preventDefault();
		    }
		} // end function
	);	// end submiy
}); // end ready