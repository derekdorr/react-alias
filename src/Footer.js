/**
 * Alias for the footer tag. The Footer element defines a footer for a document
 * or section.  Content should be related to the parent.
 *
 * @module Footer
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import alias from './alias';
import STR_FOOTER from './_constants/STR_FOOTER';
import STR_FOOTER_LC from './_constants/STR_FOOTER_LC';

const Footer = alias(STR_FOOTER_LC, STR_FOOTER);

export default Footer;
