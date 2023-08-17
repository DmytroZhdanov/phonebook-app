import { Form, Input, Label } from 'components/Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  const handleBlur = e => {
    e.currentTarget.parentElement.setAttribute(
      'data-filled',
      `${e.currentTarget.value === '' ? 'false' : 'true'}`
    );
  };

  return (
    <Form>
      <Label htmlFor="input-search">
        Find contacts by name
        <Input
          type="text"
          id="input-search"
          onChange={handleChange}
          onBlur={handleBlur}
          name="filter"
          value={filter}
        />
      </Label>
    </Form>
  );
};
