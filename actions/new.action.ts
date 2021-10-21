import { AbstractAction } from './abstract.action'

export class NewAction extends AbstractAction {
  public handle(): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
