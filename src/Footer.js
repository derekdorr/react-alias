/**
 * Alias for the <footer> tag. The Footer element defines a footer for a document
 * or section.  Content should be related to the parent.
 *
 * @module Footer
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Footer';
const STR_TAG = _toLowerCase(STR_NAME);

const Footer = alias(STR_TAG, STR_NAME);

export default Footer;
