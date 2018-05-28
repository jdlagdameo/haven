/**
 * Haven JS File
 * @author: John Dave Lagdameo
 * @since: 05/28/2018
 */

// prevent copy paste for contact no.
preventCopyPasteInput([$("#contact_no")]);

$(function () {
    setupTimeDropDown();
    $("#btn-submit").click(function () {
        var full_name = $("#full_name").val();
        var email_address = $("#email_address").val();
        var contact_no = $("#contact_no").val();
        var book_meeting = $("#book_meeting").val();
        var day = $("#day").val();
        var time = $("#time").val();
        var message = $("#message").val();

        if (!haveVal(full_name)) {
            alert("Full name is required");
            $('#full_name').focus();
        }else if (!haveVal(email_address)) {
            alert("Email address is required");
            $('#email_address').focus();
        }else if (!haveVal(contact_no)) {
            alert("Contact number is required");
            $('#contact_no').focus();
        }else if (!haveVal(book_meeting)) {
            alert("Type is required");
            $('#book_meeting').focus();
        }else if (!haveVal(day)) {
            alert("Day is required");
            $('#day').focus();
        }else if (!haveVal(time)) {
            alert("Time is required");
            $('#time').focus();
        }else if (!haveVal(message)) {
            alert("Message is required");
            $('#message').focus();
        }else{
            alert("Success");
            location.reload();
        }
    });
    
    $("#btn-submit-newsletter").click(function () {
        var full_name = $("#n_full_name").val();
        var email_address = $("#n_email_address").val();
        if (!haveVal(full_name)) {
            alert("Full name is required");
            $('#n_full_name').focus();
        }else if (!haveVal(email_address)) {
            alert("Email address is required");
            $('#n_email_address').focus();
        }else{
            alert("Success");
            location.reload();
        }
    });
});


function haveVal(str) {
    return str.trim().length != 0;
}

function setupTimeDropDown() {
    var html = '<select id="time">';
    var day = ['AM','PM'];
    html+='<option value="">Preferred time*</option>';
    for(var c=0; c<2;c++){
        for(var x=1; x<=12; x++){
            var time_val = x+':00 ';
            if(x == '12'){
                time_val+= (day[c]=='AM'?'PM':'AM');
            }else{
                time_val+= day[c];
            }
            html+='<option value="'+time_val+'">'+time_val+'</option>';
        }
    }
    html+='</select>';
    $("#time_container").html(html);
}

/**
 * Prevent String in Input Field
 *
 * @param event
 *
 * return boolean
 */
function preventString(event) {
    var key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8 || event.keyCode === 46
        || event.keyCode === 37 || event.keyCode === 39) {
        return true;
    } else if (key < 48 || key > 57) {
        return false;
    } else
        return true;
}

/**
 * Prevent Copy Paste in Input Field
 *
 * @param array inputArr - element array
 *
 */
function preventCopyPasteInput(inputArr) {
    var len = inputArr.length;
    for (var x = 0; x < len; x++) {
        inputArr[x].bind('cut copy paste', function (e) {
            e.preventDefault();
        });
    }
}
