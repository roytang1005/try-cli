import { Command } from 'commander'
import { Input } from '.'
import { AbstractCommand } from './abstract.command'

export class NewCommand extends AbstractCommand {
  public load(program: Command): void {
    program
      .command('new [name]')
      .alias('n')
      .description('Generate a application.')
      .option(
        '-d, --dry-run',
        'Report actions that would be performed without writing out results.'
      )
      .action(async (name: string, command: any) => {
        const options: Input[] = []
        options.push({ name: 'dry-run', value: !!command.dryRun })

        if (!!command.language) {
        }

        options.push({
          name: 'language',
          value: !!command.language ? command.language : 'ts',
        })

        const inputs: Input[] = []
        inputs.push({ name: 'name', value: name })

        await this.action.handle(inputs, options)
      })
  }
}
