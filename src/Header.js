/**
 * Alias for the <header> tag. The Header element defines a Header for a document
 * or section.  It should contain content relevant to the parent.
 * 
 * @module Form
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Header';
const STR_TAG = _toLowerCase(STR_NAME);

const Header = alias(STR_TAG, STR_NAME);

export default Header;
