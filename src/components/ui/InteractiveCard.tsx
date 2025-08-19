import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Play } from 'lucide-react';
import Button from './Button';

interface InteractiveCardProps {
  type: 'product' | 'wishlist' | 'video';
  title: string;
  description?: string;
  imageUrl: string;
  position: string;
  connector?: boolean;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({
  type,
  title,
  description,
  imageUrl,
  position,
  connector = false,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className={`absolute ${position} w-64 bg-white rounded-lg shadow-2xl p-4 text-left text-black`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      {connector && (
        <div className="absolute top-1/2 left-full ml-4 transform -translate-y-1/2">
          <svg width="50" height="2" viewBox="0 0 50 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="1" x2="50" y2="1" stroke="#1f1f1f" strokeWidth="1" strokeDasharray="2 2"/>
          </svg>
        </div>
      )}

      {type === 'video' ? (
        <div className="relative">
          <img src={imageUrl} alt={title} className="rounded-md w-full h-32 object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center rounded-md">
            <button className="w-12 h-12 bg-white bg-opacity-50 rounded-full flex items-center justify-center text-white backdrop-blur-sm">
              <Play className="w-6 h-6 fill-white" />
            </button>
          </div>
        </div>
      ) : (
        <img src={imageUrl} alt={title} className="rounded-md w-full h-32 object-cover" />
      )}

      <div className="mt-3">
        <h3 className="font-bold text-lg">{title}</h3>
        {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
      </div>

      {type === 'wishlist' && (
        <>
          <button className="absolute top-3 right-3 text-gray-400 hover:text-red-500">
            <Heart className="w-6 h-6" />
          </button>
          <Button variant="primary" className="w-full mt-4 bg-primary text-white">
            SHOP NOW
          </Button>
        </>
      )}

      {type === 'product' && (
        <a href="#" className="flex items-center text-sm text-primary mt-3 hover:underline">
          View product <ArrowRight className="w-4 h-4 ml-1" />
        </a>
      )}
    </motion.div>
  );
};

export default InteractiveCard;
