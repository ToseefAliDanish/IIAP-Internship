export const isValidEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
};

export const isNotEmpty = (text) => {
    return text.trim() !== "";
};