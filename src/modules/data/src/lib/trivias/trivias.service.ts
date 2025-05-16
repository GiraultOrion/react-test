import { Trivia } from "@models";
import { getTrivia } from "@services";
import { map, tap } from "rxjs";

import { triviasStore } from "./trivias.store";

export const fetchTrivias = () => {
    return getTrivia().pipe(
        map((r) =>
            (r.data.trivia_categories as Array<any>).map((t) => {
                return {
                    id: t.id,
                    name: t.name,
                } as Trivia;
            })
        ),
        tap((trivias) => addOrUpdateTrivias(trivias))
    );
};

export const addOrUpdateTrivias = (trivias: Array<Trivia>) => {
    triviasStore.update((state) => ({
        ...state,
        trivias,
    }));
};
