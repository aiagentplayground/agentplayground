// CTF Challenges Data
const challenges = [
    {
        id: 1,
        title: "Hello World",
        category: "misc",
        points: 50,
        description: "Welcome to the CTF! Here's an easy one to get you started. The flag is hidden in plain sight below.",
        hint: "Sometimes the answer is right in front of you: FLAG{welcome_to_ctf}",
        flag: "FLAG{welcome_to_ctf}"
    },
    {
        id: 2,
        title: "Inspect Element",
        category: "web",
        points: 100,
        description: "Web developers sometimes leave secrets in their code. Can you find the hidden flag? Try inspecting this page carefully.",
        hint: "Check the HTML comments in the source code of this page",
        flag: "FLAG{inspect_element_master}"
    },
    {
        id: 3,
        title: "Base64 Basics",
        category: "crypto",
        points: 100,
        description: "Decode this message to find the flag: RkxBR3tiYXNlNjRfaXNfbm90X2VuY3J5cHRpb259",
        hint: "This is Base64 encoding. Use a decoder tool or CyberChef.",
        flag: "FLAG{base64_is_not_encryption}"
    },
    {
        id: 4,
        title: "Console Logger",
        category: "web",
        points: 150,
        description: "The developer was testing something and forgot to remove it. Check the browser's developer console.",
        hint: "Open Developer Tools (F12) and look at the Console tab",
        flag: "FLAG{console_log_secrets}"
    },
    {
        id: 5,
        title: "Caesar's Secret",
        category: "crypto",
        points: 150,
        description: "Julius Caesar used this cipher to communicate. Decode: IODJ{urwdwh_wkluwhhq}",
        hint: "This is a Caesar cipher with ROT13 (shift of 13). Try shifting each letter back by 13.",
        flag: "FLAG{rotate_thirteen}"
    },
    {
        id: 6,
        title: "Hidden in Headers",
        category: "web",
        points: 200,
        description: "Sometimes important information is passed through HTTP headers. Make a request and check the response headers of this page.",
        hint: "Use Developer Tools > Network tab, or curl with -v flag to see headers. The flag might be in a custom header.",
        flag: "FLAG{http_headers_ftw}"
    },
    {
        id: 7,
        title: "Binary Message",
        category: "crypto",
        points: 200,
        description: "Computers speak in 1s and 0s. Decode this: 01000110 01001100 01000001 01000111 01111011 01100010 01101001 01101110 01100001 01110010 01111001 01011111 01100011 01101111 01100100 01100101 01111101",
        hint: "Convert each 8-bit binary number to its ASCII character equivalent.",
        flag: "FLAG{binary_code}"
    },
    {
        id: 8,
        title: "Robots Not Allowed",
        category: "web",
        points: 250,
        description: "Websites tell search engines what not to index. What secrets might be hidden there?",
        hint: "Check the robots.txt file. Websites use this to tell search engine crawlers which pages to avoid.",
        flag: "FLAG{robots_txt_secrets}"
    },
    {
        id: 9,
        title: "Hex Decoder",
        category: "crypto",
        points: 250,
        description: "Hexadecimal is base-16. Decode this: 464c41477b6865785f656e636f64696e677d",
        hint: "Convert each pair of hex digits to ASCII characters.",
        flag: "FLAG{hex_encoding}"
    },
    {
        id: 10,
        title: "Local Storage",
        category: "web",
        points: 300,
        description: "Web apps often store data locally in your browser. Can you find what's hidden in the local storage?",
        hint: "Open Developer Tools > Application > Local Storage and look for interesting data.",
        flag: "FLAG{local_storage_treasure}"
    }
];

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { challenges };
}
