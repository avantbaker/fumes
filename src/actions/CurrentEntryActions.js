export const UPDATE_ENTRY = 'UPDATE_ENTRY';
export const updateEntry = (entry) => {
    return {
        type: UPDATE_ENTRY,
        payload: entry
    }
};

export const UPDATE_SECTION = 'UPDATE_SECTION';
export const updateSection = (section) => {
    return {
        type: UPDATE_SECTION,
        payload: {
            currentSection: section
        }
    }
};