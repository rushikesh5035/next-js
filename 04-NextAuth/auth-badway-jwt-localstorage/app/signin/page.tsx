"use client";
import axios from "axios";

export default function () {
  return (
    <div>
      <div>Sign in page</div>
      <input type="text" />
      <input type="text" />
      <button
        onClick={async () => {
          const response = await axios.post(
            "http://localhost:3000/api/signin",
            {
              username: "asd",
              password: "asd",
            }
          );
          localStorage.setItem("token", response.data.token);
        }}
      >
        Signin
      </button>
    </div>
  );
}
