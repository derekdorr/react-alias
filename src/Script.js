/**
 * Alias for the <script> tag. The Script element defines document scripting. 
 * 
 * @module Script
 * @func
 * @since 1.0.0
 * @param {Object} props
 */


import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Script';
const STR_TAG = _toLowerCase(STR_NAME);

const Script = alias(STR_TAG, STR_NAME);

export default Script;
