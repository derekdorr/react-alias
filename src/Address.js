/**
 * Alias for the <address> tag.  The Address tag defines the contact information
 * for the owner of a document or article.  If contained within <body> it will
 * denote the contact information for the document. If contained within <article>
 * it will denote the contact information for that article.
 * 
 * @module Address
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Address';
const STR_TAG = _toLowerCase(STR_NAME);

const Address = alias(STR_TAG, STR_NAME);

export default Address;
