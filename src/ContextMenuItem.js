/**
 * Alias for the menuitem tag.  The ContextMenuItem defines an element of a
 * ContextMenu.
 *
 * @module ContextMenuItem
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import alias from './alias';
import STR_MENU_ITEM_LC from './_constants/STR_MENU_ITEM_LC';
import STR_CONTEXT_MENU_ITEM from './_constants/STR_CONTEXT_MENU_ITEM';

const ContextMenu = alias(STR_MENU_ITEM_LC, STR_CONTEXT_MENU_ITEM);

export default ContextMenu;
