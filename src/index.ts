import { Bot } from 'mineflayer'
import { Tool } from './Tool'
import { pathfinder } from 'mineflayer-pathfinder'

export function plugin (bot: Bot): void {
  // TODO Replace this with loadPlugin when redundancy protection is in
  setTimeout(() => {
    // @ts-expect-error
    if (bot.pathfinder == null) {
      bot.loadPlugin(pathfinder)
    }
  }, 0)

  // @ts-expect-error
  bot.tool = new Tool(bot)
}

export { MiningEquipOptions } from './Tool'
export { Tool } from './Tool'
