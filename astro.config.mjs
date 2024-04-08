import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
	
    site: "https://rodririobo.github.io",
    base: "/blog",
	integrations: [mdx(), sitemap()],
	output: "hybrid",
	adapter: node({
		mode: "standalone"
	})
});
