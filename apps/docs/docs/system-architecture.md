# 🧠 4. System Architecture

This section outlines the high-level system architecture for WebForge—what components exist, how they interact, and how we plan to scale. We'll separate this into the **core MVP** setup and potential **future extensions**.

---

## 🚀 (MVP) Core Architecture

### 🔧 Components

- **Frontend (React / Next.js)**
  - Drag-and-drop website builder
  - Project dashboard and UI
  - Talks to the backend via REST API
  - Deployed on Vercel

- **Backend (Golang + Fiber or Gin)**
  - Handles APIs for projects, users, and exports
  - Stores project layouts and user data
  - Deployed on Fly.io or Railway

- **Database (PostgreSQL)**
  - Stores site layout JSON, user accounts, settings
  - Managed via Supabase or Railway

- **Storage (Local or S3-compatible)**
  - For uploaded assets like images and icons
  - Optional for MVP, can use file system or Supabase storage

### 🔁 Data Flow (Simplified)

1. User logs in or signs up (auth optional for MVP)
2. Frontend loads saved projects or initializes a new one
3. User builds using the drag-and-drop editor
4. Project is saved to the backend → stored in PostgreSQL as JSON
5. When exporting, backend generates static HTML/CSS and sends it back
6. Optionally, site is published via integration (e.g., Vercel deploy hook)

---

## 🔮 (Future) Additional Architecture

As WebForge grows, here are potential architectural additions to support new features and scale:

### 🧩 Planned Integrations

- **Authentication Layer**
  - Supabase Auth, Clerk, or Auth0
  - Enable team roles, invite flows, and permissions

- **Payment System**
  - Stripe integration for subscriptions or one-time payments
  - Webhooks for managing payment state

- **Analytics**
  - Embed Google Analytics or Plausible
  - Option to visualize basic metrics in the dashboard

- **Deployment Integration**
  - Trigger builds via Vercel, Netlify, or Cloudflare Pages API
  - Optionally deploy from backend or frontend

- **Realtime Collaboration (Stretch Goal)**
  - Live multi-user editing (WebSockets or CRDTs)
  - User cursors, lock-based editing, and chat

- **Export & Hosting Options**
  - Export to zip
  - Deploy to GitHub Pages, custom domains, or user-supplied hosting

---

## 🗺️ Diagram Recommendation

It’s helpful to accompany this section with a **high-level architecture diagram** showing:

- Frontend ↔ Backend (API)
- Backend ↔ DB + Storage
- Export flow
- Deployment flow

*Let me know if you'd like me to generate that for you!*

---

> The MVP is lightweight and fast. The future architecture is modular and scalable—designed to grow as the product does.
