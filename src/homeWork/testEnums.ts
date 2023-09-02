const enum QuestionStatus {
  PUBLISHED = "published",
  DRAFT = "draft",
  DELETED = "deleted",
}

async function getFags(reg: {
  topidId: number;
  status?: QuestionStatus;
}): Promise<
  {
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status: QuestionStatus;
  }[]
> {
  const res = await fetch("/fags", {
    method: "POST",
    body: JSON.stringify(reg),
  });

  const data = await res.json();
  return data;
}
