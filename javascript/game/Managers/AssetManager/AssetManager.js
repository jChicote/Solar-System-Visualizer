import { ObjectValidator } from "../../../utils/ObjectValidator.js";
import { ShaderLoader } from "./Loaders/ShaderLoader.js";
import { TextureLoader } from "three/build/three.module.js";
import { VisualiserConfiguration } from "../../../../main.js";

class AssetManager {
    constructor() {
        // Fields
        this.gameConfiguration = VisualiserConfiguration();

        // Components
        this.shaderLoader = new ShaderLoader();
        this.textureLoader = new TextureLoader();

        // Resources
        this.shaderAssets = [];
        this.textureAssets = [];
    }

    async PreLoadAssets() {
        const materialConfigurations = this.gameConfiguration.materialConfigurations;
        for (const configuration of materialConfigurations) {
            await this.shaderLoader.LoadMaterialShader(configuration).then((shaderAsset) => {
                if (ObjectValidator.IsValid(shaderAsset)) {
                    this.shaderAssets.push(shaderAsset);
                }
            });

            await this.textureLoader.LoadTextures(configuration).then((textureAsset) => {
                if (ObjectValidator.IsValid(textureAsset)) {
                    this.textureAssets.push(textureAsset);
                }
            });
        }
    }

    GetResources() {
        return {
            shaders: this.shaderAssets,
            textures: this.textureAssets
        };
    }
}

export { AssetManager };
