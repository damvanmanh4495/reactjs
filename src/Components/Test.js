import React, {Component} from 'react';
import CategoryList from './Category/CategoryList'
import '../App.css';
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true, status: 1, username: "", password: ""}
    }

    handleUsername = (event) => {
        this.setState({username: event.target.value});
    }
    handlePassword = (event) => {
        this.setState({password: event.target.value});
    }
    handleSubmit = (event) => {
        if (this.state.username === 'manh' && this.state.password === '123456') {
            this.setState({status: 0})
        } else {
            alert('Sai tài khoản hoặc mật khẩu');
        }
    }

    renderButton = () => {
        return (
            <div className='container'>
                <div className='dashboard'>
                    <h1>Dashboard</h1>
                    <h2>Xin chào {this.state.username}</h2>
                </div>
                <CategoryList />
            </div>
        );
    }

    renderForm = () => {
        return (
            <div className='container text-center'>
                <form onSubmit={this.handleSubmit} className="form-login">
                <h1>Login</h1>
                    <table >
                        <tbody>
                            <tr>
                                <td>
                                    Username
                                </td>
                                <td>
                                    <input type="text" value={this.state.username} onChange={this.handleUsername}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Password
                                </td>
                                <td>
                                    <input type="password" value={this.state.password} onChange={this.handlePassword}/>
                                </td>
                            </tr>
                            <tr  >
                                <td></td>
                                <td >
                                    <input className='btn btn-outline-primary ' type="submit" value='Submit'/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }

    displayCheck = () => {
        if (this.state.status === 0) {
            return this.renderButton()
        } else {
            return this.renderForm()
        }
    }

    render() {
        return (
            <div>
                {this.displayCheck()}
            </div>
        );
    }
}


export default Test;
