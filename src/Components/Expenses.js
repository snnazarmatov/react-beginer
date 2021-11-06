import React from "react";
import ExpenseItem from '../Components/ExpenseItem'; 
import './Expenses.css';
import Card from '../UI/Card'


const  Expenses = (props) => {
    return<Card className="expenses">
        <div className='cady'>
           
            {
                props.expenses.map((el) => {
                    return<ExpenseItem 
                        title ={el.title}
                        amount = {el.amount}
                        date = {el.date}
                    />
                })
            }
            </div>
            </Card>
    
}
export default Expenses;




            
{/* 
//             {/* js function jazyp jatabyz bul metod kop ubakytty alat anan tuura emes bolot */}
//         <ExpenseItem 
//         title ={props.expenses[0].title}
//         amount = {props.expenses[0].amount}
//         date = {props.expenses[0].date}
//         />
//         <ExpenseItem 
//         title ={props.expenses[1].title}
//         amount = {props.expenses[1].amount}
//         date = {props.expenses[1].date}
//         />
//         <ExpenseItem 
//         title ={props.expenses[2].title}
//         amount = {props.expenses[2].amount}
//         date = {props.expenses[2].date}
//         />
//         </div>
//     )
// }
// export default Expenses; */}