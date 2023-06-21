/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useRef, useState, Fragment, SyntheticEvent } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, useTheme, Chip } from '@mui/material';
// import CircularProgress from '@mui/material/CircularProgress';
import CloseIcon from '@mui/icons-material/Close';
import { SearchWrapper, SearchSection, SearchIconWrapper, StyledInputBase } from './styles';
// import { GetProducts } from '@/store/types/Products';
// import useRouter from '@/hooks/useRouter';
// import { ROUTES } from '@/config/constants';
// import { useSearch } from '@/store/hooks/search';
// import { useEmbedContext } from '@/contexts/embedContext';

function Search() {
  //   const { showSearch } = useEmbedContext();
  const [showOptions, setShowOptions] = useState(false);
  const ref = useRef(null);
  const [query, setQuery] = useState('');

  // const { push, getRoute } = useRouter();

  const theme = useTheme();

  // const { data: searchData, isFetching } = useSearch(query);

  // const suggestions: GetProducts.Product[] =
  //   searchData?.filter((result: GetProducts.Product) =>
  //     result.name.toLowerCase().includes(query.toLowerCase())
  //   ) || [];

  useOnClickOutside(ref, () => setQuery(''));

  // const options: GetProducts.Product[] = showOptions && suggestions?.length ? suggestions : [];

  // const handleInputChange = (e: SyntheticEvent<Element, Event>, val: string) => {
  //   e.preventDefault();
  //   setQuery(val);
  //   setShowOptions(!!val?.length);
  // };

  const handleClose = () => {
    setShowOptions(false);
    setQuery('');
  };

  // const handleSelectSuggestion = (product: GetProducts.Product) => {
  //   if (product) {
  //     const to = `${getRoute(ROUTES.PRODUCTS)}/${product.globalId}`;
  //     push(to, undefined, { shallow: true });
  //   }
  // };

  return (
    <SearchWrapper>
      <SearchSection>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <Autocomplete
          // onChange={(e, value) => handleSelectSuggestion(value as GetProducts.Product)}
          freeSolo
          clearIcon={
            <CloseIcon
              sx={{ color: { xs: theme.palette.grey[400], md: theme.palette.common.white } }}
            />
          }
          options={['hey', 'you', 'wauw']}
          renderOption={(props, option) => (
            <li {...props} key={option}>
              {option}
            </li>
          )}
          renderTags={(tagValue, getTagProps) =>
            tagValue.map((option, index) => (
              <Chip {...getTagProps({ index })} key={option} label={option} />
            ))
          }
          // options={options as GetProducts.Product[]}
          // loading={isFetching}
          // onInputChange={handleInputChange}
          onClose={() => handleClose()}
          // renderOption={(props, option) => <li key={option}>{option}</li>}
          // getOptionLabel={(option) => (typeof option !== 'string' ? option?.name : option)}
          renderInput={(params) => {
            const { InputLabelProps, InputProps, ...rest } = params;
            return (
              <StyledInputBase
                {...params.InputProps}
                {...rest}
                placeholder="Search…"
                endAdornment={
                  <Fragment>
                    {/* {isFetching ? <CircularProgress color="inherit" size={20} /> : null} */}
                    {params.InputProps.endAdornment}
                  </Fragment>
                }
              />
            );
          }}
        />
      </SearchSection>
    </SearchWrapper>
  );
}

export default Search;
