import React from 'react';
import { Icon } from '../common/Icon';

interface ShippingInfoProps {
  shippingCost?: number;
  estimatedDays?: number;
  freeShippingThreshold?: number;
}

export const ShippingInfo: React.FC<ShippingInfoProps> = ({
  shippingCost = 0,
  estimatedDays = 3,
  freeShippingThreshold = 50
}) => {
  const getShippingText = () => {
    if (shippingCost === 0) {
      return `Free shipping on orders over $${freeShippingThreshold}`;
    }
    return `$${shippingCost} shipping`;
  };

  return (
    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Shipping</span>
        <span className="text-sm text-gray-600">{getShippingText()}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Estimated Delivery</span>
        <span className="text-sm text-gray-600">{estimatedDays} business days</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <Icon name="Truck" size={16} />
        <span>Express shipping available</span>
      </div>
    </div>
  );
};