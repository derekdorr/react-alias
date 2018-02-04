/**
 * Alias for the address tag.  The Address tag defines the contact information
 * for the owner of a document or article.  If contained within <body> it will
 * denote the contact information for the document. If contained within <article>
 * it will denote the contact information for that article.
 *
 * @module Address
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import alias from './alias';
import STR_ADDRESS from './_constants/STR_ADDRESS';
import STR_ADDRESS_LC from './_constants/STR_ADDRESS_LC';

const Address = alias(STR_ADDRESS_LC, STR_ADDRESS);

export default Address;
