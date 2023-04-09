import { useDispatch, useSelector } from 'react-redux';
import { onChangeFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import {
  FilterContainer,
  FilterLabel,
  FilterInput,
} from 'components/Filter/Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  function handleInputChange(event) {
    dispatch(onChangeFilter(event.target.value));
  }

  return (
    <FilterContainer>
      <FilterLabel>
        Filter
        <FilterInput
          type="text"
          name="filter"
          value={filter}
          onChange={handleInputChange}
        />
      </FilterLabel>
    </FilterContainer>
  );
};

export default Filter;
