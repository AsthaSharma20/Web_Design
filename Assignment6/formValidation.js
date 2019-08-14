$(document).ready(function () {
    $("#submitBtn").click(function (e) {
        e.preventDefault();
        $(".error").remove();
        var validate = true;
        if ($("input[name='title']:checked").length <= 0) {
            $('#radioError').append('<span class="error">This field is required</span>');
            validate = false;
        }
        else {
            console.log("Radio button has been selected");
            validate = true;
        }
        if ($("#firstName").val().match('^[a-zA-Z]{3,16}$')) {
            console.log("Valid first name");
            validate = true;
        } else {
            $('#firstName').after('<span class="error">This is not a valid first name</span>');
            validate = false;
        }
        if ($("#lastName").val().match('^[a-zA-Z]{3,16}$')) {
            console.log("Valid last name");
            validate = true;
        } else {
            $('#lastName').after('<span class="error">This is not a valid last name</span>');
            validate = false;
        }
        if ($("#emailId").val().match('[^@]+@[^@]+\.[a-zA-Z]{2,6}')) {
            console.log("Valid email");
            validate = true;
        } else {
            $('#emailId').after('<span class="error">This is not a valid emaid id</span>');
            validate = false;
        }
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if ($("#phoneNumber").val().match(phoneno)) {
            console.log("Valid phone no");
            validate = true;
        } else {
            $('#phoneNumber').after('<span class="error">This is not a valid phone number</span>');
            validate = false;
        }
        var zipCode = /^\d{5}(?:-?\d{4})?$/;
        if ($("#zipcode").val().match(zipCode)) {
            console.log("Valid zipcode");
            validate = true;
        } else {
            $('#zipcode').after('<span class="error">This is not a valid zipcode</span>');
            validate = false;
        }
        if ($("input[name='source']:checked").length <= 0) {
            $('#checkBoxError').append('<span class="error">This field is required</span>');
            validate = false;
        }
        else {
            validate = true;
            console.log("Checkbox selected");
        }
        if($.trim($('#comments').val()) == '') {
            $('#comments').after('<span class="error">The comments field cant be empty</span>');
            validate = false;
        }

        if(validate === true){
           results();
        }
        
    });
    $("#resetBtn").click(function() {
        $(".error").remove();
    });
    
});


function showHide(checked){
    if(checked===true)
        { $("#heading").fadeIn();
        $("#hiddenField").fadeIn();}
    else { $("#heading").fadeOut();
        $("#hiddenField").fadeOut();}
}

function firstValid(){
    var fname = document.getElementById("firstName").value;

    if(fname.length==0)
    {
        producePrompt("First Name is required","commentFNamePrompt","red");
        return false;
    }

    if(!fname.match(/^[a-zA-Z]{3,16}$/))
    {
        producePrompt("Please enter correct last name","commentFNamePrompt","red");
        return false;
    }

    producePrompt("Valid Name" , "commentFNamePrompt", "beige");
    return true;
}

function lastValid(){
    var lname = document.getElementById("lastName").value;

    if(lname.length==0)
    {
        producePrompt("Last Name is required","commentLNamePrompt","red");
        return false;
    }

    if(!lname.match(/^[a-zA-Z]{3,16}$/))
    {
        producePrompt("Please enter correct last name","commentLNamePrompt","red");
        return false;
    }

    producePrompt("Valid Name" , "commentLNamePrompt", "beige");
    return true;
}

function emailValid(){
    var email = document.getElementById("emailId").value;

    if(email.length==0)
    {
        producePrompt("Email is required","commentEmailPrompt","red");
        return false;
    }

    if(!email.match(/[^@]+@[^@]+\.[a-zA-Z]{2,6}/))
    {
        producePrompt("Please enter correct Email ID","commentEmailPrompt","red");
        return false;
    }

    producePrompt("Valid Email" , "commentEmailPrompt", "beige");
    return true;
}

function phoneValid(){
    var phn = document.getElementById("phoneNumber").value;

    if(phn.length==0)
    {
        producePrompt("Phone Number is required","commentPhonePrompt","red");
        return false;
    }

    if(!phn.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/))
    {
        producePrompt("Please enter correct phone number","commentPhonePrompt","red");
        return false;
    }

    producePrompt("Valid Phone" , "commentPhonePrompt", "beige");
    return true;
}

function zipValid(){
    var zipcode = document.getElementById("zipcode").value;

    if(zipcode.length==0)
    {
        producePrompt("Zip Code is required","commentZipPrompt","red");
        return false;
    }

    if(!zipcode.match(/^\d{5}(?:-?\d{4})?$/))
    {
        producePrompt("Please enter correct zip code","commentZipPrompt","red");
        return false;
    }

    producePrompt("Valid Zipcode" , "commentZipPrompt", "beige");
    return true;
}

function validComment(){
    var comments = document.getElementById("comments").value;

    if(comments.length==0)
    {
        producePrompt("Comment is required","commentCommentPrompt","red");
        return false;
    }
    producePrompt("Valid Comment" , "commentCommentPrompt", "beige");
    return true;
}


function validTextbox(){
    var txtbox = document.getElementById("hiddenField").value;

    if(txtbox.length==0)
    {
        producePrompt("Text","commentTextPrompt","red");
        return false;
    }
    producePrompt("Valid" , "commentTextPrompt", "beige");
    return true;
}

function producePrompt(message, promptLocation, color){
    document.getElementById(promptLocation).innerHTML = message;
    document.getElementById(promptLocation).style.color = color;
}

function results(){

  if(document.getElementById("mr").checked){
   var title = document.getElementById('mr').value;
  }
  else if(document.getElementById("miss").checked){
   var title = document.getElementById('miss').value;
  }
  else {
     var title = document.getElementById('mrs').value;
  }



  var fm = document.getElementById("firstName").value;
  var lastname = document.getElementById("lastName").value;
  var email = document.getElementById('emailId').value;
  var phone =  document.getElementById('phoneNumber').value;
  var zip = document.getElementById('zipcode').value;
//  var hear = document.getElementById('').value;
  var exp = document.getElementById('Country').value;
//  var work = document.getElementById('').value;
  var CName = document.getElementById('hiddenField').value;
  var comm = document.getElementById('comments').value;

  var here=document.getElementsByName('source');

    var selectedItems="";
    for(var i=0; i<here.length; i++){
      if(here[i].type=='checkbox' && here[i].checked==true)
        selectedItems+=here[i].value+"\n";
    }

  
 
  document.write("<table border='1' width = '75%'>");
  document.write("<tr>");
  document.write("<td> Title</td>");
  document.write("<td> First Name</td>");
  document.write("<td> Last Name</td>");
  document.write("<td> Email</td>");
  document.write("<td> Phone</td>");
  document.write("<td> Zip Code</td>");
  document.write("<td>Reference</td>");
  document.write("<td> Country Name</td>");
  document.write("<td> City Name</td>");
  document.write("<td> Comments</td>");
  document.write("</tr>");
  document.write("<tr>");
  document.write("<td>"+title+"</td>");
  document.write("<td>"+fm+"</td>");
  document.write("<td>" +lastname+"</td>");
  document.write("<td> "+email+"</td>");
  document.write("<td>" +phone+"</td>");
  document.write("<td>" +zip+"</td>");
  document.write("<td>" +selectedItems+"</td>");
  document.write("<td>" +exp+"</td>");
  document.write("<td>" +CName+"</td>");
  document.write("<td>" +comm+"</td>");
  document.write("</tr>");
  document.write("</table>");
}

function cnt()
{
  document.getElementsByClassName("City")[0].style.display="block";
}
