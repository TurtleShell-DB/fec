import React from 'react';
import styles from "./styles.js"
const moment = require('moment');

class AnswerRenderer extends React.Component {
  constructor(props) {
    super(props);
    const { answers } = props;
    this.answersObject = {
      answererName: [],
      answerBody: [],
      answerDate: [],
      answerHelpfulness: [],
      answerID: [],
    };
    for (let i = 0; i < Object.keys(answers).length; i += 1) {
      const currentAnswer = answers[Object.keys(answers)[i]];
      this.answersObject.answererName.push(currentAnswer.answerer_name);
      this.answersObject.answerBody.push(currentAnswer.body);
      this.answersObject.answerDate.push(currentAnswer.date);
      this.answersObject.answerHelpfulness.push(currentAnswer.helpfulness);
      this.answersObject.answerID.push(currentAnswer.id);
    }
  }

  parseAnswers(answerBody, i) {
    const answerDate = this.answersObject.answerDate[i];
    const answererName = this.answersObject.answererName[i];
    const answerHelpfulness = this.answersObject.answerHelpfulness[i];
    return (
<<<<<<< HEAD
      <styles.AnswerText>
        {answerBody}
        {' '}
        {moment(answerDate).fromNow()}
        {' '}
        {answererName}
      </styles.AnswerText>
=======
      <div>
        <styles.AnswerText>
          <styles.BoldedText>
            A:
            {' '}
          </styles.BoldedText>
          {answerBody}
        </styles.AnswerText>
        <styles.AnswerSubtitle>
          by
          {' '}
          {answererName}
          ,
          {' '}
          {moment(answerDate).fromNow()}
          {'  |  '}
          Helpful?
          {' '}
          <styles.HyperLink href="http://google.com">Yes</styles.HyperLink>
          {' '}
          (
          {answerHelpfulness}
          )
          {'  |  '}
          <styles.HyperLink href="http://google.com">Report</styles.HyperLink>
        </styles.AnswerSubtitle>
      </div>
>>>>>>> Add Answer Helpfulness & Improve CSS Styling Reusability
    );
  }

  render() {
    return (
      <div>
        {this.answersObject.answerBody.map((answerBody, i) => this.parseAnswers(answerBody, i))}
      </div>
    );
  }
}

export default AnswerRenderer;
