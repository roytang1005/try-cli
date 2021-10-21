import { Command } from 'commander'
import { NewAction } from '../actions/new.action'
import { NewCommand } from './new.command'

export class CommandLoader {
  public static load(program: Command): void {
    new NewCommand(new NewAction()).load(program)
  }
}
