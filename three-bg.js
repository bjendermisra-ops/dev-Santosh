// ─── THREE.JS INTERACTIVE WEBGL HOLOGRAPHIC CORE ─────────────────
(function(){
  try {
    const container = document.getElementById('three-canvas-container');
    if(!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const interactiveGroup = new THREE.Group();
    scene.add(interactiveGroup);

    // Creative Holographic Core sphere wireframe
    const geometry = new THREE.IcosahedronGeometry(1.8, 2);
    const material = new THREE.MeshBasicMaterial({
      color: 0xff5e00,
      wireframe: true,
      transparent: true,
      opacity: 0.12
    });
    const sphere = new THREE.Mesh(geometry, material);
    interactiveGroup.add(sphere);

    // Dynamic digital orbital dust points
    const pointsGeometry = new THREE.BufferGeometry();
    const count = 280;
    const positions = new Float32Array(count * 3);
    for(let i=0; i<count*3; i+=3) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.0 + Math.random() * 0.4;
      positions[i] = r * Math.sin(phi) * Math.cos(theta);
      positions[i+1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i+2] = r * Math.cos(phi);
    }
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pointsMaterial = new THREE.PointsMaterial({
      size: 0.045,
      color: 0xffb700,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });
    const particleSystem = new THREE.Points(pointsGeometry, pointsMaterial);
    interactiveGroup.add(particleSystem);

    // Smooth Interactive Physics Rotations
    let targetX = 0, targetY = 0;
    let mouseX = 0, mouseY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    document.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX - windowHalfX) * 0.0004;
      mouseY = (e.clientY - windowHalfY) * 0.0004;
    });

    window.addEventListener('resize', () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    });

    function animate() {
      requestAnimationFrame(animate);

      sphere.rotation.y += 0.002;
      sphere.rotation.x += 0.001;
      particleSystem.rotation.y -= 0.0025;

      targetX += (mouseX - targetX) * 0.06;
      targetY += (mouseY - targetY) * 0.06;

      interactiveGroup.rotation.y = targetX * 1.8;
      interactiveGroup.rotation.x = targetY * 1.8;

      renderer.render(scene, camera);
    }
    animate();
  } catch (webglError) {
    console.warn("WebGL system is disabled or unsupported in this browser device: ", webglError);
  }
})();
