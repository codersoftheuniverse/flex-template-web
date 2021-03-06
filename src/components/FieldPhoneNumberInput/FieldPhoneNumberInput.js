/**
 * DEPRECATED: this component is part of Redux Form - we are migrating to react-final-form.
 */

/**
 * A text field with phone number formatting. By default uses formatting
 * rules defined in the fiFormatter.js file. To change the formatting
 * provide alternative implementations for the format and parse functions
 * that are passed to the input field.
 */
import React from 'react';

import { FieldTextInput } from '../../components';
import { format, parse } from './fiFormatter';

const FieldPhoneNumberInput = props => {
  const inputProps = {
    ...props,
    type: 'text',
    format: format,
    parse: parse,
  };

  return <FieldTextInput {...inputProps} />;
};

export default FieldPhoneNumberInput;
