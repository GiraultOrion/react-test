import { Trivia } from "@models";
import { createStore, withProps } from "@ngneat/elf";

interface QuestionStore {
    trivias: Array<Trivia>;
}

export const triviasStore = createStore(
    {
        name: "triviasStore",
    },
    withProps<QuestionStore>({ trivias: [] })
);
