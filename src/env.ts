import { z } from 'zod'
import { createEnv } from '@t3-oss/env-core'
import * as dotenv from 'dotenv'

if (typeof process !== 'undefined') {
    dotenv.config()
}


export const env = createEnv({
    server: {
        DISCORD_TOKEN: z.string(),
        DISCORD_CLIENT_ID: z.string(),
        DISCORD_GUILD_ID: z.string(),
    },
    clientPrefix: 'PUBLIC_',
    client: {},
    runtimeEnv: {
        NODE_ENV: process.env['NODE_ENV'] ?? 'development',
    },
    emptyStringAsUndefined: true,
});