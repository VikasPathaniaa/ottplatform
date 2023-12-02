import { Avatar, Chip, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";

export function Profile() {
  const [userName, setUserName] = useState("");
  const getInfo = async () => {
    const user = await localStorage.getItem("user-info");
    if (user) {
      const isUser = JSON.parse(user);
      setUserName(isUser.name);
    }
  };
  useEffect(() => {
    getInfo();
  }, []);

  return (
    <Chip
      icon={
        <Avatar
          size="xs"
          variant="circular"
          className="h-full w-full -translate-x-0.5"
          alt="Tania Andrew"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        />
      }
      value={
        <Typography
          variant="small"
          color="white"
          className="font-medium capitalize leading-none"
        >
          {userName}
        </Typography>
      }
      className="rounded-full py-1.5"
    />
  );
}
