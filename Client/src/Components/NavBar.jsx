import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import SignUp from "./SignUp";
import LoginForm from "./LoginForm";

const NavBar = () => {
  const [login, setLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleLogout = async () => {
    localStorage.removeItem("userId");
    let res = await axios.post("http://127.0.0.1:8080/api/users/logout");
    if (res.data.message) {
      setLogin(false);
    }
  };

  useEffect(() => {
    const checkLogin = () => {
      setLogin(!!localStorage.getItem("token"));
    };

    checkLogin();

    window.addEventListener("storage", checkLogin);
    return () => window.removeEventListener("storage", checkLogin);
  }, []);

  const closeModals = () => {
    setShowSignUp(false);
    setShowLogin(false);
  };

  const openSignUp = () => {
    setShowSignUp(true);
    setShowLogin(false);
  };

  const openLogin = () => {
    setShowLogin(true);
    setShowSignUp(false);
  };
  const handleLogin = () => {
    setLogin(true);
    setShowLogin(false);
    setShowSignUp(false);
  };

  return (
    <>
      <nav className="w-full h-18 flex justify-around items-center top-0 z-30 bg-opacity-50 p-4 relative">
        <h1 className="text-4xl font-extrabold tracking-wide uppercase">
          Fitlab
        </h1>
        <ul className="flex gap-12 uppercase">
          <li>
            <Link
              to="/"
              className="text-2xl font-bold hover:text-yellow-400 cursor-pointer"
            >
              Home
            </Link>
          </li>
          {!login && (
            <li>
              <button
                onClick={openSignUp}
                className="text-2xl font-bold hover:text-yellow-400 cursor-pointer bg-transparent border-none uppercase"
              >
                Join Now
              </button>
            </li>
          )}

          {login && (
            <>
              <li>
                <Link
                  to="/DeitPlanner"
                  className="text-2xl font-bold hover:text-yellow-400 cursor-pointer"
                >
                  DietPlanner
                </Link>
              </li>
              <li>
                <Link
                  to="/workout"
                  className="text-2xl font-bold hover:text-yellow-400 cursor-pointer"
                >
                  Workout Plan
                </Link>
              </li>
              <li>
                <button
                  className="text-sm bg-amber-300 h-8 w-8 rounded-full"
                  onClick={handleLogout}
                >
                  -
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>

      {(showSignUp || showLogin) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm h-screen w-screen">
          <div className="relative w-full max-w-2xl px-4 flex justify-center items-center">
            {showSignUp && (
              <SignUp onClose={closeModals} onSwitchToLogin={openLogin} />
            )}
            {showLogin && (
              <LoginForm
                onClose={closeModals}
                onSwitchToSignUp={openSignUp}
                onLogin={handleLogin}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
