# Deploy Unseen Hunger

Use the Next.js app for production deployment.

## Easiest Path

1. Install GitHub Desktop if `git` is not installed on your PC.
2. Publish this folder to a new GitHub repository.
3. Create a Supabase project.
4. Run the SQL in `supabase/feedback.sql`.
5. Import the GitHub repo into Vercel.
6. Add these environment variables in Vercel:

```bash
ADMIN_TOKEN=choose-a-secret-admin-token
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
SUPABASE_FEEDBACK_TABLE=feedback_entries
```

7. Redeploy the project.
8. Test:
   - `/`
   - `/admin`
   - feedback form submission

## Important

- Do not deploy this on GitHub Pages if you want the feedback backend to work.
- Do not commit your real `ADMIN_TOKEN` or Supabase keys.
- The owner dashboard only works after `ADMIN_TOKEN` is set in the deployment environment.
- The live feedback system only works after the Supabase variables are set.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.
