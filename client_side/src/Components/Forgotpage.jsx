import './Forgotpage.css';
import React,{useState } from 'react';

function ForgotPage(isforgot,setIsForgot){
    const [UserName,setUserName] = useState("");
    const [newpassword,setnewpassword] = useState("");
    const [confirmpassword,setconfirmpassword] = useState("");
    console.log(newpassword,confirmpassword);
    function forgot(){
        var Result=JSON.parse(localStorage.getItem("login")) || [];
        if(newpassword === confirmpassword){	
            let duplicate = []
            for(let i=0; i<Result.length; i++){
                if(UserName === Result[i].user){
                console.log(Result[i])
                    if(newpassword !== Result[i].password){
                        console.log(UserName,newpassword,confirmpassword);
                        let temp ={
                            ...Result[i],
                            password: newpassword
                        }		
                        duplicate.push(temp)
                    }
                }
                else{
                    duplicate.push(Result[i])
                }
            }
            localStorage.setItem("data", JSON.stringify(duplicate))
            alert("password changed!")
            //window.location = "login.html";
            return
        }
        else{
        
            alert("password not matching")
        }
    }
    const handleRedirect = ()=>{
        setIsForgot(false);
    }
    

    return(
        <div><h1>Reset Password</h1>
         <div id="forgotLayout" >
                <div className='forgotpage'>
                    <label className='user'>UserName</label>
                    <input type="text" placeholder='enter username' onChange={(e) => setUserName(e.target.value)}/><br/><br/><br/>
                    <label className='new'>New Password</label><br/>
                    <input type="password" placeholder='enter new password' onChange={(e) => setnewpassword(e.target.value)} /><br/><br/><br/>
                    <label className='old'>Confirm Password</label><br/>
                    <input type="password" placeholder='enter confirm password' onChange={(e) => setconfirmpassword(e.target.value)} /><br/>
                    <button class="submit" onClick={forgot}>Submit</button>
                    <p class="spanning"><span onClick={handleRedirect}>Go to Login</span></p>
                </div> 
                  <div className='forgot-image'>
                     <img class="img-forgot"src="background.jpg" alt="" /> 
                </div> 
        </div>
        </div>
    )
}

export default ForgotPage