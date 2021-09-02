import { GetMainComponent, GetSiblingsComponent } from "../ComponentUtils";

export default function LoginOrRegister(login?: boolean) {
    return GetMainComponent(
        "container2 login",
        "container3 loginWrapper",
        GetSiblingsComponent(
            ["container3 loginLeft", "container3 loginRight"],
            [
                <>
                    <h3 className="loginLogo">Haroldsocial</h3>
                    <span className="loginDesc">Connect with friend and the world around you</span>
                </>,
                <div className="container3 loginBox">
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" type="password" className="loginInput" />
                    {login ? "" : <input placeholder="Password" type="password" className="loginInput" />}
                    <button className="loginButton">{login ? "Login" : "Signup"}</button>
                    {login ? <span className="loginForgot">Forgot Password</span> : ""}

                    <button className="loginButton loginRegisterButton">
                        {login ? "Create a New Account" : "Signin to your account"}
                    </button>
                </div>,
            ]
        )
    );
}

LoginOrRegister.propTypes = {
    login: "required",
};
