import "./Login.scss";
import React from "react";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      hiddenPw: true,
    };
  }

  handleValue = (e) => {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  };

  showPW = () => {
    this.setState({
      hiddenPw: !this.state.hiddenPw,
    });
  };

  validationCheck = (e) => {
    e.preventDefault();

    const { id, pw } = this.state;
    const checkId = id.indexOf("@") !== -1;
    const checkPw = pw.length >= 4;

    if (!checkId) {
      alert("올바른 이메일주소가 아닙니다.");
    }
    if (!checkPw) {
      alert("4자리 이상 입력하세요.");
    }
    if (checkId && checkPw) {
      this.props.history.push("/Main-haiin");
    }
  };

  render() {
    const { id, pw, hiddenPw } = this.state;
    const colorchangeBtn = id.length >= 1 && pw.length >= 1;

    return (
      <div className="Login">
        <div>Westagram</div>
        <form>
          <input
            className="loginId"
            id="id"
            onChange={this.handleValue}
            type="email"
            placeholder="Phone number, username, or email"
          />
          <input
            className="loginPassword"
            id="pw"
            onChange={this.handleValue}
            type={hiddenPw ? "password" : "text"}
            placeholder="Password"
          />
          <span onClick={this.showPW}>{hiddenPw ? "Show" : "Hide"}</span>
          <button
            onClick={this.validationCheck}
            className={colorchangeBtn ? "activate" : ""}
          >
            Log In
          </button>
        </form>
        <div className="forgetQ">Forgot password?</div>
      </div>
    );
  }
}

export default withRouter(Login);
