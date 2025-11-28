# CTF Challenge Platform 🚩

A Capture The Flag (CTF) website for practicing cybersecurity skills.

## Features

- 🎯 **10 Challenges** across multiple categories (Web, Crypto, Misc)
- 🏆 **Scoring System** - Track your progress and points
- 💡 **Hints** - Each challenge includes helpful hints
- 🎉 **Celebration Effects** - Confetti when you capture a flag!
- 💾 **Progress Saving** - Your progress is saved in local storage

## Challenge Categories

- **Web**: Web security challenges (inspect element, headers, robots.txt, etc.)
- **Crypto**: Cryptography challenges (Base64, Caesar cipher, binary, hex)
- **Misc**: Miscellaneous beginner-friendly challenges

## How to Run

1. Clone the repository
2. Open `index.html` in a web browser
3. Start solving challenges!

Or use a simple HTTP server:

```bash
# Python 3
python -m http.server 8000

# Node.js (with http-server)
npx http-server
```

Then open http://localhost:8000 in your browser.

## Flag Format

All flags follow the format: `FLAG{...}`

## Tips for Beginners

1. Use your browser's Developer Tools (F12)
2. Check the Console, Network, and Application tabs
3. View page source (Ctrl+U)
4. Think like a hacker! 🏴‍☠️

## License

MIT License - Feel free to use for learning and educational purposes.