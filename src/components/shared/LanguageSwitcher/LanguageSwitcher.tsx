'use client';

import { useState } from 'react';
import { Box, InputLabel, MenuItem, FormControl, Select, SelectChangeEvent } from '@mui/material';
import { Locale, languages } from '@/i18n';
import useRouter from '@/hooks/useRouter';

export default function LanguageSwitcher() {
  const { asPath, locale, replace } = useRouter();
  const [language, setLanguage] = useState<Locale>(locale);

  const handleChange = (event: SelectChangeEvent) => {
    const lang = event.target.value as Locale;
    setLanguage(lang);
    replace(lang + asPath);
  };

  return (
    <Box>
      <FormControl>
        <InputLabel id="language-select-label">Language</InputLabel>
        <Select
          labelId="language-select-label"
          id="language-select"
          value={language}
          label="Select your language"
          onChange={handleChange}
        >
          {languages.map((option, idx) => (
            <MenuItem key={idx} value={option.locale}>
              <Box sx={{ '& > img': { mr: 2, flexShrink: 0 } }}>
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
        </Select>
      </FormControl>
    </Box>
  );
}
