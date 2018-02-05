import STR_DISPLAY_NAME from '../_constants/STR_DISPLAY_NAME';

const _addDisplayName = (component, name) => {
    component[STR_DISPLAY_NAME] = name; // eslint-disable-line
    return component;
};

export default _addDisplayName;
