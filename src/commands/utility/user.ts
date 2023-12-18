import { SlashCommandBuilder } from 'discord.js';
import type { CommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('user')
    .setDescription('Replies with user info')

export async function execute(interaction: CommandInteraction) {
    if (!interaction.member) return
    await interaction.reply(`This command was run by ${interaction.user.username}}.`)
}
