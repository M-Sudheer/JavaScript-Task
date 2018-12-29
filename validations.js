alert(HTMLOptionsCollection)
function registerValidate()
{
    
    let remail=/^[a-z0-9][^A-Z]{5,10}/;
    let rmobile=/^[8|9|7|6][0-9]{9}/;

    let firstname=document.getElementById("fname").value;
    let lastname=document.getElementById("lname").value;
    let remail=document.getElementById("email").value;
    let mobile=document.getElementById("mobile").value;
    let password=document.getElementById("password").value;
    let confirmpassword=document.getElementById("confirmpassword").value;

    if(firstname==""){
        document.getElementById("validfirstname").innerHTML="Enter First Name";
        return false;
    }

    if(lastname==""){
        document.getElementById("validlastname").innerHTML="Enter Last Name";
        return false;
    }
    
    if(remail==""|!remail.test(email)){
        document.getElementById("validemail").innerHTML="EX: 'abc@gmail.com' ";
        return false;
    }
 
    if(mobile==""|!rmobile.test(mobile)){
        document.getElementById("validmobile").innerHTML="Mobile No. has to start only with 6/7/8/9";
        return false;
    }

    if(password==""|!rpassword.test(password)){
        document.getElementById("validpassword").innerHTML="Password must be alphanumeric";
        return false;
    }

    if(confirmpassword==""|confirmpassword!=password){
        document.getElementById("validpassword").innerHTML="Password and confirm password must be same";
        return false;
    }

}    

function loginValidate(){
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;

    if(email==""|email!="user@gmail.com"){
        document.getElementById("loginemail").innerHTML="Incorrect Email";
        return false;
    }

    if(password==""|password!="123456"){
        document.getElementById("loginpassword").innerHTML="Incorrect Password";
        return false;
    }

    var person=new Person();
   person.firstname=firstname;
   person.middlename=middlename;
   person.lastname=lastname;
   person.email=email;
   person.mobile=mobile;
   person.password=password;
   person.confirmpassword=confirmpassword;

   console.log(person);
}

class Person{

    constructor(){
        this.firstname="";
        this.middlename="";
        this.lastname="";
        this.email="";
        this.mobile="";
        this.password="";
        this.confirmpassword="";
    }
    
}