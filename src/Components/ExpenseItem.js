import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';


function ExpenseItem(props) {
    //amount,title,date деген данныйларыбыз props = {date:new Date(2020.7.30)name: "Toilet Paper" amount: 94.12} ушул сыяктуу болуп келип калды
    let expenseDate = props.date;//келген данныйларды переменныйларга сактап алдык и аларды ретурундун ичине жаздык
    let expenseTitle = props.title;
    let expenseAmount = props.amount;

    return (
        <div className='expense-item'> 
            <ExpenseDate date = {expenseDate}/> 
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>{expenseAmount}som</div>
            </div>
        </div>
        
    );
}

export default ExpenseItem;