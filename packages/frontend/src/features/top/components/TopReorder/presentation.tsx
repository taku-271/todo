"use client";

import {
  HStack,
  Reorder,
  ReorderItem,
  ReorderTrigger,
  Text,
} from "@yamada-ui/react";

import { TopReorderProps } from "@/features/top/types";

export const TopReorderPresentation = ({ todos }: TopReorderProps) => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <Reorder>
      {todos.map((todo) => (
        <ReorderItem
          key={todo.id}
          value={todo.title}
          onClick={onClick}
          whileHover={{ cursor: "pointer" }}
        >
          <HStack>
            <ReorderTrigger />
            <Text>{todo.title}</Text>
          </HStack>
        </ReorderItem>
      ))}
    </Reorder>
  );
};
