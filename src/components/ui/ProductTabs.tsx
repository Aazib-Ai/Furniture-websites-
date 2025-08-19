import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { H3, P } from './Typography';
import { RatingStars } from './RatingStars';
import { Icon } from '../common/Icon';

interface ProductTabsProps {
  description: string;
  specifications: Record<string, string>;
  reviews: Array<{
    id: number;
    author: string;
    rating: number;
    date: string;
    comment: string;
    helpful: number;
  }>;
}

export const ProductTabs: React.FC<ProductTabsProps> = ({
  description,
  specifications,
  reviews
}) => {
  const [activeTab, setActiveTab] = useState<'description' | 'specifications' | 'reviews'>('description');

  const tabs = [
    { id: 'description', label: 'Description', count: 0 },
    { id: 'specifications', label: 'Specifications', count: 0 },
    { id: 'reviews', label: 'Reviews', count: reviews.length }
  ];

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`relative py-4 px-1 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
              {tab.count > 0 && (
                <span className="ml-2 bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="py-6">
        {activeTab === 'description' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-lg max-w-none"
          >
            <P className="text-gray-700 leading-relaxed">{description}</P>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <H3 className="text-lg font-semibold mb-3">Key Features</H3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Icon name="Check" className="text-green-500 mr-2 mt-1" size={16} />
                    <span>Premium quality materials</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-green-500 mr-2 mt-1" size={16} />
                    <span>Expert craftsmanship</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-green-500 mr-2 mt-1" size={16} />
                    <span>Modern design aesthetic</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-green-500 mr-2 mt-1" size={16} />
                    <span>Easy assembly instructions</span>
                  </li>
                </ul>
              </div>
              <div>
                <H3 className="text-lg font-semibold mb-3">Care Instructions</H3>
                <ul className="space-y-2 text-sm">
                  <li>• Dust regularly with soft, dry cloth</li>
                  <li>• Avoid direct sunlight exposure</li>
                  <li>• Use coasters to prevent water rings</li>
                  <li>• Professional cleaning recommended</li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'specifications' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(specifications).map(([key, value]) => (
                <div key={key} className="border-b border-gray-200 pb-4">
                  <dt className="text-sm font-medium text-gray-900 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </dt>
                  <dd className="mt-1 text-sm text-gray-600">{value}</dd>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'reviews' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {reviews.length > 0 ? (
              <>
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{review.author}</span>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <RatingStars rating={review.rating} size="sm" />
                      </div>
                    </div>
                    <P className="text-gray-700 mb-3">{review.comment}</P>
                    <div className="flex items-center gap-4 text-sm">
                      <button className="text-gray-500 hover:text-gray-700 flex items-center gap-1">
                        <Icon name="ThumbsUp" size={14} />
                        <span>Helpful ({review.helpful})</span>
                      </button>
                      <button className="text-gray-500 hover:text-gray-700">
                        Report
                      </button>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="text-center py-12">
                <Icon name="Star" size={48} className="text-gray-300 mx-auto mb-4" />
                <P className="text-gray-500">No reviews yet. Be the first to review this product!</P>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};