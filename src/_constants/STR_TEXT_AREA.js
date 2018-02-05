import { prependTo } from 'skald';
import STR_AREA from './STR_AREA';
import STR_TEXT from './STR_TEXT';

const STR_TEXT_AREA = prependTo(STR_AREA, STR_TEXT);

export default STR_TEXT_AREA;
