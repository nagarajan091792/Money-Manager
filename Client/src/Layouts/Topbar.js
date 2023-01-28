import { Link, useNavigate } from "react-router-dom";
 function Topbar() {
  const user = localStorage.getItem("profile");
  const navigate = useNavigate();
  let dologout = () => {
    localStorage.removeItem("react_app_token");
    localStorage.removeItem("profile");
    navigate("/");
  };

  return (
    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">


      <h1 style={{ color: "black" }}> Hello, {user}</h1>

      <ul class="navbar-nav ml-auto">
        <a className="nav-link mt-0">
          <i class="fas fa-sign-out-alt"></i>
          <button type="button" className="btn btn-danger" onClick={dologout}>
            Logout
          </button>
        </a>
      </ul>
    </nav>
  );
}
export default Topbar;
