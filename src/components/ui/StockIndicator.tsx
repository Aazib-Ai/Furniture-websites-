import React from 'react';
import { Icon } from '../common/Icon';
import type { IconName } from '../common/Icon';

interface StockIndicatorProps {
  stock: number;
  threshold?: number;
}

export const StockIndicator: React.FC<StockIndicatorProps> = ({
  stock,
  threshold = 5
}) => {
  const getStockStatus = () => {
    if (stock === 0) return { text: 'Out of Stock', color: 'text-red-600', icon: 'XCircle' as IconName };
    if (stock <= threshold) return { text: `Only ${stock} left`, color: 'text-orange-600', icon: 'AlertTriangle' as IconName };
    return { text: 'In Stock', color: 'text-green-600', icon: 'CheckCircle' as IconName };
  };

  const status = getStockStatus();

  return (
    <div className={`flex items-center gap-2 ${status.color}`}>
      <Icon name={status.icon} size={16} />
      <span className="text-sm font-medium">{status.text}</span>
    </div>
  );
};