// https://govuk-elements.herokuapp.com/errors/
// https://govuk-elements.herokuapp.com/errors/example-form-validation-single-question-radio

// This is to be used when more than one value of a radio/checkbox group requires validation.
// e.g. What is your gender?
// () Male
// () Female
// () Other

// Only one is valid, but at least one must be selected.
// Therefore validation around the set of radios is required.

import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { ERROR_COLOUR } from 'govuk-colours';

import LabelText from '@govuk-react/label-text';
import ErrorText from '@govuk-react/error-text';
import HintText from '@govuk-react/hint-text';

import {
  BORDER_WIDTH_MOBILE,
  MEDIA_QUERIES,
  SITE_WIDTH,
  SPACING,
} from '@govuk-react/constants';
import { withWhiteSpace } from '@govuk-react/hoc';

const FieldSet = glamorous.div(
  {
    padding: 0,
    margin: 0,
    border: 0,
    boxSizing: 'border-box',
    width: '100%',
    ':after': {
      content: "''",
      display: 'table',
      clear: 'both',
    },
    [MEDIA_QUERIES.LARGESCREEN]: {
      maxWidth: SITE_WIDTH,
    },
  },
  ({ error }) => ({
    borderLeft: error
      ? `${BORDER_WIDTH_MOBILE} solid ${ERROR_COLOUR}`
      : undefined,
    marginRight: error ? SPACING.SCALE_3 : undefined,
    paddingLeft: error ? SPACING.SCALE_2 : undefined,
  }),
);

const MultiChoice = ({
  meta, label, children, hint, className,
}) => (
  <FieldSet className={className} error={meta.touched && meta.error}>
    <LabelText>{label}</LabelText>
    {hint && <HintText>{hint}</HintText>}
    {meta.touched && meta.error && <ErrorText>{meta.error}</ErrorText>}
    {children}
  </FieldSet>
);

MultiChoice.defaultProps = {
  hint: undefined,
  className: undefined,
  meta: {},
};

MultiChoice.propTypes = {
  meta: PropTypes.shape({
    active: PropTypes.bool,
    dirty: PropTypes.bool,
    dirtySinceLastSubmit: PropTypes.bool,
    error: PropTypes.any,
    initial: PropTypes.bool,
    invalid: PropTypes.bool,
    pristine: PropTypes.bool,
    submitError: PropTypes.any,
    submitFailed: PropTypes.bool,
    submitSucceeded: PropTypes.bool,
    touched: PropTypes.bool,
    valid: PropTypes.bool,
    visited: PropTypes.bool,
  }),
  label: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  hint: PropTypes.string,
  className: PropTypes.string,
};

export default withWhiteSpace({ marginBottom: 0 })(MultiChoice);
