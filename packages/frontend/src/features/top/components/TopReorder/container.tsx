import { TopCreateForm } from "@/features/top/components/TopCreateForm";
import { TopReorderPresentation } from "@/features/top/components/TopReorder/presentation";
import { Todo } from "@/features/top/types";

export const TopReorderContainer = async () => {
  const todos: Todo[] = [
    { id: 1, title: "テスト１" },
    { id: 2, title: "テスト２" },
    { id: 3, title: "テスト３" },
  ];

  return (
    <>
      <TopCreateForm />
      <TopReorderPresentation todos={todos} />
    </>
  );
};
