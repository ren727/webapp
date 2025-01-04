import { useEffect, useState } from "react";
import { Expense } from "../model/Expense";
import { getExpenses } from "../services/expense-service";

const useExpenses = () => {
    const [expenses, setExpenses] = useState<Expense[]>([]);
        //for error
    const [error, setErrors] = useState(null);
    const [isLoading, setLoader]  = useState(false);
        //for loader
        useState(false);
    useEffect(()=>{
        setLoader(true);
        //call function    api call to the backend system
        //now pass the empty array
       // apiClient.get("/expenses")   we do not need this anymore since we have now expense-service.ts
        getExpenses()
       //.then((response)=>console.log(response))
        .then((response) => {
            setExpenses(response.data);    //we get the response --> then update the state
        })
        .catch((error)=>setErrors(error.message))
        .finally(() => setLoader(false));
    }, [])
    return {expenses, error, isLoading};
}

export default useExpenses;