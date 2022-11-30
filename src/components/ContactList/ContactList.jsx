import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import style from './ContactList.module.scss';

const ContactList = ({ visibleContacts, onDeleteContact }) => {
  return (
    <ul className={style.list}>
      {visibleContacts.length !== 0 ? (
        visibleContacts.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDeleteContact={onDeleteContact}
            />
          );
        })
      ) : (
        <li className={style.error}>Name not found</li>
      )}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
