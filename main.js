//Declaring global Variables
var balance=0
var deposit1=0
var withdraw1=0
var i=0
var pin=""
var count=0




if(document.getElementById('x')!=null){

    document.getElementById('x').addEventListener("click", function() {
        
        let n=(Number) (document.getElementById("c").value);

        console.log(n)
        console.log(typeof n)
        if(n>=1 && n<=5){
            document.getElementById("pin").style.display="none";
            document.getElementById("amb1").style.display="block";
        }else if(n>5 && n<=10){
            document.getElementById("pin").style.display="none";
            document.getElementById("amb2").style.display="block";
        }else if(n>10 && n<=20){
            document.getElementById("pin").style.display="none";
            document.getElementById("amr1").style.display="block";
        }else if(n>20 && n<=25){
            document.getElementById("pin").style.display="none";
            document.getElementById("amc1").style.display="block";
        }else if(n>25 && n<=30){
            document.getElementById("pin").style.display="none";
            document.getElementById("amc2").style.display="block";
        }else if(n>30 && n<=35){
            document.getElementById("pin").style.display="none";
            document.getElementById("ams1").style.display="block";
        }else if(n>35 && n<=40){
            document.getElementById("pin").style.display="none";
            document.getElementById("ams2").style.display="block";
        }
    });

}

//---------------------------------------------------------For Pop-Up Log in and Sign Up-------------------------------------------------------

//----------------------------------------------for Log in---------------------------------------

if(document.getElementById('login')!=null){

    document.getElementById('login').addEventListener("click", function() {
        document.querySelector('.popup').style.display = "flex";

    });

}

    document.querySelector('.close').addEventListener("click", function() {
        document.querySelector('.popup').style.display = "none";
        // document.querySelector('.successfull').style.display = "none";
        document.getElementById("username").style.borderColor="grey"
        document.getElementById("password").style.borderColor="grey"
        document.getElementById("val").innerHTML=""
        document.getElementById("loginform").reset()
    });



function validate(){
    let username=document.getElementById('username').value
    let password=document.getElementById("password").value
   
    // window.localStorage.setItem(JSON.stringify(username), JSON.stringify(password));
    let m=`"${password}"`
    let k=`"${username}"`
    let s= localStorage.getItem(k)
    console.log(m)
    console.log(s)
    if(s==m){
        document.getElementById("loginform").reset();
        return true
    }else{
        document.getElementById("username").style.borderColor="red"
        document.getElementById("password").style.borderColor="red"
        document.getElementById("val").innerHTML="*Incorrect Username or Password"
        return false
    }
    
}

//------------------------------------------For Sign Up------------------------------------------------
if(document.getElementById('signup')!=null){

    document.getElementById('signup').addEventListener("click", function() {
        document.querySelector('.popup2').style.display = "flex";
    });
    
}


document.querySelector('.close2').addEventListener("click", function() {
	document.querySelector('.popup2').style.display = "none";
});

