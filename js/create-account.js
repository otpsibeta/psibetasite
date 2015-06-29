$("#login").on("click", function(){
	var email = $("#email").val();
	var pass = $("#password").val();
	var ref = new Firebase("https://torrid-heat-3899.firebaseIO.com");
	ref.createUser({
	  email    : email,
	  password : pass
	}, function(error, userData) {
	  if (error) {
	    console.log("Error creating user:", error);
	  } else {
	    console.log("Successfully created user account with uid:", userData.uid);
	  }
	});
});