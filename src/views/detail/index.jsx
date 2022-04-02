import React from 'react';
import BasicDetail from './BasicDetail';
import Thumb from 'assets/images/course.jpg';
import CourseFeature from './Feature';
import CourseCircullum from './Circullum';

const requirements = [
  {
    require: 'At vero eos et accusamus et iusto odio dignissimos ducimus'
  },
  {
    require: 'At vero eos et accusamus et iusto odio dignissimos ducimus'
  },
  {
    require: 'At vero eos et accusamus et iusto odio dignissimos ducimus'
  },
  {
    require: 'At vero eos et accusamus et iusto odio dignissimos ducimus'
  },
  {
    require: 'At vero eos et accusamus et iusto odio dignissimos ducimus'
  }
];

const CourseDetail = () => {
  return (
    <div className="course-detail">
      <div className="grid grid-cols-12-gap-8">
        <div className="col-span-12">
          <BasicDetail
            thumb={Thumb}
            name={'HTML, CSS Tips & Tricks'}
            lectures={52}
            studentCount={1120}
            overview={
              'Tutorials về HTML, CSS, UI, UX sẽ được tổng hợp tại khóa học này, các video có nội dung ngắn gọn, súc tích giúp học viên có thể ứng dụng ngay vào thực tế'
            }
          />
        </div>
      </div>
      <div className="container mx-auto px-44">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-8 ">
                <div className="course-detail-element">
                  <div className="course-overview-wrapper">
                    <div className="course-overview-title">Course Overview</div>
                    <p className="course-overview">
                      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                      praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                      excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                      officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
                      quidem rerum facilis est et expedita distinctio.
                    </p>
                    <p className="course-overview">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                      veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                      ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                      consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </p>
                  </div>
                  <div className="course-requirements-wrapper">
                    <div className="course-overview-title">Requirements</div>
                    <ul className="course-requirements-list">
                      {requirements &&
                        requirements.map((el) => {
                          return (
                            <li className="course-requirements-item">
                              <span className="icon-check"></span>
                              <p>{el.require}</p>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-span-4">
                <div className="course-detail-element">
                  <CourseFeature />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-8">
                <CourseCircullum />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
