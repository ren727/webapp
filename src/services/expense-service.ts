import apiClient from "../config/api-client"
import { Expense } from "../model/Expense";

export const getExpenses = () =>{
    //get Expense array      call the API
    return apiClient.get<Expense[]>("/expenses");
}