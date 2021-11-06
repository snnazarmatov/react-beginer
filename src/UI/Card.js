import '../UI/Card.css';


//Component Layout

function Card(props){
    let classes = 'card ' + props.className;
    return (<div className={classes}>
             {props.children}
        {/* TODO: пропстан келген зарезервированное имя */}
        </div>
    )
}

export default Card;