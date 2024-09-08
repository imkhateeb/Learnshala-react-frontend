import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
    return re.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error("📧 Please enter a valid email address", {
        position: "top-center",
        style: {
          borderRadius: "50px",
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }

    if (!validatePassword(password)) {
      toast.error(
        "🔑 Password must be at least 6 characters long, contain at least one letter, one number, and one special character",
        {
          position: "top-center",
          style: {
            borderRadius: "50px",
            background: "#333",
            color: "#fff",
          },
        }
      );
      return;
    }

    toast.success("✅ Login successful!", {
      position: "top-center",
      style: {
        borderRadius: "50px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  return (
    <div className="w-1/3 max-md:w-2/3 max-lg:w-3/5 max-sm:w-[95%] rounded-[30px] bg-white p-5 animate-slight-up flex flex-col gap-2 items-center justify-center">
      <div className="flex flex-col">
        <p className="text-3xl max-sm:text-2xl font-bold text-left">
          Log into your account
        </p>
        <p className="text-lg text-base text-gray-400">
          Select your role and enter email and password to login
        </p>
      </div>
      <div className="flex gap-5 items-center">
        <button
          type="button"
          className={`py-[2px] rounded-md px-2 font-semibold ${
            role === "student"
              ? "bg-primary text-white"
              : "bg-white text-tertiary"
          } border-[2px] border-tertiary`}
          onClick={() => setRole("student")}
        >
          Student
        </button>
        <button
          type="button"
          className={`py-[2px] rounded-md px-2 font-semibold ${
            role === "instructor"
              ? "bg-primary text-white"
              : "bg-white text-tertiary"
          } border-[2px] border-tertiary`}
          onClick={() => setRole("instructor")}
        >
          Instructor
        </button>
        <button
          type="button"
          className={`py-[2px] rounded-md px-2 font-semibold ${
            role === "admin"
              ? "bg-primary text-white"
              : "bg-white text-tertiary"
          } border-[2px] border-tertiary`}
          onClick={() => setRole("admin")}
        >
          Admin
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex w-[90%] flex-col items-center justify-center my-5"
      >
        <input
          type="email"
          placeholder="Enter your email address"
          className="outline-none border-[2px] p-4 w-full rounded-full placeholder:text-xl active:border-black focus:border-black transition-all duration-300 ease-in-out"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="outline-none border-[2px] p-4 w-full rounded-full placeholder:text-xl active:border-black focus:border-black transition-all duration-300 ease-in-out"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="p-4 w-full bg-primary text-white rounded-full text-xl font-bold"
          onClick={handleSubmit}
        >
          Log in
        </button>
      </form>

      <div className="flex flex-col gap-1">
        <p className="text-xl font-semibold text-center max-sm:text-base">
          Forgot your password?
        </p>
        <div className="flex gap-1 justify-center">
          <p className="text-xl text-center text-gray-400 max-sm:text-base">
            {"You don't have an account?"}
          </p>
          <Link
            to={"/auth/signup"}
            className="text-xl font-semibold text-center max-sm:text-base"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
