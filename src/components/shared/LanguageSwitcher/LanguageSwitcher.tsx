'use client';

import { useState } from 'react';
import { Box, TextField, MenuItem } from '@mui/material';
import { Locale, languages } from '@/i18n';
import useRouter from '@/hooks/useRouter';

export default function LanguageSwitcher() {
  const { asPath, locale, replace } = useRouter();
  const [language, setLanguage] = useState<Locale>(locale);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const lang = event.target.value as Locale;
    setLanguage(lang);
    replace(lang + asPath);
  };

  return (
    <Box>
      <TextField
        id="outlined-select-currency"
        select
        value={language}
        onChange={handleChange}
        sx={{ '& .MuiSelect-select': { p: 1 } }}
      >
        {languages.map((option, idx) => (
          <MenuItem key={idx} value={option.locale} sx={{ px: 1, minHeight: 'auto' }}>
            <Box sx={{ '& > img': { mr: 1, flexShrink: 0 } }}>
              <img
                loading="lazy"
                width="20"
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                alt=""
              />
              {option.label}
            </Box>
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}
