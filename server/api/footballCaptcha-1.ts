import {FootballCaptchaHandler} from '#football-captcha'
import path from 'node:path'

const resolvePath = (value: string) => path.join(process.cwd(), value)

export default FootballCaptchaHandler({
  session: {
    name: 'football-captcha-cookie-name-1',
    serializeOptions: {},
    store: new Map(),
  },
  canvas: {
    objectsAreaPadding: {
      min: 0,
      max: 30,
    },
    width: 600,
    height: 600,
  },
  assets: {
    objects: {
      dir: resolvePath('./footballCaptchaAssets-1/objects'),
    },
    background: {
      dir: resolvePath('./footballCaptchaAssets-1/background'),
    },
    interactiveObjects: {
      dir: resolvePath('./footballCaptchaAssets-1/interactiveObjects'),
    }
  },
  generateAccessToken: () => Math.random().toString(16)
})
