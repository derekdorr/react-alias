/**
 * Alias for the article tag.  The Article tag is used to define independent
 * content which could be distributed separate from the parent document.
 *
 * @module Article
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import alias from './alias';
import STR_ARTICLE from './_constants/STR_ARTICLE';
import STR_ARTICLE_LC from './_constants/STR_ARTICLE_LC';

const Article = alias(STR_ARTICLE_LC, STR_ARTICLE);

export default Article;
