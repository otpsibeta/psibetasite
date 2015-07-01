$("#create").on("click", function(){
	console.log("clicked");
	var email = $("#email").val();
	var pass = $("#password").val();
	var name = $("#name").val();
	if(pass !== $("#confirm").val()){
		alert("Password and Confirm Password are not the same");
	}
	var ref = new Firebase("https://torrid-heat-3899.firebaseIO.com");
	ref.createUser({
	  email    : email,
	  password : pass
	}, function(error, userData) {
	  if (error) {
	    console.log("Error creating user:", error);
	    alert("Error creating user:", error);
	  } else {
		  	var url = "https://torrid-heat-3899.firebaseIO.com/users/" + userData.uid;
		  	var userRef = new Firebase(url);
		    console.log("Successfully created user account with uid:", userData.uid);
		    userRef.transaction(function(currentData){
		    	if(currentData === null){
		    		currentData = 
			    	{ 
				    	fullName: name,
				    	paidDues: "Not Yet",
				    	userEmail: email
			    	}
		    	}
				return currentData;
		    }, function(){
		    	console.log("created data");

		    });
		  	alert("Successfully created user account!");
		  	location.assign("account-created.html");
	  }
	});

});
