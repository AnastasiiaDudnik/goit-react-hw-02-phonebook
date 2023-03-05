import PropTypes from 'prop-types';
import { List, ListButton } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name} {number}
          <ListButton type="button" onClick={() => onDelete(id)}>
            Delete
          </ListButton>
        </li>
      ))}
    </List>
  );
};

ContactList.PropType = {
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
