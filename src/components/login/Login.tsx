import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export class Login extends React.Component {

    render() {
        return (
            <form>
                <h3>Login</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <br />

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        )
    }

}
