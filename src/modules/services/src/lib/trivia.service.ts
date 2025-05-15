import axios from "axios";

import { API } from "@config";
import { Trivia } from "@models";

export const getTrivia: () => Promise<Array<Trivia>> = async () =>
    axios.get(API + "/api_category.php").then((d) => d.data.trivia_categories);
