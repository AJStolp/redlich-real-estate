-- Create agents table (for multiple agents in the future)
CREATE TABLE IF NOT EXISTS agents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create form_submissions table
CREATE TABLE IF NOT EXISTS form_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  agent_id UUID REFERENCES agents(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_form_submissions_agent_id ON form_submissions(agent_id);
CREATE INDEX IF NOT EXISTS idx_form_submissions_created_at ON form_submissions(created_at DESC);

-- Insert Brian Redlich as the first agent
INSERT INTO agents (name, email)
VALUES ('Brian Redlich', 'brian@example.com') -- UPDATE THIS EMAIL
ON CONFLICT (email) DO NOTHING;

-- Enable Row Level Security (RLS)
ALTER TABLE agents ENABLE ROW LEVEL SECURITY;
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies to allow inserts from the public (for the form)
CREATE POLICY "Allow public form submissions"
  ON form_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow agents to read their own submissions (for future dashboard)
CREATE POLICY "Agents can view their own submissions"
  ON form_submissions
  FOR SELECT
  USING (auth.uid() IN (SELECT id FROM agents WHERE email = auth.email()));

-- Create policy for agents to view their own profile
CREATE POLICY "Agents can view their own profile"
  ON agents
  FOR SELECT
  USING (auth.uid() = id OR email = auth.email());
