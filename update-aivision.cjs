const fs = require('fs');

const file = 'src/components/AIVisionSection.tsx';
let content = fs.readFileSync(file, 'utf8');

// I will insert floating geometries in the three.js scene.
// Search for `scene.add(spotLight2);` to append our floating geometries.

const oldCode = `    const spotLight2 = new THREE.SpotLight(0xaa7c11, 200);
    spotLight2.position.set(10, -5, -5);
    scene.add(spotLight2);`;

const newCode = `    const spotLight2 = new THREE.SpotLight(0xaa7c11, 200);
    spotLight2.position.set(10, -5, -5);
    scene.add(spotLight2);

    // Quantum Floating Geometries
    const floatingGroup = new THREE.Group();
    scene.add(floatingGroup);
    
    const quantumMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
      emissive: 0xd4af37,
      emissiveIntensity: 0.2
    });

    const geometries = [
      new THREE.IcosahedronGeometry(0.3, 0),
      new THREE.OctahedronGeometry(0.4, 0),
      new THREE.TetrahedronGeometry(0.5, 0),
      new THREE.DodecahedronGeometry(0.3, 0)
    ];

    const floaters = [];
    for (let i = 0; i < 40; i++) {
      const geom = geometries[Math.floor(Math.random() * geometries.length)];
      const mesh = new THREE.Mesh(geom, quantumMaterial.clone());
      
      // Random positions in a sphere around the center
      const radius = 3 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      mesh.position.set(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );

      // Random rotations
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      // Random velocities for quantum float
      const velocity = {
        rx: (Math.random() - 0.5) * 0.02,
        ry: (Math.random() - 0.5) * 0.02,
        rz: (Math.random() - 0.5) * 0.02,
        yOffset: Math.random() * Math.PI * 2,
        speed: 0.01 + Math.random() * 0.02
      };

      floaters.push({ mesh, velocity, baseY: mesh.position.y });
      floatingGroup.add(mesh);
    }
    
    // Core Quantum Sphere
    const coreGeom = new THREE.IcosahedronGeometry(1.2, 2);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      wireframe: true,
      transparent: true,
      opacity: 0.05,
      emissive: 0xd4af37,
      emissiveIntensity: 0.1
    });
    const coreMesh = new THREE.Mesh(coreGeom, coreMaterial);
    logoGroup.add(coreMesh);
`;

content = content.replace(oldCode, newCode);

const oldAnimate = `      // Rotate rings
      orbitalRing.rotation.z -= 0.002;
      orbitalRing2.rotation.z += 0.003;`;

const newAnimate = `      // Rotate rings
      orbitalRing.rotation.z -= 0.002;
      orbitalRing2.rotation.z += 0.003;

      // Animate floating geometries
      floaters.forEach(floater => {
        floater.mesh.rotation.x += floater.velocity.rx;
        floater.mesh.rotation.y += floater.velocity.ry;
        floater.mesh.rotation.z += floater.velocity.rz;
        
        floater.mesh.position.y = floater.baseY + Math.sin(time * 2 + floater.velocity.yOffset) * 0.2;
        
        // Quantum flicker
        if (Math.random() > 0.98) {
          floater.mesh.material.opacity = 0.5;
          floater.mesh.material.emissiveIntensity = 0.8;
        } else {
          floater.mesh.material.opacity += (0.1 - floater.mesh.material.opacity) * 0.1;
          floater.mesh.material.emissiveIntensity += (0.2 - floater.mesh.material.emissiveIntensity) * 0.1;
        }
      });
      
      coreMesh.rotation.y -= 0.001;
      coreMesh.rotation.x += 0.001;
      coreMesh.scale.setScalar(1 + Math.sin(time * 3) * 0.02);
      floatingGroup.rotation.y += 0.0005;`;

content = content.replace(oldAnimate, newAnimate);

fs.writeFileSync(file, content);
console.log('done fixing AIVision');
