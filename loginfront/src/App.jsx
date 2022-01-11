import React, {Component} from "react";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"


function App{

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [password, setPassword] = useState("")

    function registerUser(e){
        e.preventDefault()

        const registered ={
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email,
            companyName:this.state.companyName,
            password:this.state.password
        }

        axios.post("http://localhost:4000/app/signup", registered)
            .then(response => console.log(response.data))

        this.setState({
            firstName:"",
            lastName:"",
            email:"",
            companyName:"",
            password:""
        })
    }

    // render() {
        return(
            <div>
                <div className="container">
                    <div className="form-div">
                        <form onSubmit={registerUser}>
                            <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} value={this.state.firstName} className="form-control form-group" />
                            <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} value={this.state.lastName} className="form-control form-group"/>
                            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={this.state.email} className="form-control form-group"/>
                            <input type="text" placeholder="Company Name" onChange={(e) => setCompanyName(e.target.value)} value={this.state.companyName} className="form-control form-group"/>
                            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={this.state.password} className="form-control form-group"/>
                            
                            <input type="submit" className="btn btn-danger btn-block" value="Submit"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    // }
}

export default App;