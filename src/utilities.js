export const formatDate = (x) => {
    const date = new Date(x);
    let d = date.getUTCDate().toString();
    let m = (date.getUTCMonth() + 1).toString();
    let y = date.getUTCFullYear().toString();
    let formatted;

    formatted = m + '/' + d + '/' + y.substring(2);
    return formatted;
};