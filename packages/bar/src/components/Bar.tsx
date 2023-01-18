import { greeting } from "utils/baz";

export const Bar = () => <h1>{greeting({ tone: "sad" })}</h1>;
