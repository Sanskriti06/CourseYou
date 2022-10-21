import './Signup.css';
import pic1 from "../Assets/pic1.png";
import cupcake2 from "../Assets/cupcake2.jpg";
import cupcake4 from "../Assets/cupcake4.jpg";
function Login() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             { <img src={pic1} alt="profile" className="profile"/> }

           </div>


         </div>
         <div>
            <br></br>
           <p className="logintext">Sign Up Page</p>
           {/* <p className="logintext2">Don't have an account?</p> */}
           <br></br>
           <div>
             { <img src={cupcake2} alt="name" className="email"/> }
             <input type="text" placeholder="Enter Username" className="name"/>
           </div>
           <br></br>
           <div>
             { <img src={cupcake2} alt="email" className="email"/> }
             <input type="email" placeholder="Enter email" className="name"/>
           </div>
           <div className="second-input">
             { <img src={cupcake4} alt="pass" className="email"/> }
             <input type="password" placeholder="Enter Password" className="name"/>
           </div>
          <div className="login-button">
          <button>Sign Up</button>
          </div> 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default Login;