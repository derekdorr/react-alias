/**
 * Alias for the section tag. The Section element defines standalone sections within
 * a document. Do not use this for generic structure.
 *
 * @module Section
 * @func
 * @since 1.0.0
 * @param {Object} props
 */


import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Section';
const STR_TAG = _toLowerCase(STR_NAME);

const Section = alias(STR_TAG, STR_NAME);

export default Section;
