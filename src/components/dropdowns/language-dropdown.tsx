'use client';

import { Locale, LOCALES } from '@/libs/next-intl/constants';
import { setUserLocale } from '@/libs/next-intl/utils';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useLocale, useTranslations } from 'next-intl';

export const LanguageDropdown = () => {
  // "next-intl"
  const t = useTranslations('Language');
  const currentLocale = useLocale();

  const languages = [
    { value: LOCALES.EN, label: t('en') },
    { value: LOCALES.ES, label: t('es') },
  ];

  // Utils
  const handleChange = (event: SelectChangeEvent) =>
    setUserLocale(event.target.value as Locale);

  return (
    <FormControl variant="standard">
      <Select
        id="select"
        value={currentLocale}
        onChange={handleChange}
        label={t('label')}
        sx={{
          color: 'inherit',
          '.MuiOutlinedInput-notchedOutline': { borderColor: 'inherit' },
          '.MuiSvgIcon-root': { color: 'inherit' },
        }}
      >
        {languages.map(({ value, label }) => (
          <MenuItem key={value} value={value} sx={{ color: 'inherit' }}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
