import { VisualiserManager } from "../../../main.js";
import { AsteroidObserver } from "../../shared/Observers/AsteroidObserver.js";
import { Asteroid } from "../Entities/Asteroid.js";

class AsteroidManager {
    constructor(serviceProvider) {
        this.asteroids = [];

        this.asteroidObserver = serviceProvider.GetService(AsteroidObserver);
        this.asteroidObserver.Subscribe("GetAsteroids", this.CreateAsteroids.bind(this));
    }

    CreateAsteroids(asteroids) {
        for (const asteroid of asteroids) {
            this.asteroids.push(new Asteroid(asteroid));
            break;
        }

        return this.asteroids;
    }

    UpdateAsteroids() {
        if (!VisualiserManager().gameState.isPaused) {
            for (const asteroid of this.asteroids) {
                asteroid.Update();
            }
        }
    }
}

export { AsteroidManager };
