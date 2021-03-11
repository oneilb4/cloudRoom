let renderer, scene, camera
let controls

setup()
draw()

function setup(){
  scene = new THREE.Scene()
  //scene.background = new THREE.Color(0xF7BDFF)

  const ar = innerWidth / innerHeight
  camera = new THREE.PerspectiveCamera(75, ar, 0.1, 1000)
  camera.position.z = 3
  scene.add(camera)

//lights
  const light = new THREE.HemisphereLight(0x8F6BFF, 0x8F6BFF, 3)
  scene.add(light)

  const sphere = new THREE.SphereGeometry(0.2, 16, 8)
  const mat = new THREE.MeshBasicMaterial({ color: 0xFFCF67})
  const lightSphere = new THREE.Mesh(sphere, mat)
  light1 = new THREE.PointLight(0xBF4FFF, 1, 50)
  light1.add(lightSphere)
  scene.add(light1)
  light1.position.set(0, 10, 0)

//ground
  const geometry = new THREE.PlaneGeometry(50, 50, 50, 50)
  const material = new THREE.MeshBasicMaterial({
    side: THREE.DoubleSide,
    color: 0x4FDCFF,
    //wireframe: true,
  })
  const plane = new THREE.Mesh(geometry, material)
  scene.add(plane)
  plane.rotation.x = Math.PI / 2
  plane.position.y = -3

//cloud arrays
  const loader = new THREE.GLTFLoader().setPath('models/')
  loader.load('cloud-array.gltf', (gltf) => {
    const cloudarray = gltf.scene.children[0]
    cloudarray.position.x = 0
    cloudarray.position.y = 6
    scene.add(cloudarray)
  })

  const loader2 = new THREE.GLTFLoader().setPath('models/')
  loader.load('cloud-array.gltf', (gltf) => {
    const cloudarray2 = gltf.scene.children[0]
    cloudarray2.position.z = 18
    cloudarray2.position.x = 6
    cloudarray2.position.y = 6
    scene.add(cloudarray2)
  })

  const loader3 = new THREE.GLTFLoader().setPath('models/')
  loader.load('cloud-array.gltf', (gltf) => {
    const cloudarray3 = gltf.scene.children[0]
    cloudarray3.position.x = 12
    cloudarray3.position.y = 6
    scene.add(cloudarray3)
  })

  const loader4 = new THREE.GLTFLoader().setPath('models/')
  loader.load('cloud-array.gltf', (gltf) => {
    const cloudarray4 = gltf.scene.children[0]
    cloudarray4.position.x = -12
    cloudarray4.position.y = 6
    scene.add(cloudarray4)
  })

  const loader5 = new THREE.GLTFLoader().setPath('models/')
  loader.load('cloud-array.gltf', (gltf) => {
    const cloudarray5 = gltf.scene.children[0]
    cloudarray5.position.z = 18
    cloudarray5.position.x = -6
    cloudarray5.position.y = 6
    scene.add(cloudarray5)
  })

  const loader6 = new THREE.GLTFLoader().setPath('models/')
  loader.load('cloud-array.gltf', (gltf) => {
    const cloudarray6 = gltf.scene.children[0]
    cloudarray6.position.z = -14
    cloudarray6.position.x = -6
    cloudarray6.position.y = 6
    scene.add(cloudarray6)
  })

  const loader7 = new THREE.GLTFLoader().setPath('models/')
  loader.load('cloud-array.gltf', (gltf) => {
    const cloudarray7 = gltf.scene.children[0]
    cloudarray7.position.z = -14
    cloudarray7.position.x = 6
    cloudarray7.position.y = 6
    scene.add(cloudarray7)
  })

  const loader8 = new THREE.GLTFLoader().setPath('models/')
  loader.load('torus-links.gltf', (gltf) => {
    const torusLinks = gltf.scene
    torusLinks.position.y = -45
    torusLinks.position.z = -8
    torusLinks.scale.set(14, 14, 14)
    scene.add(torusLinks)
  })

  renderer = new THREE.WebGLRenderer({
    alpha: true,
  })
  //renderer.autoClearColor = 0xF7BDFF
  renderer.setSize(innerWidth, innerHeight)
  document.body.appendChild(renderer.domElement)

  controls = new THREE.OrbitControls(camera, renderer.domElement)
  //controls.target.set(0, 0, 0)
  controls.minDistance = 5;
  controls.maxDistance = 8;
  controls.update()

}

function draw(){
  requestAnimationFrame(draw)
  renderer.render(scene, camera)
}
