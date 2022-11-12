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
                  src={cardInfo.picture.medium}
                  alt={cardInfo.name.title}
                />
                <div className="userInfo"></div>
                <h1 className="text-2xl text-center my-3">
                  {cardInfo.name.title +
                    " " +
                    cardInfo.name.first +
                    " " +
                    cardInfo.name.last}
                </h1>
                <ul className="icons text-2xl">
                  <li className="userIcon">
                    <FaUserAlt />
                  </li>
                  <li className="userIcon">
                    <HiMailOpen />
                  </li>
                  <li className="userIcon">
                    <SlCalender />{" "}
                  </li>
                  <li className="userIcon">
                    <FaRegMap />
                  </li>
                  <li className="userIcon">
                    {" "}
                    <AiTwotonePhone />{" "}
                  </li>
                  <li className="userIcon">
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
