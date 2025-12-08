import { useEffect, useRef } from 'react';
import { CanvasContainer } from './index.styles';

export const ThreeCanvas = () => {
  const canvasRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const THREE = window.THREE;
    if (!THREE) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const canvasContainer = canvas.parentElement;
    if (!canvasContainer) return;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      canvasContainer.offsetWidth / canvasContainer.offsetHeight,
      0.1,
      1000
    );
    
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    
    renderer.setSize(
      canvasContainer.offsetWidth,
      canvasContainer.offsetHeight,
    );
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    camera.position.z = 10;

    const sphereRadius = 4;
    const geometry = new THREE.SphereGeometry(sphereRadius, 64, 64);

    const originalPositions = geometry.attributes.position.clone();
    const normals = geometry.attributes.normal.clone();

    const material = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const colors = [];
    const color = new THREE.Color();
    const positions = geometry.attributes.position;

    for (let i = 0; i < positions.count; i++) {
      const y = positions.getY(i);
      const darkBlue = new THREE.Color(0x1e3a8a);
      const brightCyan = new THREE.Color(0x00ffff);
      const ratio = (y + sphereRadius) / (sphereRadius * 2);
      color.lerpColors(darkBlue, brightCyan, ratio);
      colors.push(color.r, color.g, color.b);
    }
    
    geometry.setAttribute(
      'color',
      new THREE.Float32BufferAttribute(colors, 3),
    );

    const sphere = new THREE.Points(geometry, material);
    scene.add(sphere);

    const clock = new THREE.Clock();
    const mouse = new THREE.Vector2(0, 0);

    function onMouseMove(event) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    }
    
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    function animate() {
      animationIdRef.current = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      const positions = geometry.attributes.position;
      for (let i = 0; i < positions.count; i++) {
        const originalX = originalPositions.getX(i);
        const originalY = originalPositions.getY(i);
        const originalZ = originalPositions.getZ(i);
        const normal = new THREE.Vector3(
          normals.getX(i),
          normals.getY(i),
          normals.getZ(i),
        );
        const wave1 = 0.5 * Math.sin(originalX * 1.5 + elapsedTime);
        const wave2 = 0.25 * Math.sin(originalY * 2.5 + elapsedTime * 1.5);
        const wave3 = 0.25 * Math.sin(originalZ * 2.0 + elapsedTime * 2.0);
        const displacement = wave1 + wave2 + wave3;
        const newPos = new THREE.Vector3(
          originalX,
          originalY,
          originalZ,
        ).add(normal.multiplyScalar(displacement));
        positions.setXYZ(i, newPos.x, newPos.y, newPos.z);
      }
      positions.needsUpdate = true;

      sphere.rotation.y += 0.05 * (mouse.x * 0.5 - sphere.rotation.y);
      sphere.rotation.x += 0.05 * (-mouse.y * 0.5 - sphere.rotation.x);

      renderer.render(scene, camera);
    }

    function onWindowResize() {
      if (!canvasContainer) return;
      renderer.setSize(
        canvasContainer.offsetWidth,
        canvasContainer.offsetHeight,
      );
      camera.aspect = canvasContainer.offsetWidth / canvasContainer.offsetHeight;
      camera.updateProjectionMatrix();
    }
    
    window.addEventListener('resize', onWindowResize, false);

    animate();

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onWindowResize);
      if (renderer) {
        renderer.dispose();
      }
      if (geometry) {
        geometry.dispose();
      }
      if (material) {
        material.dispose();
      }
      if (scene) {
        scene.clear();
      }
    };
  }, []);

  return <CanvasContainer ref={canvasRef} />;
};
