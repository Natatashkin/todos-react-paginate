import { Button } from '../Button';
import { useCallback, useEffect, useState } from 'react';
import { IconButton } from 'components/IconButton';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputAdornment from '@mui/material/InputAdornment';
import CloseIcon from '@mui/icons-material/Close';
import { useForm, Controller } from 'react-hook-form';
import { useStyles } from './Filter.styles';

const DEFAULT_STATUS = 'all';

const DEFAULT_FILTER_VALUES = {
  filter: '',
  status: DEFAULT_STATUS,
};

const statusOptions = [
  {
    id: 'complited',
    value: 'completed',
    label: 'Completed',
  },
  {
    id: 'notCompleted',
    value: 'notCompleted',
    label: 'Not Completed',
  },
  {
    id: 'all',
    value: 'all',
    label: 'All Todos',
  },
];

const Filter = ({ getFormValues, resetPage }) => {
  const { handleSubmit, control, resetField, reset, watch } = useForm({
    defaultValues: DEFAULT_FILTER_VALUES,
  });

  const [disabledSearch, setDisabledSearch] = useState(false);
  const [disabledReset, setDisabledReset] = useState(true);
  const [disabledFilterReset, setDisabledFilterReset] = useState(true);

  const styles = useStyles();
  const filterData = watch('filter');

  const onSubmit = useCallback(data => {
    resetPage(1);
    setDisabledSearch(true);
    setDisabledReset(false);
    getFormValues(data);
  }, []);

  const handleFormReset = useCallback(() => {
    reset();
    setDisabledReset(true);
    setDisabledSearch(false);
    getFormValues(DEFAULT_FILTER_VALUES);
    resetPage(1);
  }, []);

  useEffect(() => {
    if (!filterData.length) {
      setDisabledFilterReset(true);
      return;
    }
    setDisabledFilterReset(false);
  }, [filterData]);

  return (
    <form id="form" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Box className={styles.formFields}>
        <Controller
          control={control}
          name="filter"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <TextField
              classes={{ root: styles.textFieldContainer }}
              label="Search query"
              variant="outlined"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              inputRef={ref}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      icon={<CloseIcon />}
                      onClick={() => resetField('filter')}
                      disabled={disabledFilterReset}
                      parentCmponent="filter"
                    />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />

        <Controller
          control={control}
          name="status"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <FormControl>
              <FormLabel>Todo Status</FormLabel>
              <RadioGroup
                classes={{ root: styles.radioGroup }}
                name="status"
                value={value}
                onChange={onChange}
                ref={ref}
              >
                {statusOptions.map(({ value, label }) => (
                  <FormControlLabel
                    key={value}
                    value={value}
                    control={<Radio />}
                    label={label}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          )}
        />
      </Box>

      <Box className={styles.buttonsContainer}>
        <Button
          type="button"
          title="Reset Form"
          disabled={disabledReset}
          onClick={handleFormReset}
        />
        <Button type="submit" title="Search" disabled={disabledSearch} />
      </Box>
    </form>
  );
};

export default Filter;
