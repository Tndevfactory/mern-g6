import React, { useState, useEffect } from "react";
import register from "../assets/register.jpg?url";
import { Lock, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

function Login() {
  const [visible, setVisible] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);
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
            </div>

            <div>
              <label htmlFor="" className="block">
                Email
              </label>
              <input
                type="text"
                className="w-full border px-1 border-blue-600 rounded"
              />
            </div>
            <div className="relative">
              <label htmlFor="" className="block">
                Password
              </label>
              <input
                type={visible == true ? "text" : "password"}
                className="w-full border border-blue-600 rounded px-1"
              />
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
                  className=" text-[13px]  border border-gray-500 hover:bg-gray-100
               p-1 rounded px-2"
                >
                  Annuller
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
    </div>
  );
}

export default Login;
