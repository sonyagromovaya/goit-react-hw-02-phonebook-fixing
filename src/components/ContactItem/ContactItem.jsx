import PropTypes from 'prop-types';
import style from './ContactItem.module.scss';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={style.item}>
      <span className={style.itemName}>{name}:</span>
      <span className={style.itemNumber}>{number}</span>
      <button
        type="button"
        onClick={() => onDeleteContact(id)}
        className={style.delete_btn}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
