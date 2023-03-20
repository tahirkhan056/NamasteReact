import { useEffect, useState } from "react";

const Profile = () => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    getUserDetail();
    const helloInterval2 = setInterval(() => {
      console.log("Hello i am interval 2");
    }, 1000);

    return () => {
      console.log("return of useEffect");
      clearInterval(helloInterval2);
    };
  }, []);

  const getUserDetail = async () => {
    const data = await fetch("https://api.github.com/users/tahirkhan056");
    const json = await data.json();
    setUserInfo(json);
  };

  setCount((prevState) => {
    console.log(prevState);
    prevState[ev.target.id] = prevState[ev.target.id] + 1;
    console.log(prevState);
    return prevState;
  });

  return (
    <div>
      <h3>Profile 2</h3>
      <img src={userInfo?.avatar_url} />
      <h3>Name: {userInfo?.name}</h3>
      <h3>Location: {userInfo?.location}</h3>
    </div>
  );
};

export default Profile;
