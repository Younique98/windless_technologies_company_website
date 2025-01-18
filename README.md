

```markdown
# Windless Technologies

A modern landing page for a specialized iPhone app development service, targeting non-technical founders and startups. Built with Next.js 14 and modern web technologies, this platform showcases our 90-day development process and fixed-price MVP solutions.

## Tech Stack

- Frontend Framework: Next.js 14 (with App Router)
- Language: TypeScript
- Styling: Tailwind CSS + shadcn/ui
- Development Server: Vercel
- Form Handling: Typeform Integration

## Prerequisites
Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- npm or yarn
- Git

### Getting Started

1. Clone the repository
```bash
git clone https://github.com/yourusername/windless-technologies.git
cd windless-technologies
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Set up environment variables
Create a .env.local file in the root directory and add the following:
```env
# Typeform
NEXT_PUBLIC_TYPEFORM_ID="your-typeform-id"

# Google Analytics (optional)
NEXT_PUBLIC_GA_ID="your-ga-id"
```

4. Run the development server
```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

### Project Structure
```bash
windless-technologies/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Landing page
│   │   ├── layout.tsx         # Root layout
│   │   └── loading.tsx        # Loading state
│   ├── components/            # React components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── shared/           # Shared components
│   │   └── sections/         # Page sections
│   ├── lib/                  # Utility functions
│   │   ├── utils/           # Helper functions
│   │   └── types/           # TypeScript types
│   └── styles/              # Global styles
├── public/                  # Static files
└── package.json

```

## Key Features
Our landing page includes the following main sections:

- Hero Section with clear value proposition
- 90-day development timeline
- Service pricing and features
- Consultation booking integration
- Optional web development offering
- Mobile-responsive design

## Development
- Utilizing Next.js 14 for optimal performance
- shadcn/ui components for consistent UI elements
- Tailwind CSS for modern styling
- TypeScript for type safety
- Vercel for deployment and analytics

### Deployment
The application can be deployed on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgments
- Built with shadcn/ui components
- Powered by Next.js
- Deployed on Vercel
```
