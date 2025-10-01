-- Create beta_signups table
CREATE TABLE public.beta_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.beta_signups ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public signup form)
CREATE POLICY "Anyone can insert beta signups"
ON public.beta_signups
FOR INSERT
WITH CHECK (true);

-- Create policy for admins to view all signups (you can adjust this later)
CREATE POLICY "Public read access for beta signups"
ON public.beta_signups
FOR SELECT
USING (true);

-- Create index on email for faster lookups
CREATE INDEX idx_beta_signups_email ON public.beta_signups(email);

-- Create index on created_at for sorting
CREATE INDEX idx_beta_signups_created_at ON public.beta_signups(created_at DESC);