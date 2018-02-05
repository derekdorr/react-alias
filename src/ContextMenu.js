/**
 * Alias for the menu tag.  The ContextMenu defines a list or menu of commands.
 * It can be used for context menus, toolbars, or form controls.
 *
 * @module ContextMenu
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import alias from './alias';
import STR_MENU_LC from './_constants/STR_MENU_LC';
import STR_CONTEXT_MENU from './_constants/STR_CONTEXT_MENU';

const ContextMenu = alias(STR_MENU_LC, STR_CONTEXT_MENU);

export default ContextMenu;
