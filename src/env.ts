import { z } from 'zod'
import { createEnv } from '@t3-oss/env-core'
import * as dotenv from 'dotenv'

if (typeof process !== 'undefined') {
    dotenv.config({ path: '.env.local' })
}


export const env = createEnv({
    server: {
        DISCORD_TOKEN: z.string(),
        DISCORD_CLIENT_ID: z.string(),
        DISCORD_GUILD_ID: z.string(),
        NODE_ENV: z.string().optional(),
    },
    clientPrefix: 'PUBLIC_',
    client: {},
    runtimeEnv: {
        NODE_ENV: process.env['NODE_ENV'] ?? 'development',
        DISCORD_TOKEN: process.env['DISCORD_TOKEN'],
        DISCORD_GUILD_ID: process.env['DISCORD_GUILD_ID'],
        DISCORD_CLIENT_ID: process.env['DISCORD_CLIENT_ID'],
    },
    emptyStringAsUndefined: true,
});
