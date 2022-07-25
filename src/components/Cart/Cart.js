import classes from './Cart.module.css'
import Modal from '../UI/Modal'

const Cart =(props)=>{

    const cartItems = [{id:1, name:'sushi', amount:2, price: 12.99}]
    return <Modal onClose={props.onCloseCart}>
        <ul className={classes['cart-items']}>
            
        {cartItems.map((item)=>{
            return <li>{item.name}</li>
        })}
        </ul>
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.62</span>
        </div>
        <div className={classes.actions}>
            <button onClick={props.onCloseCart} className={classes['button--alt']}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
}

export default Cart