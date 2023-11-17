import React from 'react';
import {
  SearchBarStyled,
  SearchForm,
  SearchFormInput,
  SearchButton,
  SearchIcon,
} from './SearchBar.styled';

const SearchBar = ({ onSubmit }) => {
  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const query = evt.target.elements.query.value;
    onSubmit(query);
  };

  return (
    <SearchBarStyled>
      <SearchForm onSubmit={handleFormSubmit}>
        <SearchButton type="submit">
          <SearchIcon />
        </SearchButton>

        <SearchFormInput
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchBarStyled>
  );
};

export default SearchBar;
