$("#login").click(function(){
    
    var pass1 = $("#pass1").val();
    console.log(pass1);
    var pass2 = $("#pass2").val();

    if(pass1!= "" && pass2!=""){
        if(pass1 === pass2){
            alert('hi')
        }
        else{
            alert('who the fuck are you');
        }
    }
    else{
        alert('Dont be a shit')
    }




})