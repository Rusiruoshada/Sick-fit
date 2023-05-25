import { resetIdCounter, useCombobox } from 'downshift';
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown';

const  SEARCH_PRODUCTS_QUERY = gql`
    query SEARCH_PRODUCTS_QUERY($searchTerm: $string) {
        searchTerm: allProducts(
            where: {
                OR: [
                    {name_contains_i: $searchTerm}
                    {description_contains_i: $searchTerm}
                ]
            }
        ){
            id
            name
            photo{
                image {
                    publicUrlTransformed
                }
            }
        }
    }
`;

export default function Search() {
  resetIdCounter();
  const { getMenuProps, getInputProps, getComboboxProps } = useCombobox({
    items: [],
    onInputValueChange() {
      console.log('Input Change');
    },
    onSelectedItemChange() {
      console.log('Selected item change');
    },
  });
  return (
    <SearchStyles>
      <div {...getComboboxProps()}>
        <input
          {...getInputProps({
            type: 'search',
            placeholder: 'Search for an Item',
            id: 'search',
            className: 'loading',
          })}
        />
      </div>
      <DropDown {getMenuProps()}>
        <DropDownItem>hey</DropDownItem>
      </DropDown>
    </SearchStyles>
  );
}
