import React from 'react'
import { motion } from 'framer-motion'

const Modal = ({ selectedImage, setSelectedImage }) => {

  const handleClick = (e) => {
    // on fait cette verif pour regarder si leleement cliquer est la div exterieur et non limage centrale
    // pour eviter une fermeture de l'image si l'utilisateur click sur limage central
    if (e.target.classList.contains('backdrop')) {
      setSelectedImage(null)
    }
  }

  return (
    <motion.div className='backdrop' onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img src={selectedImage} alt="enlarged pic"
        // avec framer motion on peut specifier des attricute qieo ne sson pas des attrivut css
        // on peut pas exemple jouer avec le placeement on x et en y avec les attribut x, y
        // vh sinifie viewing height donc ici en specifiant  -100 vh on fait en sorte que
        // limage sois bien au dessus de la vu 
        initial={{ y: "-100vh" }}
        // 0 est la position initial de limage ainsi nous creons un efft allant de haut vers le bas
        animate={{ y: 0 }}
      />
    </motion.div>
  )
}

export default Modal
