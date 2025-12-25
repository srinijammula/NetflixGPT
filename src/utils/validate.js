export const checkValidData = (email, password) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = password.length >= 6;
    if (!isEmailValid) return "Email is not valid.";
    if (!isPasswordValid) return "Password must be at least 6 characters long.";
    return null;
}