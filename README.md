# AudioSmith v2 🎙️

A comprehensive AI-powered audio therapy and journaling platform built with React, TypeScript, and Firebase. AudioSmith v2 combines multiple AI services to provide users with interactive dialogue, monologue, and journaling experiences for mental health and personal development.

## ✨ Features

### 🗣️ AI Dialogue Systems
- **OpenAI Dialogue**: Real-time conversations with OpenAI's GPT models
- **ElevenLabs Integration**: High-quality text-to-speech with natural voice synthesis
- **Hume AI Voice**: Advanced voice AI interactions and analysis
- **Multi-language Support**: Built-in translation capabilities for global accessibility

### 📝 Journaling & Content Creation
- **Type Journal**: Text-based journaling with AI assistance
- **Voice Journal**: Audio recording and transcription
- **Chat Journal**: Conversational journaling experience
- **Entry Management**: Organize and categorize your thoughts

### 🎯 Therapy & Wellness
- **Personalized Sessions**: Customizable therapy session types
- **Progress Tracking**: Monitor your mental health journey
- **Gamification**: Daily streaks and achievement system
- **Voice Settings**: Customize voice preferences for comfort

### 🔐 Authentication & Security
- **Firebase Authentication**: Secure user management
- **Profile Management**: Customize language, voice, and therapy preferences
- **Data Privacy**: Secure storage and handling of personal information

### 📱 Modern UI/UX
- **Responsive Design**: Works seamlessly on all devices
- **Chakra UI**: Beautiful, accessible component library
- **Dark/Light Themes**: Customizable visual experience
- **Interactive Elements**: Engaging charts, calendars, and visualizations

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Firebase account
- API keys for AI services (OpenAI, ElevenLabs, Hume AI)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd audiosmithv2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory with your API keys:
   ```env
   REACT_APP_OPENAI_API_KEY=your_openai_key
   REACT_APP_ELEVENLABS_API_KEY=your_elevenlabs_key
   REACT_APP_HUME_API_KEY=your_hume_key
   REACT_APP_GOOGLE_TRANSLATE_API_KEY=your_google_key
   ```

4. **Firebase Configuration**
   Update `src/firebase.js` with your Firebase project credentials:
   ```javascript
   const firebaseConfig = {
     apiKey: "your_api_key",
     authDomain: "your_project.firebaseapp.com",
     projectId: "your_project_id",
     storageBucket: "your_project.appspot.com",
     messagingSenderId: "your_sender_id",
     appId: "your_app_id",
     measurementId: "your_measurement_id"
   };
   ```

5. **Start the development server**
   ```bash
   npm start
   ```

6. **Build for production**
   ```bash
   npm run build
   ```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── calendar/       # Calendar components
│   ├── card/          # Card-based UI elements
│   ├── charts/        # Data visualization
│   ├── fields/        # Form input components
│   ├── navbar/        # Navigation components
│   └── sidebar/       # Sidebar navigation
├── contexts/           # React context providers
├── layouts/            # Page layout components
│   ├── admin/         # Admin dashboard layout
│   └── auth/          # Authentication layout
├── views/              # Main application views
│   ├── admin/         # Admin dashboard views
│   ├── auth/          # Authentication views
│   ├── Chat/          # Chat functionality
│   ├── Dialogue/      # AI dialogue systems
│   ├── Dialogue11labs/ # ElevenLabs integration
│   ├── DialogueHume/  # Hume AI integration
│   ├── monologue/     # Monologue features
│   ├── OpenAIDialogue/ # OpenAI integration
│   └── Type/          # Type-based journaling
├── theme/              # UI theme configuration
├── types/              # TypeScript type definitions
└── variables/          # Global variables and constants
```

## 🔧 Technologies Used

### Frontend
- **React 18.3.1** - Modern React with hooks and concurrent features
- **TypeScript 4.7.4** - Type-safe JavaScript development
- **Chakra UI 2.6.1** - Accessible component library
- **React Router 6.25.1** - Client-side routing
- **Framer Motion 11.3.7** - Animation library

### AI & Voice Services
- **OpenAI API** - GPT models for natural language processing
- **ElevenLabs** - High-quality text-to-speech
- **Hume AI** - Voice AI and emotion analysis
- **Deepgram** - Speech-to-text capabilities
- **Google Translate** - Multi-language support

### Backend & Database
- **Firebase** - Authentication, Firestore, and Storage
- **Express** - Backend API framework
- **Node.js** - JavaScript runtime

### Development Tools
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting
- **Jest** - Testing framework
- **Webpack** - Module bundling

## 📱 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run test suite
- `npm run eject` - Eject from Create React App
- `npm run deploy` - Deploy to GitHub Pages

## 🌐 Deployment

### Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init`
4. Deploy: `firebase deploy`

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy: `npm run deploy`

## 🔒 Security Considerations

- API keys are stored in environment variables
- Firebase security rules protect user data
- Authentication required for protected routes
- HTTPS enforced in production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the GitHub repository
- Contact the development team
- Check the documentation and FAQ

## 🔮 Roadmap

- [ ] Enhanced AI therapy sessions
- [ ] Mobile app development
- [ ] Advanced analytics dashboard
- [ ] Integration with health platforms
- [ ] Multi-user therapy groups
- [ ] Advanced voice customization

---

**AudioSmith v2** - Empowering mental wellness through AI-powered audio therapy and journaling. 🧠✨
