import React from 'react'
import useFirestore from '../hooks/useFirestore'
// on import motion car ou animer un element nous devons 
// preceder tout le nom des element par le tag motion.
import { motion } from 'framer-motion'

const ImageGrid = ({ setSelectedImage }) => {

  const { docs } = useFirestore('images')

  return (
    <div className='img-grid'>
      {docs && docs.map(doc => {
        return (
          <motion.div className='img-wrap' key={doc.id}
            onClick={() => setSelectedImage(doc.url)}
            // un supper attribut qui permet d'animer tout les changement de position ce produissant dans le composant
            // exemple si jajoouteou je supprime une imahe on pourra observer une animation
            layout
            //whileHover est implementer par framer-motion
            whileHover={{ opacity: 1 }}
          >
            <motion.img
              src={doc.url} alt="image"
              // dans initial on peut preciser differente propriete css qui permettent de 
              // d'inquer quel proprieye css on veut appliquer o depart de lanimation
              initial={{ opacity: 0 }}
              // animate est letat finale de l'animation ici notre animation demarre
              // avec un opacité de 0 pour arriver a 1
              // cette aniamtion a lieu au moment ou la page saffiche
              animate={{ opacity: 1 }}
              // l'attribut transition va indiquer que le va attendre 1second avec de demmarer l'animation
              transition={{ delay: 1 }}
            />
          </motion.div>
        )
      })}
    </div>
  )
}

export default ImageGrid;
