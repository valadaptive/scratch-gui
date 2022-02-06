/* generated by pull.js */
const manifest = {
  "editorOnly": true,
  "name": "Debugger",
  "description": "Adds a new \"debugger\" window to the editor. Allows for logging into the \"Logs\" tab of the debugger window using the \"log\", \"warn\" and \"error\" blocks.",
  "credits": [
    {
      "name": "Tacodude7729",
      "link": "https://scratch.mit.edu/users/Tacodude7729/"
    },
    {
      "name": "GarboMuffin"
    },
    {
      "name": "GrahamSH"
    },
    {
      "name": "TheColaber"
    },
    {
      "name": "retronbv"
    }
  ],
  "userscripts": [
    {
      "url": "userscript.js"
    }
  ],
  "userstyles": [
    {
      "url": "style.css"
    }
  ],
  "settings": [
    {
      "dynamic": true,
      "name": "Clear logs on green flag",
      "id": "log_clear_greenflag",
      "type": "boolean",
      "default": false
    },
    {
      "dynamic": true,
      "name": "Log green flag clicks",
      "id": "log_greenflag",
      "type": "boolean",
      "default": false
    },
    {
      "dynamic": true,
      "name": "Log clone creation",
      "id": "log_clone_create",
      "type": "boolean",
      "default": false
    },
    {
      "dynamic": true,
      "name": "Log when max clones exceeded",
      "id": "log_failed_clone_creation",
      "type": "boolean",
      "default": true
    },
    {
      "dynamic": true,
      "name": "Log broadcasts",
      "id": "log_broadcasts",
      "type": "boolean",
      "default": false
    }
  ],
  "tags": [
    "beta"
  ],
  "enabledByDefault": false
};
export default manifest;
