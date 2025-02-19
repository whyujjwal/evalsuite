import React from 'react';

const FeaturesPreview = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Precise Evaluation',
      description: 'Advanced metrics for detailed AI model analysis'
    },
    {
      icon: '⚡',
      title: 'Real-time Processing',
      description: 'Instant feedback on model performance'
    },
    {
      icon: '🔄',
      title: 'Comparative Analysis',
      description: 'Compare multiple models simultaneously'
    }
  ];

  return (
    <section className="features-preview">
      <h2 className="section-title">What's Coming</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <span className="feature-icon">{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesPreview;
