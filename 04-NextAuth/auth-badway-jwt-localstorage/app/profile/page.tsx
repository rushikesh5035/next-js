"use client";
import axios from "axios";

export default async function Profile() {
    //you dont know 
  const res = await axios.get("http://localhost:3000/api/profile", {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  });

  const profilePicture = res.data.avatarUrl;
  //   const profilePicture = "https://cat.png";

  return <div>{profilePicture}</div>;
}
