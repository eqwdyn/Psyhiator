import type { FC } from "react";
import cl from "./RequestCard.module.css";
import { IClientRequest } from "@entities/ClientRequest.ent";

interface Props {
  item: IClientRequest;
  index: number;
}

export const RequestCard: FC<Props> = ({ index, item }) => {
  return (
    <article className={cl.card}>
      <span className={cl.indexBadge}>{index}</span>

      <div className={cl.titleBlock}>
        <span className={cl.mark}></span>
        <h3 className={cl.title}>{item.title}</h3>
      </div>

      <p className={cl.description}>{item.description}</p>
    </article>
  );
};
