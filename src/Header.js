/**
 * Alias for the header tag. The Header element defines a Header for a document
 * or section.  It should contain content relevant to the parent.
 *
 * @module Form
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import alias from './alias';
import STR_HEADER from './_constants/STR_HEADER';
import STR_HEADER_LC from './_constants/STR_HEADER_LC';

const Header = alias(STR_HEADER_LC, STR_HEADER);

export default Header;
