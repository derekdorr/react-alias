/**
 * Alias for the <video> tag. The Video element defines embedded video content.
 * 
 * @module Video
 * @func
 * @since 1.0.0
 * @param {Object} props
 */


import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Video';
const STR_TAG = _toLowerCase(STR_NAME);

const Video = alias(STR_TAG, STR_NAME);

export default Video;
