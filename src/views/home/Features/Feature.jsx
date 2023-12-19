import React from 'react';

const features = [
  {
    name: 'Hơn 100 Khóa học trực tuyến',
    desc: 'Cung cấp kiến thức chuyên sâu cho từng lĩnh vực',
    icon: 'camera'
  },
  {
    name: 'Hơn 100 chứng chỉ được cấp',
    desc: 'Chứng chỉ cấp ngay sau khi hoàn thành',
    icon: 'medal'
  },
  {
    name: 'Học mọc lúc, mọi nơi',
    desc: 'Không giới hạn về không gian và thời gian học',
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
