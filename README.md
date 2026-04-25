# Spiritual Gifts Assessment

Static React app that runs from a root `index.html` file on GitHub Pages and records completed results in Google Sheets.

## Files

- `index.html` - loads React, Babel, Lucide icons, and `app.jsx`
- `app.jsx` - the assessment app
- `google-apps-script/Code.gs` - Google Apps Script Web App endpoint for saving results to Google Sheets

## Google Sheet setup

1. Create a new Google Sheet.
2. Go to **Extensions > Apps Script**.
3. Delete the starter code and paste the full contents of `google-apps-script/Code.gs`.
4. Save the Apps Script project.
5. Click **Deploy > New deployment**.
6. Select **Web app**.
7. Set **Execute as** to **Me**.
8. Set **Who has access** to **Anyone**.
9. Click **Deploy** and authorize the script.
10. Copy the Web App URL.
11. In `app.jsx`, replace:

```js
const GOOGLE_SCRIPT_WEB_APP_URL = 'PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';
```

with your Web App URL.

## GitHub Pages setup

Upload `index.html` and `app.jsx` to your repo root. Then enable GitHub Pages for the repo branch that contains those files.
