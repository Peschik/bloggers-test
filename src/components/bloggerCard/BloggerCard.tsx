import React, { FC } from "react";
import { IBlogger } from "../../types/types";
import "./bloggerCard.scss";

interface BloggerCardProps {
  blogger: IBlogger;
  activeId: number;
}

const BloggerCard: FC<BloggerCardProps> = ({ blogger, activeId }) => {
  return (
    <div
      className={
        blogger.id === activeId ? "blogger__card active" : "blogger__card"
      }
    >
      <img
        src={`https://i.pravatar.cc/300?img=${blogger.id}`}
        alt={blogger.name}
      />
      <p>{blogger.name}</p>
      <p>{blogger.company ? blogger.company.name : ""}</p>
    </div>
  );
};

export default BloggerCard;