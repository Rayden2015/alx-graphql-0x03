# Rick and Morty GraphQL App with Error Boundary

A React application that uses GraphQL with Apollo Client to explore the Rick and Morty universe. This project includes an ErrorBoundary component for graceful error handling.

## 🚀 Features

- Browse characters with search and filter capabilities
- View detailed character information including episodes
- Explore episodes from all seasons
- Discover locations across different dimensions
- **ErrorBoundary** for graceful error handling
- Fully responsive design
- Real-time data from Rick and Morty GraphQL API

## 📋 Prerequisites

- Node.js 20.19+ or 22.12+
- npm or yarn
- nvm (Node Version Manager) - recommended

## 🛠️ Installation

### Using nvm (Recommended)

This project includes a `.nvmrc` file that specifies the required Node.js version.

```bash
# Install and use the correct Node.js version
nvm install
nvm use

# Install dependencies
npm install

# Start development server
npm run dev
```

### Without nvm

```bash
# Make sure you're using Node.js 20.19+ or 22.12+
node --version

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
alx-rick-and-morty-app/
├── components/
│   ├── ErrorBoundary.tsx         # Error boundary component
│   ├── ErrorProneComponent.tsx   # Test component that throws error
│   ├── Navigation.tsx            # Navigation bar
│   └── common/
│       └── EpisodeCard.tsx       # Episode card component
├── pages/
│   ├── index.tsx                 # Home page (tests ErrorBoundary)
│   ├── Characters.tsx            # Characters list page
│   ├── CharacterDetail.tsx       # Character details page
│   ├── Episodes.tsx              # Episodes list page
│   └── Locations.tsx             # Locations list page
├── graphql/
│   ├── apolloClient.ts           # Apollo Client configuration
│   └── queries.ts                # GraphQL queries
├── styles/                       # CSS files
├── App.tsx                       # Main app component with routing
├── main.tsx                      # Entry point
├── index.html                    # HTML template
├── vite.config.js                # Vite configuration
└── README.md                     # This file
```

## 🔧 Technologies

- **React 19** - UI Library
- **Vite 7** - Build Tool
- **Apollo Client 3.14** - GraphQL Client
- **React Router 7** - Client-side Routing
- **GraphQL** - Query Language
- **TypeScript** - Type Safety

## 🌐 API

This project uses the [Rick and Morty GraphQL API](https://rickandmortyapi.com/graphql).

## 📝 GraphQL Queries

The app includes queries for:
- `GET_CHARACTERS` - Fetch characters with pagination and filters
- `GET_CHARACTER_BY_ID` - Get detailed character information with episodes
- `GET_EPISODES` - Fetch episodes with pagination
- `GET_LOCATIONS` - Fetch locations with pagination and filters

## 🛡️ Error Boundary Implementation

This project includes an **ErrorBoundary** component that catches JavaScript errors in the component tree and displays a fallback UI.

### Files:
1. **components/ErrorBoundary.tsx** - React Error Boundary class component
2. **components/ErrorProneComponent.tsx** - Test component that intentionally throws an error
3. **pages/index.tsx** - Home page that uses ErrorBoundary to catch errors

### Testing the Error Boundary:

When you run `npm run dev` and visit `http://localhost:5173` (or the port shown in your terminal), the ErrorBoundary will catch the error thrown by `ErrorProneComponent` and display:

```
🔴 ERROR BOUNDARY ACTIVATED! 🔴
Oops, there is an error!
The Error Boundary successfully caught the error!
[Try again? button]
```

The error will also be logged to the browser console.

## 🎨 Pages

1. **Home** (`/`) - Demonstrates ErrorBoundary functionality
2. **Characters** (`/characters`) - Browse and search characters with filters
3. **Character Detail** (`/characters/:id`) - View full character information
4. **Episodes** (`/episodes`) - Browse all episodes with search
5. **Locations** (`/locations`) - Explore locations with search and filters

## 🎯 How Error Boundary Works

The `ErrorBoundary` component wraps the entire application in `App.tsx`:

```typescript
<ErrorBoundary>
  <Router>
    {/* Routes */}
  </Router>
</ErrorBoundary>
```

Any error thrown by child components will be caught and handled gracefully, preventing the entire app from crashing.

## 🚨 Important Note

This project requires Node.js version **20.19+** or **22.12+**. 

### Quick Fix for Node.js Version Issues

If you see an error like "You are using Node.js 18.x.x. Vite requires Node.js version 20.19+ or 22.12+":

```bash
# Using nvm (will use the version specified in .nvmrc)
nvm install
nvm use

# Then reinstall dependencies and run the dev server
npm install
npm run dev
```

## 🏃 Running the Application

```bash
# Navigate to the project directory
cd alx-rick-and-morty-app

# Use the correct Node version
nvm use

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## 📂 Repository Information

- **GitHub repository:** alx-graphql-0x03
- **Directory:** alx-rick-and-morty-app
- **Key Files:** 
  - `README.md`
  - `components/ErrorBoundary.tsx`
  - `components/ErrorProneComponent.tsx`
  - `pages/index.tsx`

## 📄 License

This project is part of the ALX GraphQL curriculum.
