import { existsSync } from 'fs'
import { join, posix } from 'path'
import { CommandLoader } from '../../commands'

const localBinPathSegments = [process.cwd(), 'node_modules', '@try', 'cli']

export function localBinExists() {
  return existsSync(join(...localBinPathSegments))
}

export function loadLocalBinCommandLoader(): typeof CommandLoader {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const commandFile = require(posix.join(...localBinPathSegments, 'commands'))
  return commandFile.CommandLoader
}