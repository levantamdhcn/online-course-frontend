import React from 'react';

const features = [
  {
    name: '100.000 Online Courses',
    desc: 'Nor again is there anyone who loves or pursues or desires',
    icon: 'camera'
  },
  {
    name: '100.000 Online Courses',
    desc: 'Nor again is there anyone who loves or pursues or desires',
    icon: 'medal'
  },
  {
    name: '100.000 Online Courses',
    desc: 'Nor again is there anyone who loves or pursues or desires',
    icon: 'infinite'
  }
];

const Feature = () => {
  return (
    <div className="web-features-top">
      <div className="px-44">
        {features && (
          <div className="flex web-features-wrapper">
            {features.map((feature) => (
              <div className="px-4">
                <div className="web-features">
                  <div className="web-features-left">
                    <span className="web-features-icon">
                      <span className={`icon-${feature.icon} size-icon-4`}></span>
                    </span>
                  </div>
                  <div className="web-features-right">
                    <h4 className="web-features-name">{feature.name}</h4>
                    <div className="web-features-desc">{feature.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Feature;
