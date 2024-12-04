"use client";

import { Button, FormControl, Input, Textarea } from "@yamada-ui/react";
import { useActionState } from "react";

import { createTodoActions } from "@/features/top/actions/create-todo-actions";

export const TopCreateFormPresentation = () => {
  const [state, action, isPending] = useActionState(createTodoActions, null);

  return (
    <form style={{ width: "100%" }} action={action}>
      <FormControl label="タイトル" marginBottom="md">
        <Input type="text" name="title" placeholder="例）支払い" />
      </FormControl>
      <FormControl label="メモ" marginBottom="md">
        <Textarea name="memo" placeholder="例）至急対応" />
      </FormControl>
      <Button
        type="submit"
        colorScheme="primary"
        width="100%"
        loading={isPending}
      >
        作成
      </Button>
    </form>
  );
};
