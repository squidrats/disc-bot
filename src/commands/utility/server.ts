import { SlashCommandBuilder } from 'discord.js';
import type { CommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('server')
    .setDescription('Replies with info about the server')

export async function execute(interaction: CommandInteraction) {
    if (!interaction.guild) return
    await interaction.reply(`This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`)
}
