const baseEntry = {
    average : "00.0",
    left : {
        average : "00.0",
        eighteen : "00.0",
        six : "00.0",
        twelve : "00.0"
    },
    location : "",
    middle : {
        average : "00.0",
        eighteen : "00.0",
        six : "00.0",
        twelve : "00.0"
    },
    name : "",
    right : {
        average: "00.0",
        eighteen: "00.0",
        six: "00.0",
        twelve: "00.0"
    }
};

export const createBaseEntry = (config) => {
    return Object.assign({}, baseEntry, config);
};
