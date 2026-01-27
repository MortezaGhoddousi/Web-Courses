export function toPersianNumber(num) {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return num
        .toString()
        .split("")
        .map((c) => {
            if (/\d/.test(c)) {
                return persianDigits[c];
            } else {
                return c;
            }
        })
        .join("");
}

const host =
    typeof window !== "undefined" ? window.location.hostname : "localhost";
export const api = `http://${host}:4000`;
