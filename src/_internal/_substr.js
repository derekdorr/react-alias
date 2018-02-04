import { define } from 'skald';

const _substr = define((start, length, str) => str.substr(start, length));

export default _substr;
