import { Engine } from "@babylonjs/core/Engines/engine";
import { DefaultRenderingPipeline } from "@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline";
import { Scene } from "@babylonjs/core/scene";

await new Promise(resolve => window.onload = resolve);

const canvas = document.createElement("canvas");
const engine = new Engine(canvas);
const scene = new Scene(engine);
new DefaultRenderingPipeline("default", true, scene);

scene.dispose();
engine.dispose();
