import { IIssueServiceResponse } from "./issues.service.types";

const baseUrl = 'http://localhost:8888';

export const getIssues = (searchValue: string): Promise<IIssueServiceResponse[]> => {
  const issuesUrl = searchValue ? `${baseUrl}/issues?keywords=${searchValue}` : `${baseUrl}/issues`;
  return fetch(issuesUrl).then(res => res.json()).catch((err: any) => err);
}

export const getIssueById = (id: string): Promise<IIssueServiceResponse> => {
  return fetch(`${baseUrl}/issue/${id}`).then(res => res.json()).catch((err: any) => err);
}
