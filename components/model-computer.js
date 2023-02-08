import { useState, useEffect, useRef, useCallback, use } from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}
//this function produces the shape of the curve by calculation. Help in transition and animation.

const ModelComputer = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true);
  const [renderer,setRenderer]=useState();
  const [_camera,setCamera]=useState();
  const [target]=useState(new THREE.Vector3(-0.5,1.2,0));
  const [initialCameraPosition]=useState(
    new THREE.Vector3(
        20*Math.sin(0.2*Math.PI),
        10,
        20*Math.cos(0.2*Math.PI)
    )
  )

  const [scene]=useState(new THREE.Scene())
  const [_controls,setControls]=useState();

  useEffect(()=>{
    const {current:container}=refContainer;
    if(container && !renderer){
        const scW = container.clientWidth
        const scH = container.clientHeight
  
        const renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true
        })
    }
  })
  return (
    <Box
      ref={refContainer}
      className="model-computer"
      m="auto"
      mt={['-20px', '-60px', '-120px']}
      mb={['-40px', '-140px', '-200px']}
      w={[280, 480, 640]}
      h={[280, 480, 640]}
      position="relative"
    >
      {loading && (
        <Spinner
          size="xl"
          position="absolute"
          left="50%"
          top="50%"
          ml="calc(0px - var(--spinner-size) / 2)"
          mt="calc(0px - var(--spinner-size))"
        />
      )}
      
    </Box>
  )
}

export default ModelComputer
