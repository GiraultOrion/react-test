import { Trivia } from "@models";
import { select } from "@ngneat/elf";
import { Observable } from "rxjs";

import { triviasStore } from "./trivias.store";

export const trivias$: Observable<Array<Trivia>> = triviasStore.pipe(
    select((state) => state.trivias)
);
