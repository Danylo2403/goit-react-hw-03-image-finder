import {
  SearchBarStyled,
  SearchForm,
  SearchFormInput,
  SearchButton,
  SearchIcon,
} from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  return (
    <SearchBarStyled>
      <SearchForm
        onSubmit={evt => {
          evt.preventDefault();
          onSubmit(evt.target.elements.query.value);
        }}
      >
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