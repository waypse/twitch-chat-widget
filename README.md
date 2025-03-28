# Custom Twitch Chat Widget for Miel Crapouille

## Overview
This is a custom Twitch chat widget built using Svelte. It was created to explore the process of developing and integrating a custom widget into StreamElements.

## Features
- Utilizes the StreamElements API for seamless integration.
- Requires compiled CSS, base HTML, and compiled JS for deployment.
- All assets (except SVGs) are encoded as Base64 for portability and ease of use.
- SVGs are converted to Svelte files for streamlined development.

## Installation and Usage
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/custom-twitch-chat-widget.git
   ```
2. Navigate to the project folder:

```bash
cd custom-twitch-chat-widget
```
3. Install dependencies:

```bash
npm install
```
4. Build the project:

```bash
npm run build
```
5. Use the compiled code in StreamElements:

- Copy the compiled CSS, base HTML, and compiled JS from the build directory.

- Paste them into the relevant sections of StreamElements.

## Requirements
Node.js (v14 or later)
Svelte

## Development Workflow
1. Run a development server:

```bash
npm run dev
```
2. Edit the Svelte components and other source files as needed.

3. Rebuild the project and deploy updates to StreamElements.

## Asset Guidelines
- Base64 Encoding: All non-SVG assets (e.g., images, fonts) should be encoded in Base64.

- SVG Handling: Convert SVG assets into Svelte files for easier management and integration.
