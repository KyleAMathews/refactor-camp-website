import Typography from 'typography'
import theme from 'typography-theme-stow-lake'

const options = {
  baseFontSize: '18px',
  baseLineHeight: '27px',
  headerFontFamily: [
    'Avenir Next',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['georgia', 'serif'],
  bodyWeight: 300,
  headerWeight: 600,
  boldWeight: 600,
}

theme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h1,h2,h3,h4,h5,h6': {
    marginBottom: rhythm(1),
    marginTop: 0,
  }
})

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
