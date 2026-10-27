# Key Commands for This Project

This is a static HTML, CSS, and JavaScript site, so there is no install or build command. Git does not preserve a complete history of commands typed in a terminal; the examples below are the useful commands for previewing and publishing this project, not a verified transcript of past shell history.

## Preview locally (PowerShell)

Run these commands from the project folder:

```powershell
py -m http.server 8000
```

Open <http://localhost:8000> in a browser. Stop the local server with `Ctrl+C`.

If the Python launcher is unavailable, open `index.html` directly in a browser. The local server is recommended for testing the site as a website.

## Check and publish changes with Git

```powershell
git status
git diff
git add README.md COMMANDS.md index.html frompage.html demo.js stylesheets.css
git commit -m "Complete data entry portfolio"
git push
```

Review `git status` and `git diff` before staging so only intended changes are included. If the repository uses a different default branch or remote setup, follow that repository's existing GitHub workflow.

## What these commands do

- `py -m http.server 8000` — serves the site locally on port 8000.
- `git status` — lists changed and staged files.
- `git diff` — reviews unstaged edits.
- `git add ...` — stages the named project files.
- `git commit -m "..."` — records staged changes with a message.
- `git push` — sends committed changes to the configured remote.
