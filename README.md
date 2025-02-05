# Interactive React Components Dashboard

A modern React application showcasing various interactive components built with TypeScript, Tailwind CSS, and shadcn-ui.

## Features

### 1. Interactive Counter
- Dynamic counter with increment and decrement functionality
- Visual feedback with background animation based on counter value
- Toast notifications for counter updates
- Reset functionality to return to zero

### 2. Rich Text Editor
- Real-time text editing with formatting options
- Support for bold, italic, underline, and list formatting
- Local storage persistence for content
- Auto-save functionality
- Toast notifications for save confirmations

### 3. User Information Form
- Comprehensive user data collection
- Input validation for all fields
- Local storage persistence
- Unsaved changes detection
- Toast notifications for successful submissions
- Fields include:
  - Name
  - Email
  - Phone
  - Address

## Technical Stack

- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn-ui
- **State Management**: React Hooks
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Notifications**: Toast Components

## Project Structure

The project is organized into modular components:
- `Counter.tsx`: Handles counter logic and UI
- `RichTextEditor.tsx`: Implements text editing functionality
- `UserForm.tsx`: Manages user data collection
- Custom hooks and utilities for shared functionality

## Getting Started

```sh
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```