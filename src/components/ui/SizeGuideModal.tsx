import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../common/Icon';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  measurements: Record<string, string>;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({
  isOpen,
  onClose,
  measurements
}) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Icon name="X" size={20} />
          </button>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Size Guide</h2>
          <div className="space-y-4">
            {Object.entries(measurements).map(([key, value]) => (
              <div key={key} className="border-b border-gray-200 pb-4 last:border-0">
                <h3 className="text-sm font-semibold text-gray-900 uppercase mb-1">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <p className="text-sm text-gray-600">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-500">
              <strong>Note:</strong> Measurements are approximate. For best fit, please refer to your usual size or contact our customer service.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};