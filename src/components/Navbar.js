import { Component } from "react";
import "./NavbarStyle.css";
import { Menuitems } from "./Menuitems";
import { Link } from "react-router-dom";

class Navbar extends Component{
    state = {clicked: false};
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="Navbar-Logo">Trippy</h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "Nav-menu active" : "Nav-menu"}>
                    {Menuitems.map((item, index) =>{
                        return(
                    <li key={index}>
                        <Link className= {item.cn} to={item.url}>
                        <i class={item.icon}></i>{item.title}
                        </Link>
                    </li>
                        )
                    })}
                    <button>Sign Up</button>
                </ul>
            </nav>
        )
    }
}

export default Navbar