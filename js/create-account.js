$("#create").on("click", function(){
	var email = $("#email").val();
	var pass = $("#password").val();
	if(pass !== $("#confirm").val()){
		alert("Password and Confirm Password are not the same");
		location.reload();
	}
	var ref = new Firebase("https://torrid-heat-3899.firebaseIO.com");
	ref.createUser({
	  email    : email,
	  password : pass
	}, function(error, userData) {
	  if (error) {
	    console.log("Error creating user:", error);
	  } else {
	    //console.log("Successfully created user account with uid:", userData.uid);
	  	alert("Successfully created user account!");
	  	location.reload();
	  }
	});
});