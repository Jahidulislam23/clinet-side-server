import React, { use } from "react";
import { AuthContext } from '../context/AuthContext'
import Swal from "sweetalert2";

const SignUp = () => {
    const {createUser} = use(AuthContext);
    console.log(createUser)

    const handleSignUp = e =>{
        e.preventDefault()
        const form = e.target;
        const formdata = new FormData(form);

        const {email,password, ...userProfile} = Object.fromEntries(formdata.entries())

        
        console.log(email,password,userProfile)

        // create user in the firebase
        createUser(email,password)
        .then(result=>{
            console.log(result.user)

            // save profile info in the db
            fetch('http://localhost:3000/users',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(userProfile)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                    });
                    Toast.fire({
                    icon: "success",
                    title: "Your account is created"
                    });
                }
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }
  return (
        <div className="pt-10">
            <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl ">
          <div className="card-body">
            <h1 className="text-5xl font-bold text-center">Sign Up now!</h1>
            <form onSubmit={handleSignUp} className="fieldset">
              <label className="label">Name</label>
              <input type="text" className="input" name="name" placeholder="Name" />
              <label className="label">Address</label>
              <input type="text" className="input" name="address" placeholder="Address" />
              <label className="label">Phone</label>
              <input type="text" className="input" name="phone" placeholder="Phone Number" />
              <label className="label">Photo URL</label>
              <input type="text" className="input" name="photoURL" placeholder="photo URL" />
              <label className="label">Email</label>
              <input type="email" className="input" name="email" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" name="password" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Sign Up</button>
            </form>
          </div>
        </div>
        </div>
  );
};

export default SignUp;
