/**
 * Alias for the form tag. The Form element should be used to define a form
 * for user input.
 *
 * @module Form
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Form';
const STR_TAG = _toLowerCase(STR_NAME);

const Form = alias(STR_TAG, STR_NAME);

export default Form;
