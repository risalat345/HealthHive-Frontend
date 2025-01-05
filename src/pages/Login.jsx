import React, { useState } from 'react';

const Login = () => {
  const [state, setstate] = useState("Sign Up");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div>
      <div>
        <div className="my-5 rounded-lg px-8 md:w-6/12 flex flex-col mx-auto border p-10 border-gray-300">
          <h1 className="font-bold text-2xl">
            {state === "Sign Up" ? "Create Account" : "Login"}
          </h1>
          <p className="my-2">
            Please {state === "Sign Up" ? "sign up" : "login"} to book an appointment
          </p>
          {state === "Sign Up" && (
            <input
              onChange={(e) => setname(e.target.value)}
              required
              value={name}
              className="border border-gray-500 mb-3 rounded-lg px-2 py-2"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            onChange={(e) => setemail(e.target.value)}
            required
            value={email}
            className="border border-gray-500 mb-3 rounded-lg px-2 py-2"
            type="email"
            placeholder="Email"
          />
          <input
            onChange={(e) => setpassword(e.target.value)}
            required
            value={password}
            className="border border-gray-500 mb-3 rounded-lg px-2 py-2"
            type="password"
            placeholder="Password"
          />
          <button className="bg-primary hover:text-gray-200 text-white font-bold py-2 rounded-lg">
            {state === "Sign Up" ? "Create Account" : "Login"}
          </button>
          {state === "Sign Up" ? (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => setstate("Login")}
                className="underline cursor-pointer"
              >
                Login here
              </span>
            </p>
          ) : (
            <p>
              New to HealthHive?{" "}
              <span
                onClick={() => setstate("Sign Up")}
                className="underline cursor-pointer"
              >
                Create Account
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
