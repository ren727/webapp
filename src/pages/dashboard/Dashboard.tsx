/***
 * For learning purposes, all the unsed codes in the process are commented out. See the notes.
 */
//import { useEffect, useState } from "react";
import ExpenseList from "../../components/ExpenseList"
import useExpenses from "../../hooks/useExpenses"
//import { Expense } from "../../model/Expense"
//import apiClient from "../../config/api-client";  No need to import this anymore
//import { getExpenses } from "../../services/expense-service";


const Dashboard = () => {
    const {expenses, error, isLoading} = useExpenses();
        //values, dataSetter
    // const [expenses, setExpenses] = useState<Expense[]>([]);
    //     //for error
    // const [error, setErrors] = useState(null);
    // const [isLoading, setLoader]  = useState(false);
    //     //for loader
    //     useState(false);
    // useEffect(()=>{
    //     setLoader(true);
    //     //call function    api call to the backend system
    //     //now pass the empty array
    //    // apiClient.get("/expenses")   we do not need this anymore since we have now expense-service.ts
    //     getExpenses()
    //    //.then((response)=>console.log(response))
    //     .then((response) => {
    //         setExpenses(response.data);    //we get the response --> then update the state
    //     })
    //     .catch((error)=>setErrors(error.message))
    //     .finally(() => setLoader(false));
    // }, [])
    // const expenses:Expense[] = [
    //     {id:1, name:"Water Bill",
    //      amount: 200.00, 
    //      date: new Date().toDateString(), 
    //      category:"Utilities", 
    //      note: "bill" },
    //     {id:2, 
    //      name:"Electricity Bill", 
    //      amount: 500.00, 
    //      date: new Date().toDateString(),
    //      category:"Utilities", 
    //      note: "bill"},
    //     {id:3, 
    //      name:"Wifi Bill", 
    //      amount: 700.00,
    //      date: new Date().toDateString(),
    //      category:"Utilities", 
    //      note: "bill"}
    //   ];
     
   return <div>
            {isLoading && <p>Now Loading...</p>}
            {error && <p>{error}</p>}
             <ExpenseList expenses={expenses}/>
          </div>
   
            
          
}

export default Dashboard