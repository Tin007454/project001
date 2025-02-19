# Phayao Tourism

This project is a Next.js application designed to promote tourist attractions in Phayao province. It dynamically fetches information about various attractions and provides users with an interactive experience through a main page, detail pages for each attraction, and a search system.

## Features

- **Dynamic Attraction Pages**: Each tourist attraction has its own detail page that displays comprehensive information.
- **Search Functionality**: Users can search for attractions based on keywords.
- **Responsive Design**: The application is designed to be mobile-friendly and responsive.

## Project Structure

```
phayao-tourism
├── public
│   ├── favicon.ico          # Favicon for the website
│   └── index.css            # Global CSS styles
├── src
│   ├── pages
│   │   ├── _app.tsx         # Custom App component for Next.js
│   │   ├── index.tsx        # Main page displaying a list of attractions
│   │   ├── attractions
│   │   │   └── [id].tsx     # Dynamic route for attraction details
│   │   └── search.tsx       # Search functionality page
│   ├── components
│   │   └── AttractionCard.tsx # Component for displaying individual attractions
│   ├── styles
│   │   └── globals.css      # Global styles for the application
│   └── utils
│       └── api.ts           # Utility functions for API data fetching
├── package.json              # npm configuration file
├── tsconfig.json             # TypeScript configuration file
└── README.md                 # Project documentation
```

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd phayao-tourism
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

4. **Open in Browser**:
   Navigate to `http://localhost:3000` to view the application.

## Usage

- Visit the main page to see a list of tourist attractions.
- Use the search bar to find specific attractions.
- Click on an attraction to view its details.

## API Integration

The application fetches data from a specified API to display information about tourist attractions. Ensure that the API is accessible and properly configured in the `src/utils/api.ts` file.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.