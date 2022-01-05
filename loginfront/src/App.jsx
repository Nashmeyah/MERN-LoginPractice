import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css"

class App extends Component{
    constructor(){
        super()
        this.state ={
            firstName:"",
            lastName:"",
            email:"",
            companyName:"",
            password:""
        }
    }

    changeFirstName(e){
        this.setState({
            firstName:e.target.value
        })
    }
    changeLastName(e){
        this.setState({
            lastName:e.target.value
        })
    }
    changeEmail(e){
        this.setState({
            email:e.target.value
        })
    }
    changeCompanyName(e){
        this.setState({
            companyName:e.target.value
        })
    }
    changePassword(e){
        this.setState({
            password:e.target.value
        })
    }

    render() {
        return(
            <div>
                <div className="container">
                    <div className="form-div">
                        <form>
                            <input type='text' plaeholder="First Name" onChange={this.changeFirstName} value={this.state.firstName} className="form-control form-group" />
                            <input type="text" placeholder="Last Name" onChange={this.changeLastName} value={this.state.lastName} className="form-control form-group"/>
                            <input type="text" placeholder="Email" onChange={this.changeEmail} value={this.state.email} className="form-control form-group"/>
                            <input type="text" placeholder="Company Name" onChange={this.changeCompanyName} value={this.state.companyName} className="form-control form-group"/>
                            <input type="password" placeholder="Password" onChange={this.changePassword} value={this.state.password} className="form-control form-group"/>

                            <input type="submit" className="btn btn-danger btn-block" value="Submit"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;