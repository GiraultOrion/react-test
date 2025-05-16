/* eslint-disable */
/* tslint-disable */
import { API } from "@config";
import axios, { AxiosResponse } from "axios";
import { from, Observable } from "rxjs";

export const getTrivia: () => Observable<AxiosResponse> = () =>
    from(axios.get(API + "/api_category.php"));
