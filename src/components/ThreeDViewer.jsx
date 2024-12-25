import React, { useEffect, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const ThreeDViewer = ({ path, texturePath }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Initialize Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable transparency
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Set the clear color to transparent
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;

    // Add Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // Load Texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("/assets/images/3d/shoe/Puma_Shoe_Texture.jpg", () => {
      texture.wrapS = THREE.RepeatWrapping; // Ensure texture wraps correctly
      texture.wrapT = THREE.RepeatWrapping;
    });

    // Load OBJ Model
    const loader = new OBJLoader();
    loader.load(
      path, // Replace with the correct path to your model
      (obj) => {
        // Normalize model scale (set a larger scale factor)
        obj.scale.set(2, 2, 2); // Increase scale to make the model larger

        // Normalize model rotation (set a fixed rotation)
        obj.rotation.set(0, Math.PI / 2, 0); // Set the desired orientation (facing forward)

        // Apply the texture to the model's material
        obj.traverse((child) => {
          if (child.isMesh) {
            child.material.map = texture; // Apply the texture to the model
            child.material.needsUpdate = true;
          }
        });

        // Add the model to the scene
        scene.add(obj);

        // Recalculate bounding box after scaling
        const box = new THREE.Box3().setFromObject(obj);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        // Adjust the camera distance based on the model's size
        camera.position.set(center.x, center.y, size.length() * 0.8); // Adjust the multiplier as needed
        camera.lookAt(center);
      },
      undefined,
      (error) => {
        console.error("An error occurred while loading the model:", error);
      }
    );

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Update controls (for smooth damping)
      renderer.render(scene, camera);
    };
    animate();

    // Handle Cleanup
    return () => {
      renderer.dispose();
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [path, texturePath]);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
};

export default ThreeDViewer;
