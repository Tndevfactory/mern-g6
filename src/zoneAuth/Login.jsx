import React, { useState, useEffect } from "react";
import register from "../assets/register.jpg?url";
import { Lock, Eye, EyeOff } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

import { Link, useNavigate } from "react-router-dom";
import { http } from "../feature/api";

function Login() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const [backend, setBackend] = useState("");

  const notifySuccess = (msg) => toast.success(msg);
  const notifyError = (msg) => toast.error(msg);

  function validate(data) {
    const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const errors = {};

    if (!data.email) {
      errors.email = "Veuillez entrer le champ email";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Veuillez entrer un email valide";
    }

    if (!re.test(data.password)) {
      errors.password =
        "Minimum 8 char, majsucule, minuscule, un nombre et un char speciale";
    }

    return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const validationErrors = validate(data);
    console.log();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length == 0) {
      http
        .post("/auth/login", data)
        .then((res) => {
          setBackend(res.data.message);
          /*  notifySuccess(res.data.message); */
          localStorage.setItem("user", JSON.stringify(res.data.user));
          localStorage.setItem("token", res.data.token);

          if (res.data.user.role == "admin") {
            navigate("/admin");
          } else {
            navigate("/user");
          }
        })
        .catch((err) => {
          setBackend(err.response.data.message);
          notifyError(err.response.data.message);
        });
    }
  }

  useEffect(() => {
    console.log("message auto");
  }, []);

  return (
    <div
      className=" relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${register})` }}
    >
      <div
        id="filter"
        className=" flex justify-center items-center  inset-0 absolute bg-black/60"
      >
        <div className="bg-white p-2 w-[17rem] rounded">
          <form onSubmit={handleSubmit}>
            <div className="  my-2 flex flex-col justify-center items-center">
              <Lock />
              <h2>Connexion</h2>
              {/* <span>
                {backend && (
                  <span className="text-red-600 text-xs">{backend}</span>
                )}
              </span> */}
            </div>

            <div>
              <label htmlFor="" className="block">
                Email
              </label>
              <input
                name="email"
                type="text"
                className="w-full border px-1 border-blue-600 rounded"
              />
              {errors.email && (
                <span className="text-red-600 text-xs">{errors.email}</span>
              )}
            </div>
            <div className="relative">
              <label htmlFor="" className="block">
                Password
              </label>
              <input
                name="password"
                type={visible == true ? "text" : "password"}
                className="w-full border border-blue-600 rounded px-1"
              />
              {errors.password && (
                <span className="text-red-600 text-xs">{errors.password}</span>
              )}
              <div className="absolute top-7 right-4">
                {!visible && (
                  <Eye
                    className="cursor-pointer"
                    onClick={() => setVisible(true)}
                    size={18}
                  />
                )}

                {visible && (
                  <EyeOff
                    className="cursor-pointer"
                    onClick={() => setVisible(false)}
                    size={18}
                  />
                )}
              </div>
            </div>
            <div className="flex justify-between items-center mt-4 gap-1">
              <Link to="/register" className="text-xs hover:text-blue-700">
                S'inscrire
              </Link>
              <div className="flex justify-between items-center gap-1">
                <button
                  type="reset"
                  className=" text-[13px]  border border-gray-500 hover:bg-gray-100
               p-1 rounded px-2"
                >
                  Annuler
                </button>
                <button
                  className=" text-[13px]  bg-blue-600 hover:bg-blue-700
              text-white p-1 rounded px-2
              "
                >
                  Se connecter
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default Login;
