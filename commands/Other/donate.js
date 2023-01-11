const Command = require("../../classes/command.js");
const Embed = require("../../classes/embed.js");
const { translate } = require("../../utils/functions");

class Donate extends Command {
	constructor(client) {
		super(client, {
			name: "donate",
			aliases: [],
			botPermissions: ["sendMessages", "embedLinks"],
			helpOptions: {
				helpArg: false,
				noArgs: false
			},
			category: __dirname // eslint-disable-line
		});
	}

	async run(client, msg, data) {
		var donateEmbed = new Embed()
			.setTitle(await translate("other.donate.embed.title", msg.guild.language, { clientUsername: "UnoBot" }))
			.setDescription(
				`**${await translate("other.donate.embed.desc", msg.guild.language, {
					donateURL:
						"You can either donate at - https://paypal.me/coolaid01\nor, https://discord.gg/thestarship"
				})}**`
			)
			.setThumbnail(
				"https://cdn.discordapp.com/avatars/565305035592957954/77ec9d872558e6d45675ce67aa980608.png?size=512"
			);

		return await msg.channel.createMessage({ embeds: [donateEmbed] });
	}
}

module.exports = Donate;
