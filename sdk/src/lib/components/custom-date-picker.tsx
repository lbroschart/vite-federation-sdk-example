import { DatePicker } from '@mui/x-date-pickers-pro'
import { DateTime } from 'luxon'

const CustomDatePicker = () => {
  return (
    <DatePicker label="Picker" defaultValue={ DateTime.now() } />
  )
}

export default CustomDatePicker
