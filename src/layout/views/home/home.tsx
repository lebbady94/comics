import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { adaptIssuesServiceToView } from '../../../core/adapter/issues/issues.adapter';
import { IIssuesModel } from '../../../core/models/issues/issues';
import { getIssues } from '../../../core/services/issues/issues.service';
import { IIssueServiceResponse } from '../../../core/services/issues/issues.service.types';
import IssueCard from '../../commons/issue-card/issue-card';

const Home: React.FC = () => {
  const [issues, setIssues] = useState<IIssuesModel[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    getIssues(searchValue).then((issuesRes: IIssueServiceResponse[]) => {
      const adaptedResponse = issuesRes.map((issue: IIssueServiceResponse) => adaptIssuesServiceToView(issue))
        setIssues(adaptedResponse);
    }).catch((error: Error) => {
      console.log(error)
    })
  }, [searchValue])

  return (
  <div className="view home">
    <input
      className="home__input"
      type="text"
      placeholder="Type to filter issues..."
      value={searchValue} 
      onChange={(event: ChangeEvent<HTMLInputElement>) => { setSearchValue(event.target.value)}}
    />
    <div className="home__issues">
    {issues.length > 0 ? 
      issues.map((issue: any) => 
        <Link key={issue.id} className="home__issues__link" to={`/issue/${issue.id}`}>
          <IssueCard img={issue.image} title={issue.name}/>
        </Link>)
      : 
    <div className="home__issues__message">Sorry, the database is down.</div>
    }
    </div>
  </div>)
}

export default Home;

