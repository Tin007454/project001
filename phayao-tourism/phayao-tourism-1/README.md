# Phayao Tourism Website

Welcome to the Phayao Tourism project! This website is designed to promote the beautiful tourist attractions in Phayao province, Thailand. It features highlighted attractions, recommended articles, and a contact form for inquiries.

## Project Structure

The project is organized as follows:

```
phayao-tourism
├── public
│   ├── favicon.ico          # Favicon for the website
│   ├── index.css            # CSS styles for the website
│   └── images               # Directory for image assets
├── src
│   ├── components
│   │   ├── AttractionCard.astro  # Component for displaying tourist attractions
│   │   ├── ArticleCard.astro     # Component for displaying recommended articles
│   │   └── ContactForm.astro     # Component for the contact form
│   ├── layouts
│   │   └── MainLayout.astro      # Main layout including header and footer
│   ├── pages
│   │   ├── index.astro           # Homepage displaying attractions and articles
│   │   ├── attractions.astro      # Page listing tourist attractions
│   │   ├── articles.astro         # Page listing recommended articles
│   │   └── contact.astro          # Contact page with the contact form
│   └── styles
│       └── global.css            # Global CSS styles
├── package.json                   # npm configuration file
├── astro.config.mjs               # Astro configuration file
└── README.md                      # Project documentation
```

## Features

- **Highlighted Attractions**: The homepage showcases popular tourist spots in Phayao.
- **Recommended Articles**: Users can read articles related to tourism in the area.
- **Contact Form**: Visitors can easily reach out with inquiries or feedback.

## Getting Started

To get started with the project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd phayao-tourism
npm install
```

Then, you can run the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser to see the website in action.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.