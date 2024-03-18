import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        buttonTextColor: 'var(--button-text-color)',
        siderBackground: 'var(--sider-background)',
        buttonHoverBackground: 'var(--button-hover-background)',
        buttonSelectedBackground: 'var(--button-selected-background)'
      }
    }
  }
}
