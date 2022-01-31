{
  "name": "ven-earth",
  "description": "My personal website.",
  "homepage": "https://ven.earth",
  "repository": "github:ven/ven-earth",
  "version": "1.0.0",
  "private": true,
  "author": "ven <v@ven.earth>",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
    "start": "next start -p $PORT",
    
    "heroku-postbuild": "npm run build",
  },
  "license": "MIT",
  "dependencies": {
    // "@fortawesome/fontawesome-svg-core": "^1.2.32",
    // "@fortawesome/free-brands-svg-icons": "^5.15.1",
    // "@fortawesome/free-regular-svg-icons": "^5.15.1",
    // "@fortawesome/free-solid-svg-icons": "^5.15.1",
    // "@fortawesome/pro-duotone-svg-icons": "^5.15.1",
    // "@fortawesome/pro-regular-svg-icons": "^5.15.1",
    // "@fortawesome/react-fontawesome": "^0.1.14",
    "@mapbox/rehype-prism": "0.6.0",
    "@mdx-js/loader": "^1.6.22",
    "@next/mdx": "^11.0.1",
    "dayjs": "^1.10.6",
    "framer-motion": "^4.1.17",
    "gray-matter": "^4.0.2",
    "next": "^11.1.1",
    "next-mdx-remote": "^3.0.2",
    "next-themes": "^0.0.10",
    "nprogress": "^0.2.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-fade-in": "^2.0.1",
    "react-hot-toast": "^1.0.1",
    "react-tweet-embed": "^1.2.2",
    "react-use": "^17.2.4",
    "reading-time": "^1.2.1",
    "remark-autolink-headings": "^6.0.1",
    "remark-code-titles": "0.1.2",
    "remark-slug": "^6.0.0",
    "swr": "^0.3.11",
    "use-last-fm": "^0.6.0",
    "use-sound": "^2.0.1",
    "uuid": "^8.3.2"
  },
  "devDependencies": {
    "@tailwindcss/typography": "^0.4.1",
    "@types/node": "^14.14.16",
    "@types/nprogress": "^0.2.0",
    "@types/react": "^17.0.0",
    "@types/react-fade-in": "^0.1.0",
    "@types/uuid": "^8.3.0",
    "@types/webpack-env": "^1.16.0",
    "autoprefixer": "^10.2.6",
    "eslint": "^7.29.0",
    "eslint-config-next": "^11.0.1",
    "eslint-config-prettier": "^8.3.0",
    "postcss": "^8.3.5",
    "prettier": "^2.3.2",
    "rehype": "^11.0.0",
    "tailwindcss": "^2.2.4",
    "typescript": "^4.3"
  }
}