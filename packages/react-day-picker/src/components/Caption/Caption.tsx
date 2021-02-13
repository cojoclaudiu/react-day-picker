import * as React from 'react';

import { CaptionProps } from '../../types/CaptionProps';
import { defaultProps } from '../DayPicker/defaultProps';
import { getCaptionComponent } from './getCaptionComponent';

export function Caption(props: CaptionProps): JSX.Element {
  const { rootProps } = getCaptionComponent(props.dayPickerProps);
  const locale = props.dayPickerProps.locale || defaultProps.locale;
  const formatCaption =
    props.dayPickerProps.formatCaption ?? defaultProps.formatCaption;
  return (
    <caption {...rootProps}>{formatCaption(props.month, { locale })}</caption>
  );
}