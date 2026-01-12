# Brian Redlich - Real Estate Landing Page

A sleek, modern one-page website for real estate agent Brian Redlich with integrated form submissions to Supabase.

## Features

- Modern, responsive design with Tailwind CSS
- Hero section with call-to-action
- Services/benefits section
- Contact form with Supabase integration
- Form submissions stored in database for scalability

## Tech Stack

- **Vue 3** - Frontend framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Supabase** - Database for form submissions
- **Bun** - Package manager

## Setup Instructions

### 1. Install Dependencies

```bash
bun install
```

### 2. Set Up Supabase

#### a. Create/Use Your Supabase Project
- Go to [supabase.com](https://supabase.com)
- Create a new project or use your existing one

#### b. Run the Database Schema
- Open the Supabase dashboard
- Go to SQL Editor
- Copy the contents of `supabase-schema.sql`
- **IMPORTANT:** Update Brian's email in the SQL file before running:
  ```sql
  INSERT INTO agents (name, email)
  VALUES ('Brian Redlich', 'brian@example.com') -- UPDATE THIS EMAIL
  ```
- Run the SQL

#### c. Get Your API Credentials
- In Supabase dashboard, go to Settings > API
- Copy your **Project URL**
- Copy your **anon/public key**

### 3. Configure Environment Variables

Create a `.env.local` file in the project root:

```bash
VITE_SUPABASE_URL=your-project-url.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### 4. Run Development Server

```bash
bun run dev
```

Visit [http://localhost:5173](http://localhost:5173)

## Database Schema

### Tables

**agents**
- `id` (UUID) - Primary key
- `name` (TEXT) - Agent name
- `email` (TEXT) - Agent email (unique)
- `created_at` (TIMESTAMP) - Creation timestamp

**form_submissions**
- `id` (UUID) - Primary key
- `agent_id` (UUID) - Foreign key to agents table
- `name` (TEXT) - Submitter name
- `email` (TEXT) - Submitter email
- `phone` (TEXT) - Submitter phone (optional)
- `message` (TEXT) - Message content
- `created_at` (TIMESTAMP) - Submission timestamp

## Viewing Form Submissions

### Option 1: Supabase Dashboard (Quick View)
1. Go to your Supabase dashboard
2. Click on "Table Editor"
3. Select `form_submissions` table
4. View all submissions with filters and search

### Option 2: Export to CSV/Excel
1. In Supabase dashboard, go to Table Editor
2. Click the three dots menu
3. Export as CSV
4. Open in Excel or Google Sheets

### Option 3: Build a Dashboard (Future)
You can build a custom dashboard where agents log in to see their leads:
- Filter by date range
- Search submissions
- Export data
- Email notifications for new leads

## Scaling to Multiple Agents

This architecture is ready for multiple agents:

1. **Add New Agent:**
   ```sql
   INSERT INTO agents (name, email)
   VALUES ('New Agent Name', 'agent@email.com');
   ```

2. **Clone This Site:**
   - Duplicate the project folder
   - Update the agent name in `App.vue` (line 179):
     ```js
     .eq('name', 'New Agent Name')
     ```
   - Deploy separately

3. **Future Multi-Tenant Approach:**
   - Single codebase with URL routing (e.g., `yoursite.com/brian-redlich`)
   - Dynamic agent loading based on URL
   - Centralized dashboard for all agents

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Deploy!

## Build for Production

```bash
bun run build
```

Preview production build:
```bash
bun run preview
```

## License

All rights reserved © 2026 Brian Redlich
