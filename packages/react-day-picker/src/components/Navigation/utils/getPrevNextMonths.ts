import { addMonths, startOfMonth } from 'date-fns';
import { DayPickerProps } from 'types';

import { defaultProps } from '../../DayPicker/defaultProps';

/**
 * Returns the next and the previous months that the user can navigate to.
 */
export function getPrevNextMonths(props: DayPickerProps): [Date?, Date?] {
  const {
    fromMonth,
    toMonth,
    month,
    numberOfMonths = defaultProps.numberOfMonths,
    pagedNavigation
  } = props;

  const add = pagedNavigation ? numberOfMonths : 1;
  const currentMonth = startOfMonth(month ?? defaultProps.today);

  let prevMonth: Date | undefined;
  if (!fromMonth || currentMonth > startOfMonth(fromMonth)) {
    prevMonth = addMonths(currentMonth, add * -1);
  }

  let nextMonth: Date | undefined;
  if (
    !toMonth ||
    addMonths(currentMonth, numberOfMonths) <= startOfMonth(toMonth)
  ) {
    nextMonth = addMonths(currentMonth, add);
  }

  return [prevMonth, nextMonth];
}