# Tab-Title-Picker-Chrome-Extension
This Chrome extension allows you to quickly fetch and display the title of the current tab with a single click from the extension popup. It's lightweight, simple to use, and has a sleek design.

Features
Fetches the title of the active tab with one click.
Clean and attractive popup UI with a responsive button.
Includes extension icons to enhance appearance.
Folder Structure
bash
Copy code
TabTitleExtension/
│
├── manifest.json         # Configuration file for the extension.
├── popup.html            # HTML content for the popup.
├── popup.js              # JavaScript logic to fetch the tab title.
├── icons/                # Folder containing the extension icons.
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
Setup and Installation
Step 1: Clone or Download the Repository
bash
Copy code
git clone <repository-url>
cd TabTitleExtension
Step 2: Load the Extension into Chrome
Open Google Chrome.
Navigate to chrome://extensions/.
Enable Developer Mode (toggle in the top-right corner).
Click "Load unpacked".
Select the folder TabTitleExtension.
How to Use the Extension
After installation, you’ll see the Tab Title Picker icon in the Chrome toolbar.
Click the extension icon to open the popup.
Press the "Get Tab Title" button.
The title of the current tab will appear in the popup.
Customization
Change Icons:
Replace the PNG files in the icons/ folder with your own icons.
Ensure the sizes are:
16x16 pixels (icon16.png)
48x48 pixels (icon48.png)
128x128 pixels (icon128.png)
Preview

Technical Overview
Manifest Version: 3 (latest Chrome extension standard).
Permissions Used:
tabs: Allows the extension to read the currently active tab's information.
Core Logic:
The popup.js script queries the active tab using chrome.tabs.query and displays the title within the popup.
Contributing
Feel free to open issues or submit pull requests to enhance the extension.

License
This project is licensed under the MIT License. You are free to use, modify, and distribute the extension with proper attribution.