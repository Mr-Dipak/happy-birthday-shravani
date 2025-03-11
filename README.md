# Cyberpunk Birthday Website

A hacker-themed birthday website with cool animations and interactive elements. Perfect for tech-savvy friends who love cybersecurity and programming!

## Features

- Matrix-style rain animation background
- Terminal-like typing effect
- Interactive password challenge
- Glitch text effects
- Responsive design
- Cyberpunk/hacker aesthetic

## Customization

1. Open `script.js` and modify these constants:
   - `FRIEND_NAME`: Replace with your friend's name
   - `SECRET_CODE`: Change the access code (default: "2024")
   - `TYPING_SPEED`: Adjust the typing animation speed (default: 50ms)

2. Modify the birthday messages:
   - Edit the `commands` array for the initial terminal sequence
   - Edit the `birthdayMessage` array for the final birthday message

## Deployment

You can deploy this website using any of these platforms:

### GitHub Pages
1. Create a new repository on GitHub
2. Push these files to your repository
3. Go to Settings > Pages
4. Select your main branch as the source
5. Your site will be available at `https://[username].github.io/[repository-name]`

### Vercel
1. Sign up for a Vercel account
2. Connect your GitHub repository
3. Import the project
4. Your site will be automatically deployed

## Local Development

To run the website locally:
1. Clone the repository
2. Open `index.html` in your browser
3. Or use a local server:
   ```bash
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

## Credits

Created with ❤️ using:
- HTML5
- Tailwind CSS
- Vanilla JavaScript 