import { compose } from 'skald';
import _merge from './_merge';
import _defineType from './_defineType';

const _mergeType = compose(_merge, _defineType);

export default _mergeType;
