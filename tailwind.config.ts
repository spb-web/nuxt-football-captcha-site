import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const extractColorVars = (colorObj, colorGroup = ''): [string, string][] => {
  return Object.keys(colorObj).flatMap((colorKey) => {
    const value = colorObj[colorKey];

    if (typeof value === 'string') {
      return [[`${colorGroup}-${colorKey}`, value]]
    }

    return extractColorVars(value, `${colorKey}`);
  }, {});
}

export default <Partial<Config>>{
    theme: {
      extend: {
        colors: {
            primary: {
                50: 'rgb(217,229,255)',
                100: 'rgb(179,203,255)',
                200: 'rgb(141,176,255)',
                300: 'rgb(102,150,255)',
                400: 'rgb(64,124,255)',
                500: 'rgb(26,98,255)',
                600: 'rgb(0,71,225)',
                700: 'rgb(0,53,169)',
                800: 'rgb(0,35,112)',
                900: 'rgb(0,18,56)',
            },
            gray: {
                50: 'rgb(250,250,250)',
                100: 'rgb(244,244,245)',
                200: 'rgb(228,228,231)',
                300: 'rgb(212,212,216)',
                400: 'rgb(161,161,170)',
                500: 'rgb(113,113,122)',
                600: 'rgb(82,82,91)',
                700: 'rgb(63,63,70)',
                800: 'rgb(39,39,42)',
                900: 'rgb(24,24,27)',
                950: 'rgb(9,9,11)',
            },
            indigoblue: {
              400: '#407cff',
              600: '#0047e1',
            }
        },
    },
  },
  plugins: [
    plugin(function({ addUtilities, theme, config, e }) {
      const borderGradientSizeUtilities = [1, 2, 4, 8].map((value) => {
        return {
          [`.${e(`gradient-border-${value}`)}`]: {
              border: `${value}px solid transparent`
          }
        }
      })
      addUtilities(borderGradientSizeUtilities)

      const borderGradientColorUtilities = extractColorVars(theme('colors'))
        .map(([colorKey, colorValue]) => {
          return {
            [`.${e(`border-gradient-br-teal-${colorKey}`)}`]: {
              backgroundImage: `linear-gradient(90deg,${colorValue},${colorValue}),linear-gradient(to bottom right,#14b8a6,#407cff)`,
              backgroundClip: 'padding-box,border-box',
              backgroundOrigin: 'padding-box,border-box',
            }
          }
        })
      
  
      addUtilities(borderGradientColorUtilities)
    })
  ]
}