import React, { useState, use } from "react";
import registerBg from "../assets/register-bg.jpg?url";
import { Lock } from "lucide-react";
import { Link } from "react-router-dom";

function Register() {
  const [error, setError] = useState({});

  function validate(data) {
    const errors = {};
    if (!data.name) {
      errors.name = "Veuillez inserer le champs nom d'utilisateur";
    }
    if (!data.email) {
      errors.email = "Veuillez inserer le champs email";
    }
    if (!data.password) {
      errors.password = "Veuillez inserer le champs mot de passe";
    }
    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    let validationErrors = validate(data);
    setError(validationErrors);

    // 3- envoi des données backend
  };

  return (
    <div
      id="inscription"
      className=" relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${registerBg})` }}
    >
      <div
        id="filter"
        className=" flex justify-center items-center absolute inset-0
         bg-black/80"
      >
        <div id="form-div" className="bg-white w-80 shadow-lg p-2 rounded pb-3">
          <form onSubmit={handleSubmit} className="space-y-1">
            <div className="flex flex-col justify-center items-center ">
              <Lock />
              <h1>Inscription</h1>
            </div>
            <div>
              <label htmlFor="name" className="block">
                Name
                <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="name"
                className="border rounded border-cyan-800 w-full p-1"
              />
              <div className="text-xs text-red-600">{error.name}</div>
            </div>
            <div>
              <label htmlFor="email" className="block">
                Email
                <span className="text-red-600">*</span>
              </label>
              <input
                name="email"
                type="text"
                className="border rounded border-cyan-800 w-full p-1"
              />
              <div className="text-xs text-red-600">{error.email}</div>
            </div>
            <div>
              <label htmlFor="password" className="block">
                Password
                <span className="text-red-600">*</span>
              </label>
              <input
                name="password"
                type="password"
                className="border rounded border-cyan-800 w-full p-1"
              />
              <div className="text-xs text-red-600">{error.password}</div>
            </div>
            <div className="flex justify-between items-center gap-1 pt-3">
              <Link
                to="/login"
                className="text-xs text-blue-600 hover:text-blue-700"
              >
                Se connecter
              </Link>
              <div className="space-x-1">
                <button className="border-2 px-2 rounded text-sm hover:bg-gray-100 ">
                  Annuler
                </button>
                <button className="bg-blue-700  hover:bg-blue-800  px-2 rounded text-white text-sm">
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
