function validation(){
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter the Username"
        return false; 
    }
}