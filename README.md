# Bill J. — Data Entry Portfolio

A responsive, static portfolio presenting an entry-level data-entry work sample. The demo shows structured record entry, browser-based validation, and review of fictional records in a table.

## View the portfolio

Open `index.html` in a browser, or start a local server from the project folder:

```powershell
py -m http.server 8000
```

Then visit <http://localhost:8000>. Stop the server with `Ctrl+C`.

The project uses plain HTML, CSS, and JavaScript. It has no build step or package dependencies.

## Work sample

Select **Open the data-entry demo** on the home page to try the record form. The browser checks required fields and email format; valid entries appear in the sample table for the current page session.

**Privacy:** The demo does not send records to a server or save them. Use fictional information only. The sample names and email addresses are fictional.

## Project files

- `index.html` — portfolio home page
- `frompage.html` — interactive record-entry work sample
- `demo.js` — client-side validation feedback and in-memory table updates
- `stylesheets.css` — shared responsive styles
- `Bill J.jpg` — profile image
- `COMMANDS.md` — useful preview and Git commands

## Publish with GitHub Pages

1. Push this repository to GitHub.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Choose the `main` branch and `/ (root)` folder, then save.
5. After deployment completes, open the Pages URL shown in Settings.

No email, employment history, typing-speed figure, or office-software qualification is invented in this portfolio. Add accurate contact details and any verified qualifications or work history before using it for applications.
