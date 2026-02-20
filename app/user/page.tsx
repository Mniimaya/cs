import { MainTitle } from "@/components/MainTitle/MainTitle";
import React from "react";
import { UserStats } from "./components/UserStats/UserStats";

function User() {
  return (
    <div>
      <MainTitle>Статистика по игроку</MainTitle>
      <UserStats />
    </div>
  );
}

export default User;
