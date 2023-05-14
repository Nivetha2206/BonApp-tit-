function validateForm() {
    let x = document.forms["myForm"]["email"].value;
    if (x == "") {
      comsole.log("Name must be filled out");

    }
  }