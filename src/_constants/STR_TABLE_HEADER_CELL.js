import { appendTo } from 'skald';
import STR_TABLE_HEADER from './STR_TABLE_HEADER';
import STR_CELL from './STR_CELL';

const STR_TABLE_HEADER_CELL = appendTo(STR_TABLE_HEADER, STR_CELL);

export default STR_TABLE_HEADER_CELL;
