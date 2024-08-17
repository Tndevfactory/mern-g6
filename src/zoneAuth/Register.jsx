import React, { useState } from "react";
import register from "../assets/register.jpg?url";
import { Lock } from "lucide-react";
import { Link } from "react-router-dom";

function Register() {
  const [errors, setErrors] = useState({});

  function validate(data) {
    const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const errors = {};

    if (!data.name) {
      errors.name = "Veuillez entrer le champ name";
    }

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
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    };
    const validationErrors = validate(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length == 0) {
      // 2 un envoi vers nodejs : backend
      console.log("un envoi vers nodejs : backend");
    }
  }

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
              <h2>Inscription</h2>
            </div>
            <div>
              <label htmlFor="" className="block">
                Name
              </label>
              <input
                type="text"
                className=" px-1 w-full border border-blue-600 rounded"
              />
              {errors.name && (
                <span className="text-red-600 text-xs">{errors.name}</span>
              )}
            </div>
            <div>
              <label htmlFor="" className="block">
                Email
              </label>
              <input
                type="text"
                className="w-full border px-1 border-blue-600 rounded"
              />
              {errors.email && (
                <span className="text-red-600 text-xs">{errors.email}</span>
              )}
            </div>
            <div>
              <label htmlFor="" className="block">
                Password
              </label>
              <input
                type="password"
                className="w-full border border-blue-600 rounded px-1"
              />
              {errors.password && (
                <span className="text-red-600 text-xs">{errors.password}</span>
              )}
            </div>
            <div className="flex justify-between items-center mt-4 gap-1">
              <Link to="/login" className="text-xs hover:text-blue-700">
                Se connecter
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
                  S'inscrire
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
