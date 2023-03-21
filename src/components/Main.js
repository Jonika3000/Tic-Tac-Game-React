import React, { Component } from 'react'
import Board from './Board';
import "./Login.css"
export let users = [
    {id:0, login: "adm", password: "adm", score: 0 }]

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true,
            users: [
                { id: 0, login: "adm", password: "adm", score: 0 }],
                user:null
        }
        this.updateState = this.updateState.bind(this);
    }
    updateState(who) {
        this.setState({ users: who })
    }
    register() {
        let l = document.getElementById("log").value;
        let r = document.getElementById("pas").value;
        let obj = { id: 0, login: l, password: r, score: 0 };
        let Has = false;
        for (let i = 0; i < users.length; i++) {
            if (users[i].login == obj.login)
                Has = true;
        }
        if (Has == false) {
            users.push(obj);
            this.setState({ users: users }); 
        }
        console.log(users);
    }
    login() {
        let l = document.getElementById("log").value;
        let r = document.getElementById("pas").value;
        let obj = { id: 0, login: l, password: r, score: 0 };
        console.log(l,r);
        for (let i = 0; i < users.length; i++) {
            if (users[i].login == obj.login && users[i].password == obj.password) {
                this.setState({ isLogin: false }); 
                this.setState({ user: users[i] }); 
            }
        }
    }
   
    method1 = (event) => {
        event.preventDefault();
    }
    render() {
        return this.state.isLogin ? (
            <div>
                <div id="log1">
                    <form onSubmit={this.method1}>
                        <div className="col-15">
                            <input className="textbox-15" type="text"
                                id='log' placeholder="login" />
                            <span className="focus-border-15"></span>
                        </div>
                        <div className="col-15">
                            <input className="textbox-15" type="text"
                                id="pas" placeholder="pass" />
                            <span className="focus-border-15"></span>
                        </div>
                    </form>

                    <button className='SumbitBtn' onClick={() => this.login() }>Login</button>
                    <button className='SumbitBtn' onClick={() => this.register()}>Register</button>
                    
                </div>
            </div>
        )
            :
            (
                <Board updateState={this.updateState} users={this.state.users} user={this.state.user}></Board>
            )

    }
}
