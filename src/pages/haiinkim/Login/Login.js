import React from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

const API = "http://3.35.19.3:8000";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      hiddenPw: true,
    };
  }

  handleUserInfoValue = (e) => {
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
      this.handleLogin();
    } else {
      alert("다시 입력하세요.");
    }
  };

  handleLogin = () => {
    fetch(`${API}/account/signin`, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message === "SUCCESS") {
          this.props.history.push("/Main-haiin");
          localStorage.setItem("Token", result.Authorization);
        }
      });
  };

  render() {
    const { id, pw, hiddenPw } = this.state;
    const colorchangeBtn = id.length >= 1 && pw.length >= 1;

    return (
      <div className="HaiinLogin">
        <div>Westagram</div>
        <form>
          <input
            id="id"
            onChange={this.handleUserInfoValue}
            type="email"
            placeholder="Phone number, username, or email"
          />
          <input
            id="pw"
            onChange={this.handleUserInfoValue}
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
