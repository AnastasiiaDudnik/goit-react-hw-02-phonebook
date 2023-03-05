import { Component } from 'react';
import { Input, Button } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  hanldeChangeInput = evt => {
    const { name, value } = evt.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  formSubmit = evt => {
    evt.preventDefault();

    this.props.onSubmit(this.state);
    this.formReset();
  };

  formReset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <label>
          Name
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.hanldeChangeInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <Input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.hanldeChangeInput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Button type="submit">Add contact</Button>
      </form>
    );
  }
}
