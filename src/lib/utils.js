export const cleanString = (input, form = "NFKC", strip = '[\\u0300-\\u036f]') => {
    const normalized = input.normalize(form);
    if (strip) {
        return normalized.replace(new RegExp(strip, "g"), "");
    }
    return normalized;
};