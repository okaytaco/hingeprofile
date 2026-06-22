# 💘 AI Dating Profile Coach

An AI-powered dating profile generator that *interviews* you before writing a single word. Instead of asking you to describe yourself, it learns who you are through natural conversation — then crafts a Hinge profile that actually sounds like you.

---

## 🧠 The Core Idea

Most AI profile generators ask you to fill in a form. This one doesn't.

The platform runs a conversational onboarding interview, gradually building a structured personality model from your responses. Only once it understands your humor, lifestyle, values, and communication style does it generate prompt answers, a bio, and photo suggestions — all tailored specifically to you.

---

## ✨ Features

- **AI Interview Engine** — Conversational onboarding that asks natural questions instead of Hinge prompts directly
- **Dynamic Question Engine** — Tracks what it already knows; only asks what's missing
- **Personality Confidence System** — Each trait gets a confidence score; interview ends automatically when thresholds are met
- **Prompt Library with Metadata** — Every Hinge prompt tagged with the personality traits needed to answer it well
- **Structured Personality Extraction** — Converts raw conversation into a typed personality profile (humor, lifestyle, hobbies, relationship goals, etc.)
- **Prompt Recommendation Engine** — Selects the Hinge prompts that best match your personality
- **Authentic Prompt Answer Generator** — Writes answers grounded in your actual profile, not generic templates
- **Bio + Tagline Generator** — Produces a complete bio section from your personality data
- **Photo Suggestion Engine** — Recommends photo types based on your lifestyle (gym shots, travel pics, pet photos, etc.)
- **Hinge-style Profile Preview** — See exactly how your profile looks before copying it over
- **Streaming AI Responses** — Smooth, real-time chat experience via Vercel AI SDK

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS, shadcn/ui, Framer Motion |
| State | Zustand |
| Forms | React Hook Form |
| Data Fetching | TanStack Query |
| Auth | Clerk |
| Database | MongoDB Atlas + Mongoose |
| AI | GPT-4o via Vercel AI SDK |
| Deployment | Vercel |

---

## 🔄 Product Flow

```
User Signs Up
    ↓
AI Interview (natural conversation)
    ↓
Personality Extraction Agent
    ↓
Prompt Recommendation Engine
    ↓
Answer Generator + Bio Generator + Photo Suggestions
    ↓
Profile Composer
    ↓
Hinge-style Preview → Copy / Export
```

---

## 🤖 AI Pipeline

The system runs a 7-step pipeline:

1. **Interview Agent** — Conducts the conversation, builds context, stores history
2. **Personality Extraction Agent** — Converts conversation → structured JSON profile
3. **Prompt Recommendation Engine** — Matches personality traits to the best-fit Hinge prompts
4. **Prompt Answer Generator** — Writes personalized answers per selected prompt
5. **Bio Generator** — Creates bio, description, and tagline from the personality profile
6. **Photo Recommendation Engine** — Suggests photo types based on lifestyle data
7. **Profile Composer** — Assembles everything into a single renderable profile object

---

## 📦 MongoDB Collections

```
Users
InterviewSessions
Messages
PersonalityProfiles
GeneratedProfiles
PromptLibrary
PhotoSuggestions
Feedback
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- MongoDB Atlas cluster
- OpenAI API key
- Clerk account

### Installation

```bash
git clone https://github.com/your-username/hingeprofile.git
cd hingeprofile
npm install
```

### Environment Variables

Create a `.env.local` file:

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# MongoDB
MONGODB_URI=

# OpenAI
OPENAI_API_KEY=
```

### Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 🛣️ Roadmap

- [ ] AI Photo Rating & Ranking
- [ ] AI Conversation Coach (post-match)
- [ ] AI Profile Roast Mode
- [ ] Weekly Profile Refresh
- [ ] Multi-app support (Bumble, Tinder, etc.)
- [ ] AI Match Prediction
- [ ] Vision model integration for photo scoring

---

## 🏛️ Architecture

```
Next.js Frontend
      ↓
Next.js Route Handlers (Backend)
      ↓
MongoDB Atlas          OpenAI API
```

The frontend never communicates directly with the LLM — all AI calls are proxied through the backend.

---

## 📄 License

MIT