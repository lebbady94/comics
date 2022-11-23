import React from 'react';
import { IIssueCardProps } from './issue-card.types';

const IssueCard: React.FC<IIssueCardProps> = (props: IIssueCardProps) => {
  const { img, title } = props;

  return(
    <div className="issue-card">
      <div className="issue-card__header">
        <img className="issue-card__header__image" src={img} alt={title} />
      </div>
      <div className="issue-card__title">
        <span>{title}</span>
      </div>
    </div>
  )
}

export default IssueCard;
