/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BOT_URL: string
  readonly VITE_SITE_URL: string
  readonly VITE_GITHUB_APP_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
