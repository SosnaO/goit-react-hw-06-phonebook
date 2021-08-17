import { useState } from 'react';
import shortid from 'shortid'
import styles from './ContactForm.module.css';


// import { connect } from 'react-redux';
import contactsAction from '../redux/counter/counter-action';


export default function ContactForm({onSubmit}) {
    const [name, setName]= useState('');
    const [number, setNumber]= useState('');

    const id=shortid.generate();

       const handleChange=event=>{
       const { name, value } = event.target;
       switch (name){
           case 'name':
           setName(value);
           break;
         case 'number':
             setNumber(value);
             break;
             
             default:
                 return;
       }
     };
      
     const handleSubmit=event=>{
      event.preventDefault();
      onSubmit({ name, number, id });
      reset();
     };
     const reset = () => {
      setName("");
      setNumber("");
     };

    return(
        <form  className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.formLabel}>Name
        <input className={styles.formInput}
        type="text"
        name="name"
        id={shortid.generate()}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={name}
        onChange={handleChange}
        />
        </label>

        <label className={styles.formLabel} >Number
            <input className={styles.formInput}
        type="tel"
        name="number"
       id={shortid.generate()}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        value={number}
        onChange={handleChange}
        />
        </label>
        <button className={styles.buttonSubmit} type="submit">Add contact</button>
        </form>
        )
}





// const mapDispatchToProps = dispatch => ({
//     onSubmit: name => dispatch(contactsAction.addContact(name)),
//   });
  
//   export default connect(null, mapDispatchToProps)(ContactForm);



