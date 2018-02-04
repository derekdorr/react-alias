/**
 * Alias for the h1 to h6 tags. Requires a property of level which defines the
 * level of the heading. The Heading element should be used to appropriately
 * denote the structure of content as nested fragments.
 *
 * @module Header
 * @func
 * @since 1.0.0
 * @param {Object} props
 * @param {string|number} props.level
 */

import { appendTo } from 'skald';
import alias from './alias';

const appendToH = appendTo('h');
const Heading = props => {
    const { level, ...rest } = props;
    const tag = appendToH(level);
    return alias(tag, 'Heading')(rest);
};

export default Heading;
