/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Couleurs de base
        'dark-nav': '#020617',
        'primary-dark': '#020E1E',
        'dark-bgBody': '#020E1E',
        'blue-prgrs':'#0E3761',
        'blue-prgrs-2':'#165173',
        
        // Couleurs pour le texte
        'text-primary': '#ffffff',
        'text-secondary': '#a0a0c0',
        'text-light': '#b0c4de',
        
        // Couleurs d'accentuation
        'accent': '#ffd700',
        'accent-yellow': '#FFFB2C',
        
        // Couleurs pour boutons
        'button-bg': '#3b5cb0',
        'button-hover': '#4a6cd5',
        'purple-button': '#7239AB',
        
        // Couleurs pour bordures
        'purple-clr': '#805BB2',
        
        // Couleurs d'espace/thème
        'space-dark': '#0b1120',
        'space-medium': '#121c2e',
        'space-light': '#2a3b5c'
      },
      
      // Configuration des ombresshadow-[inset_0_0_4px_0_rgba(128,91,178,0.3)]
      boxShadow: {
        'purple-natural': 'inset_0_0_4px_0_rgba(128,91,178,0.3)',
        'purple-glow': '0 0 20px 5px #805BB2',
        'purple-glow-hover': '0 0 25px 8px #805BB2'
      }
      ,
      // Configuration des bordures (hérite automatiquement des couleurs)
      borderColor: theme => ({
        ...theme('colors'), // Hérite toutes les couleurs
        DEFAULT: theme('colors.space-light', '#2a3b5c') // Bordure par défaut
      }),
      
      // Configuration des polices
      fontFamily: {
        pixel: ['"pixelfont"', 'cursive'],
        press: ['"pixelfont2"', 'cursive']
      },
      
      // Tailles de texte personnalisées
      fontSize: {
        'px-16': ['16px', { lineHeight: '26px' }],
        'px-18': ['18px', { lineHeight: '28px' }],
        'px-20': ['20px', { lineHeight: '20px' }],
        'px-21': ['21px', { lineHeight: '30px' }],
        'px-28': ['28px', { lineHeight: '32px' }],
        'px-36': ['36px', { lineHeight: '40px' }],
        'px-48': ['48px', { lineHeight: '48px' }],
        'px-64': ['64px', { lineHeight: '70.4px' }], // 1.1 × 64px
      }
    },
  },
  plugins: [],
}