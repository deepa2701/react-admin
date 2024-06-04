

import React, { useState } from 'react'
import { Link, json, useNavigate } from 'react-router-dom'


function Register() {

  const [username, setUsername] = useState();
  const [useremail, setUseremail] = useState();
  const [password, setPassword] = useState();
  const [cpassword, setCPassword] = useState();
//   const navigate = useNavigate();



  const submitClick = (e) => {
    e.preventDefault();
    if(username && useremail && password && cpassword){
      if(password == cpassword){
        const jsondata = JSON.stringify({
          username,
          useremail,
          password,
          cpassword
        });
        // console.log(jsondata)
        localStorage.setItem("userdata", jsondata);
        navigate('/login');
       }
      else{
        alert("password and confirm password not matched")
      }
     }
    else{
      alert("all fileds are required")
    }
   
   
  }
//   console.log(username,cpassword);

  return (
    <>
        
            <div className="content-body">
                <div className="auth-wrapper auth-basic px-2">
                    <div className="auth-inner my-2">

                        <div className="card mb-0">
                            <div className="card-body">
                                    <Link to="/login">
                                    <svg viewBox="0 0 139 95" version="1.1"  height="28">
                                        <defs>
                                            <lineargradient id="linearGradient-1" x1="100%" y1="10.5120544%" x2="50%" y2="89.4879456%">
                                                <stop stopColor="#000000" offset="0%"></stop>
                                                <stop stopColor="#FFFFFF" offset="100%"></stop>
                                            </lineargradient>
                                            <lineargradient id="linearGradient-2" x1="64.0437835%" y1="46.3276743%" x2="37.373316%" y2="100%">
                                                <stop stopColor="#EEEEEE" stopOpacity="0" offset="0%"></stop>
                                                <stop stopColor="#FFFFFF" offset="100%"></stop>
                                            </lineargradient>
                                        </defs>
                                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <g id="Artboard" transform="translate(-400.000000, -178.000000)">
                                                <g id="Group" transform="translate(400.000000, 178.000000)">
                                                    <path className="text-primary" id="Path" d="M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z"></path>
                                                    <path id="Path1" d="M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z" fill="url(#linearGradient-1)" opacity="0.2"></path>
                                                    <polygon id="Path-2" fill="#000000" opacity="0.049999997" points="69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"></polygon>
                                                    <polygon id="Path-21" fill="#000000" opacity="0.099999994" points="69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"></polygon>
                                                    <polygon id="Path-3" fill="url(#linearGradient-2)" opacity="0.099999994" points="101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"></polygon>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    <h2 className="brand-text text-primary ms-1">Vuexy</h2>
                                    </Link>

                                <h4 className="card-title mb-1">Adventure starts here 🚀</h4>
                                <p className="card-text mb-2">Make your app management easy and fun!</p>

                                <form className="auth-register-form mt-2" onSubmit={submitClick} method="POST">
                                    <div className="mb-1">
                                        <label htmlFor="register-username" className="form-label">Username</label>
                                        <input type="text" onChange={(e) => setUsername(e.target.value)} className="form-control" id="register-username" name="register-username" placeholder="johndoe" aria-describedby="register-username" tabIndex="1" autoFocus />
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="register-email" className="form-label">Email</label>
                                        <input type="text" onChange={(e) => setUseremail(e.target.value)} className="form-control" id="register-email" name="register-email" placeholder="john@example.com" aria-describedby="register-email" tabIndex="2" />
                                    </div>

                                    <div className="mb-1">
                                        <label htmlFor="register-password" className="form-label">Password</label>

                                        <div className="input-group input-group-merge form-password-toggle">
                                            <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control form-control-merge" id="register-password" name="register-password" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" aria-describedby="register-password" tabIndex="3" />
                                            <span className="input-group-text cursor-pointer"><i data-feather="eye"></i></span>
                                        </div>
                                    </div>

                                    <div className="mb-1">
                                        <label htmlFor="register-password" className="form-label">Confirm Password</label>

                                        <div className="input-group input-group-merge form-password-toggle">
                                            <input type="password" onChange={(e) => setCPassword(e.target.value)} className="form-control form-control-merge" id="register-password" name="register-password" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" aria-describedby="register-password" tabIndex="3" />
                                            <span className="input-group-text cursor-pointer"><i data-feather="eye"></i></span>
                                        </div>
                                    </div>
                                    <div className="mb-1">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="register-privacy-policy" tabIndex="4" />
                                            <label className="form-check-label" htmlFor="register-privacy-policy">
                                                I agree to <a href="#">privacy policy & terms</a>
                                            </label>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary w-100" tabIndex="5">Sign up</button>
                                </form>

                                <p className="text-center mt-2">
                                    <span>Already have an account?</span>
                                    <Link to="/login">
                                        <span>Sign in instead</span>
                                    </Link>
                                </p>

                                <div className="divider my-2">
                                    <div className="divider-text">or</div>
                                </div>

                                <div className="auth-footer-btn d-flex justify-content-center">
                                    <a href="#" className="btn btn-facebook">
                                        <i data-feather="facebook"></i>
                                    </a>
                                    <a href="#" className="btn btn-twitter white">
                                        <i data-feather="twitter"></i>
                                    </a>
                                    <a href="#" className="btn btn-google">
                                        <i data-feather="mail"></i>
                                    </a>
                                    <a href="#" className="btn btn-github">
                                        <i data-feather="github"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        

    </>
  )
}

export default Register