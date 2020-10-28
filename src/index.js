import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
          <div>
              <h4> Warning!</h4>
              Are you sure you want to do this?
          </div>
      </ApprovalCard>
      <ApprovalCard >
        <CommentDetail
          author='Sam'
          timeAgo='12:20'
          comment='I Love to code. I am obsessed with programming'
          avatar={faker.image.avatar()}
        />
             </ApprovalCard>
             <ApprovalCard>
        <CommentDetail
          author='Alex'
          timeAgo='01:12'
          comment="It's the best. Its all I do"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Jane'
          timeAgo='16:43'
          comment='So is Brennan. Hes the best'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));
