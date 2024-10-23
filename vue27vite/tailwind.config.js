const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {},
    variants: {
        // ...
    },
    plugins: [
        plugin(function ({ addVariant, e }) {
            addVariant("sibling", "& + *");
        }),
    ],
};
