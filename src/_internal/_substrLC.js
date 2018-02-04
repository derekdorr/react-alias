import { compose } from 'skald';
import _toLowerCase from './_toLowerCase';
import _substr from './_substr';

const _substrLC = compose(_toLowerCase, _substr);

export default _substrLC;
