/**
 * Alias for the <article> tag.  The Article tag is used to define independent
 * content which could be distributed separate from the parent document.
 * 
 * @module Article
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Article';
const STR_TAG = _toLowerCase(STR_NAME);

const Article = alias(STR_TAG, STR_NAME);

export default Article;
