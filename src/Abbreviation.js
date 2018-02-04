/**
 * Alias for the abbr tag.  The Abbreviation element defines an abbreviation
 * or acronym.
 *
 * @module Abbreviation
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import alias from './alias';
import STR_ABBR from './_constants/STR_ABBR';
import STR_ABBREVIATION from './_constants/STR_ABBREVIATION';

const Abbreviation = alias(STR_ABBR, STR_ABBREVIATION);

export default Abbreviation;
