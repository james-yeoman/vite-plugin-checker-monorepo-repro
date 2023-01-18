import { match } from "ts-pattern";

type GreetType = { tone: "happy" | "sad" };

export const greeting = (greetType: GreetType) =>
  match(greetType)
    .with({ tone: "happy" }, () => "Why hello there you fine young chap!")
    .with({ tone: "sad" }, () => "Oh. Hello. _sigh_")
    .exhaustive();
