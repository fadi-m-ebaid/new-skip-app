# Skip Size Selector App

A modern React application for selecting skip sizes with Bootstrap components and responsive design.

## My Approach

When building this application, I focused on creating an intuitive user experience for skip selection. I analyzed the problem of presenting multiple options with detailed information and decided on a card-based grid system with modal overlays.

**Design Strategy:**
- Used a 3x3 grid layout to display all options at once for easy comparison
- Implemented modal popups to show detailed specifications without losing context
- Chose a warm, professional color palette to make the interface welcoming
- Prioritized mobile responsiveness since customers often browse on phones

**Technical Decisions:**
- Selected React for component reusability and state management
- Used Bootstrap for proven responsive design patterns
- Implemented Vite for fast development and optimized builds
- Added smooth animations to enhance user interaction

## Features

- **3x3 Grid Layout**: 9 skip cards displayed in a responsive grid
- **Bootstrap Components**: Uses React Bootstrap for all UI components
- **Modal Detail View**: Click any skip card to see detailed information with dimensions overlay
- **Responsive Design**: Works on desktop and mobile devices
- **Smooth Animations**: Hover effects and transitions
- **Progress Bar**: Shows current step in the selection process

## Design Features

- **Color Palette**: Uses Alison + Geoff's color palette that reflects sustainability
  - Card Background: #F5F1E8 (warm cream)
  - Price Text: #D2845A (orange)
  - Select Buttons: #8FA68E (green)
  - Background: #F8F9FA (light gray)
- **Typography**: Professional fonts matching detail modal
- **Icons**: Bootstrap Icons for enhanced UX

## Installation

1. Extract the zip file
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Development Mode
```bash
npm run dev
```
The app will be available at `http://localhost:5173`

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ProgressBar.jsx    # Progress indicator
│   ├── SkipGrid.jsx       # 3x3 grid of skip cards
│   └── SkipModal.jsx      # Modal with detailed view
├── data/
│   └── skips.js           # Skip data
├── App.jsx                # Main application component
├── main.jsx               # Application entry point
└── index.css              # Custom styles
```

## Functionality

- **Skip Selection**: Click select button or card to choose a skip
- **Modal View**: Click any card to see detailed information
- **Responsive Grid**: Automatically adjusts for different screen sizes
- **Price Calculation**: Includes VAT calculation and total pricing
- **Status Indicators**: Shows road access and heavy waste permissions

## Technologies Used

- React 19.1.0
- React Bootstrap 2.10.10
- Bootstrap 5.3.6
- Bootstrap Icons 1.11.3
- Vite (build tool)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

