import axios from "axios";

import { API } from "@org/utils";
import { Trivia } from "@org/models";

export const getTrivia: () => Promise<Array<Trivia>> = async () =>
    axios.get(API + "/api_category.php").then((d) => d.data.trivia_categories);
