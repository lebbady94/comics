import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { adaptDetailsServiceToView } from '../../../core/adapter/issues/issues.adapter';
import { IDetailsModel } from '../../../core/models/issues/details';
import { getIssueById } from '../../../core/services/issues/issues.service';
import { IIssueServiceResponse } from '../../../core/services/issues/issues.service.types';

const Detail: React.FC = () => {
  const [issue, setIssue] = useState<IDetailsModel | null>(null);
  const { issueId } = useParams<{ issueId: string }>();

  useEffect(() => {
    getIssueById(issueId).then((issueRes: IIssueServiceResponse) => {
      const adaptedResponse = adaptDetailsServiceToView(issueRes);
        setIssue(adaptedResponse);
    }).catch((error: Error) => {
      console.log(error)
    })
  }, [issueId])
  
  return(
    <div className="view details">
      {issue && (
        <div className="details" >
          <img className="details__image" src={issue.image} alt={issue.name} />
          <div className="details__info">
            <span className="details__info__title">{issue.name}</span>
            <article className="details__info__description">{issue.description}</article>
          </div>
        </div>
      )}
    </div>
  )
}

export default Detail;
