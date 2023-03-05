import PropTypes from 'prop-types';
import { FilterInput } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {
  return (
    <label>
      Find contact by name
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
  );
};

Filter.PropType = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
