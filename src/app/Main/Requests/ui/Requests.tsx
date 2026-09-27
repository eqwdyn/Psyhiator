import type { FC } from "react";
import cl from "./Requests.module.css";

interface Props {}

export const Requests: FC<Props> = ({}) => {
  return (
    <section id="client-requests-block">
      <div className={cl.titleBlock}>
        <h2 className={cl.subTitle}>Темы для терапии</h2>
        <h3 className={cl.title}>С чем я работаю</h3>
      </div>
    </section>
  );
};
