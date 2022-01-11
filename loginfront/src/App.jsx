import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"


function App(){

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [password, setPassword] = useState("")

    function registerUser(e){
        e.preventDefault()

        const registered ={
            firstName:firstName,
            lastName:lastName,
            email:email,
            companyName:companyName,
            password:password
        }

        axios.post("http://localhost:4000/app/signup", registered)
            .then(response => console.log(response.data))


            setFirstName("")
            setLastName("")
            setEmail("")
            setCompanyName("")
            setPassword("")

        // this.setState({
        //     firstName:"",
        //     lastName:"",
        //     email:"",
        //     companyName:"",
        //     password:""
        // })
    }

    return(
        <div>
            <div className="container">
                <div className="form-div">
                    <form onSubmit={registerUser}>
                        <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} value={firstName} className="form-control form-group" />
                        <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} value={lastName} className="form-control form-group"/>
                        <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} className="form-control form-group"/>
                        <input type="text" placeholder="Company Name" onChange={(e) => setCompanyName(e.target.value)} value={companyName} className="form-control form-group"/>
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control form-group"/>

                        <input type="submit" className="btn btn-danger btn-block" value="Submit"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;