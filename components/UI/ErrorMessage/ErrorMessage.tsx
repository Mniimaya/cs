import React, { ReactNode } from "react";
import s from "./ErrorMessage.module.scss";

export const ErrorMessage = ({ children }: { children: ReactNode }) => {
  return <div className={s.error}>{children}</div>;
};
