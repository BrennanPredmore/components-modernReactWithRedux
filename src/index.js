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
          author={faker.name.firstName() + " " +  faker.name.lastName()}
          timeAgo="13:34"
          comment={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
        />
             </ApprovalCard>
             <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName() + " " + faker.name.lastName()}
          timeAgo='01:12'
          comment={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName() + " " +  faker.name.lastName()}
          timeAgo='16:43'
          comment={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));
