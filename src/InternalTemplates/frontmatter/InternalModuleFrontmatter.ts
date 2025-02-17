import { InternalModule } from "../InternalModule";

export class InternalModuleFrontmatter extends InternalModule {
    name = "frontmatter";

    async createStaticTemplates() {}

    async updateTemplates() {
        let cache = this.app.metadataCache.getFileCache(this.file)
        this.dynamic_templates = new Map(Object.entries(cache.frontmatter || {}));
    }
}