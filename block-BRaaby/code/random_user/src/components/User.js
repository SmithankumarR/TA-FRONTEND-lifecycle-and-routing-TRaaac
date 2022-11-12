import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";
import { FaRegMap } from "react-icons/fa";
import { AiTwotonePhone } from "react-icons/ai";
import { BsFillLockFill } from "react-icons/bs";
import Loader from "./Loader";

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      value: "",
      key: "name",
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.results }));
  }
  handleClick = () => {
    return this.componentDidMount();
  };
  handleMouseOver = ( { currentTarget }) => {
    let userInfo = this.state.data.results;
    console.log(userInfo);
    let { id } = currentTarget;
    switch (id) {
      case "name":
        return this.setState({ value: userInfo.login.username, key: id });
      case "email":
        return this.setState({ value: userInfo.email, key: id });
      case "age":
        return this.setState({ value: userInfo.dob.age, key: id });
      case "location":
        return this.setState({
          value:
            userInfo.location.street.number +
            " " +
            userInfo.location.street.name,
          key: id,
        });
      case "phone":
        return this.setState({ value: userInfo.phone, key: id });
      case "password":
        return this.setState({ value: userInfo.login.password, key: id });
      default:
        break;
    }
  };
  render() {
    if (!this.state.data) {
      return (
        <button className="block py-3 rounded-md px-2 font-bold bg-blue-400 text-white">
          <Loader />
        </button>
      );
    }
    return (
      <main className="container">
        <div className="cardInfo">
          {this.state.data.map((cardInfo) => {
            console.log(cardInfo);
            return (
              <div key={cardInfo.id}>
                <img
                  className="flexiableImg"
                  src={cardInfo.picture.large}
                  alt={cardInfo.name.title}
                />
                <div>
                  <p>my {this.state.key} is</p>
                </div>
                <div>
                  <h1 className="text-4xl m-2">
                    {this.state.value || "Searching User..."}
                  </h1>
                </div>
                <h1 className="text-2xl text-center my-3">
                  {cardInfo.name.title +
                    " " +
                    cardInfo.name.first +
                    " " +
                    cardInfo.name.last}
                </h1>
                <ul className="icons text-2xl">
                  <li
                    className="hover:text-sky-500"
                    id="name"
                    onMouseOver={this.handleMouseOver}
                  >
                  <FaUserAlt />
                  </li>
                  <li
                    className="hover:text-sky-500"
                    id="email"
                    onMouseOver={this.handleMouseOver}
                  >
                    <HiMailOpen />
                  </li>
                  <li
                    className="hover:text-sky-500"
                    id="age"
                    onMouseOver={this.handleMouseOver}
                  >
                    <SlCalender />{" "}
                  </li>
                  <li
                    className="hover:text-sky-500"
                    id="location"
                    onMouseOver={this.handleMouseOver}
                  >
                    <FaRegMap />
                  </li>
                  <li
                    className="hover:text-sky-500"
                    id="phone"
                    onMouseOver={this.handleMouseOver}
                  >
                    {" "}
                    <AiTwotonePhone />{" "}
                  </li>
                  <li
                    className="hover:text-sky-500"
                    id="password"
                    onMouseOver={this.handleMouseOver}
                  >
                    <BsFillLockFill />
                  </li>
                </ul>
              </div>
            );
          })}
          <button
            onClick={this.handleClick}
            className="block py-3 rounded-md px-2 font-bold bg-blue-400 text-white"
          >
            Random User
          </button>
        </div>
      </main>
    );
  }
}
