document.getElementById('submit').addEventListener('click', function(){
    submitForm()
});


function submitForm(){
    
    // Retriving all input 
    var fName = document.getElementById('first');
    var firstN = fName.value;

    var lName = document.getElementById('last');
    var lastN = lName.value;

    var cor = document.getElementById('course');
    var course = cor.value;

    var sNum = document.getElementById('secNum');
    var sect = sNum.value;

    var rol = document.getElementById('role');
    var role = rol.value;

    // person object
    var Person = {"firstName": firstN,"lastName": lastN,"course": course,"section": sect,"role": role};
    
    // output!
    console.log("Person object:");
    console.log(Person);
    console.log("JSON format:");
    console.log(JSON.stringify(Person,null,4));
}
