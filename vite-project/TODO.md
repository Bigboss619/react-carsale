1. Agent registration code

SQL code
-- Agent can insert their own profile
create policy "Agents can insert own profile"
on agent_register
for insert
with check (auth.uid() = user_id);

-- Agent can read own profile
create policy "Agents can read own profile"
on agent_register
for select
using (auth.uid() = user_id);
