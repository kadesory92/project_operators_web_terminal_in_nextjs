import { Operator } from "./operator";

export interface Abonnement{
    id:number,
    phone:string,
    amount:number,
    operator:Operator
}