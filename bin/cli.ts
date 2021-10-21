#!/usr/bin/env node
import { Command } from 'commander'
import { CommandLoader } from '../commands'
import {
  loadLocalBinCommandLoader,
  localBinExists,
} from '../lib/utils/local-binaries'

const bootstrap = () => {
  const program = new Command()
  program
    .version(
      require('../package').version,
      '-v, --version',
      'Output the current version.'
    )
    .usage('<command> [options]')
    .helpOption('-h, --help', 'Output usage information.')

  if (localBinExists()) {
    const localCommandLoader = loadLocalBinCommandLoader()
    localCommandLoader.load(program)
  } else {
    CommandLoader.load(program)
  }

  program.parse(process.argv)

  if (!process.argv.slice(2).length) {
    program.outputHelp()
  }
}

bootstrap()