function validateSignUp(){
    
    // -----------------NAME VALIDATION-------------------------
    
        let res=document.getElementById("name").value

        document.getElementById("name").style.borderColor="red"
        //VALIDATION FOR SPECIAL CHARACTERS
        for (let i = 0; i < res.length; i++) {
            var k=res.charAt(i)
    
            if(k>='A'&&k<='Z' || k>='a'&&k<='z'||k==' '){
    
            }else{
            document.getElementById("t").innerHTML="*Name should contain only Alphabtes ,Numbers or Special characters are not Allowed"
            return false
            }
            
        }
        
    
        //VALIDATION FOR EMPTY VALUE AND LENGTH OF THE NAME 
        if(res==""){
                document.getElementById("t").innerHTML="**Please Enter Your Name"
                return false
            }
        else if(res.length<=3||res.length>=20){
                document.getElementById("t").innerHTML="**Name length should be greater than 3 and Less than 15 "
                return false
            }

            document.getElementById("t").innerHTML=""
            document.getElementById("name").style.borderWidth="1px"
            document.getElementById("name").style.borderColor="grey"
    
            
    //--------------------------BIRTH YEAR VALIDATION-------------------------


    let by=document.getElementById("birthyear").value
    document.getElementById("birthyear").style.borderColor="red"

    if(by==""){
        document.getElementById("by").innerHTML="*Please Enter Your Year of Birth"
        return false  
    }
    else if(by.length!=4){
        document.getElementById("by").innerHTML="*It should contain 4 digit"
        return false 
    }

    let b=Number(by)
    if(b<1900 || b>2020){
        document.getElementById("by").innerHTML="*Year should be between 1990 and 2020"
        return false 
    }
    if(Math.abs(b-2020)<18){
        document.getElementById("by").innerHTML="*Age Should be greater than 18 to Open Account"
        return false 

    }

    document.getElementById("by").innerHTML=""
    document.getElementById("birthyear").style.borderWidth="1px"
    document.getElementById("birthyear").style.borderColor="grey"
    
    // ----------------------MOBILE NUMBER VALIDATION------------------------
    
        let num=document.getElementById("mobile").value
        document.getElementById("mobile").style.borderColor="red"
    
    
        //VALIDATION TO CHECK FIRST DIGIT
        if(num==""){
            document.getElementById("n").innerHTML="*Please Enter Your Number"
            return false  
        }
        if(num.startsWith("9") ||num.startsWith("8")||num.startsWith("7")  ){
    
        }else{
            document.getElementById("n").innerHTML="**Number should starts with 9 ,8 or 7 "
            return false  
        }
    
        //VALIDATION FOR CHECKING MOBILE NUMBER LENGH
        if(num.length!=10){
            document.getElementById("n").innerHTML="**Number should contains 10 digits "
            return false  
        }
    
        document.getElementById("mobile").style.borderWidth="1px"
        document.getElementById("mobile").style.borderColor="grey"
        document.getElementById("n").innerHTML=""
    //--------------------------ADDRESS VALIDATION-------------------------    
        
    let add=document.getElementById("address").value
    document.getElementById("address").style.borderColor="red"
    
    if(add==""){
        document.getElementById("add").innerHTML="*Address should not be Empty"
        return false  
    }
    document.getElementById("address").style.borderWidth="1px"
    document.getElementById("address").style.borderColor="grey"
    document.getElementById("add").innerHTML=""

    //--------------------------EMAIL VALIDATION-------------------------  

    let e=document.getElementById("email").value
    document.getElementById("email").style.borderColor="red"
    
    if(e==""){
        document.getElementById("e").innerHTML="*Email should not be Empty"
        return false  
    }
    document.getElementById("email").style.borderWidth="1px"
    document.getElementById("email").style.borderColor="grey"
    document.getElementById("e").innerHTML=""

    //--------------------------USERNAME VALIDATION------------------------- 
    
    let u=document.getElementById("username1").value
    document.getElementById("username1").style.borderColor="red"

    if((u.charAt(0)>='A' && u.charAt(0)<='Z') ||(u.charAt(0)>='a' && u.charAt(0)<='z') ){
       
    }else{
        document.getElementById("u").innerHTML="*Username should starts with an Alphabte"
        return false
    }
    let x=`"${u}"`
    
    for (var key in localStorage){
        if(x==key){
            document.getElementById("u").innerHTML="*This Username is already taken . Try another"
            return false
        }
     }
     document.getElementById("u").innerHTML=""
     document.getElementById("username1").style.borderWidth="1px"
     document.getElementById("username1").style.borderColor="grey"

    //--------------------------PASSWORD VALIDATION-------------------------    
        
        let password=document.getElementById("password1").value
        let cpassword=document.getElementById("cpassword").value

        document.getElementById("password1").style.borderColor="red"
    
    
        if(password==""){
            document.getElementById("p").innerHTML="**Please Enter a Password for Your Security"
            return false
        }
        else if(password.length<=8||password.length>=15){
            document.getElementById("p").innerHTML="**Weak Password , Password length should be greater than 8 and Less than 15 "
            return false
        }
    
        if(password!=cpassword){
            document.getElementById("p").innerHTML="*Password and Confirm-Password does not Match " 
            return false
        }
    

        let username1=document.getElementById('username1').value
        let password1=document.getElementById('password1').value
           
        window.localStorage.setItem(JSON.stringify(username1), JSON.stringify(password1));

        document.getElementById("password1").style.borderWidth="1px"
        document.getElementById("password1").style.borderColor="grey"

    
        document.querySelector('.popup2').style.display = "none";
        document.querySelector('.successfull').style.display = "flex"; 
        document.getElementById("signupform").reset();

       

        return true
    
    }    


    
 document.querySelector('.close3').addEventListener("click", function() {
        document.querySelector('.successfull').style.display = "none";
  });
    


//-------------------------------------------For Pin Number----------------------------------------------

function pinNumber(){
        let count=0
        pin=document.getElementById('pinNumber').value
        let bal=0

        let x=`"${pin}"`
        
        if(pin.length<8){
            document.getElementById("errorpin").innerHTML="*Pin Number Should be Greater than 8"
            return false
        }
        for (var key in localStorage){
            if(x==key){
                count++
                balance=Number(localStorage.getItem(x))
                document.getElementById("totalBalance").innerHTML=balance   
                document.querySelector('.pin').style.display = "none";
                document.querySelector('.all').style.display = "flex"; 
            }
         }
        
         if(count==0){ 
             window.localStorage.setItem(JSON.stringify(pin), JSON.stringify(bal))
             create()
         }

         document.getElementById("pinNumber").value=Number;

}


function create(){
    
    if(count%2==0){
        document.getElementById("pm").innerHTML="Create Your Pin"
        document.getElementById('f').value="I Have a Pin"
        count++
    }else{
        document.getElementById("pm").innerHTML="Enter Your Pin"
        document.getElementById('f').value="I dont have a Pin"
        count++
    }

}
