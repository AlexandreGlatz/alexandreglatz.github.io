import * as THREE from 'three'
import { readdirSync } from 'fs';
class ExplodedObject {
    /**
     * @param {string} name name of the object
     * @param {string} folderPath path to root folder of all meshes
     * @param {int} sceneIndex scene to render to
     * @param {int} distance distance to make at explode
     * @param {THREE.Vector3} direction direction of explode
     */
    constructor(name, folderPath, sceneIndex, distance, direction)
    {
        this.name = name;
        this.folderPath = folderPath;
        this.sceneIndex = sceneIndex;
        this.distance = distance;
        this.direction = direction;
        this.meshes = this.CreateExplodedMeshes(this.folderPath, this.sceneIndex);
        this.initPositions = [];
    }

    Spread()
    {
        for(let i = 0; i<this.meshes.length; ++i)
        {
            let current = 0;
            while(current <= distance)
            {
                this.meshes[i].scene.position += direction;
            }
        }
    }

    Retract()
    {
        for(let i = 0; i<this.meshes.length; ++i)
        {
            let current = distance;
            while(current >= distance)
            {
                this.meshes[i].scene.position -= direction;
            }
        }
    }

    CreateExplodedMeshes(folderPath, sceneIndex)
    {
        let meshes;
        const files = readdirSync(folderPath); 
        for(let i = 0; i<files.length; i++)
        {
            gltfLoader.load(folderPath + files[i], function(gltf) 
            {
                meshes[i] = gltf;
                scene[sceneIndex].add(gltf.scene);
            });
        }
        return meshes;
    
    }
    
}

export default ExplodedObject;