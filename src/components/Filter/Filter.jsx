import PropTypes from 'prop-types';
import style from './Filter.module.scss';

const Filter = ({ value, onChange }) => (
  <label className={style.label}>
    Find contacts by name:
    <input
      type="text"
      name="filter"
      className={style.inputName}
      title="Enter search name"
      onChange={onChange}
      value={value}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
