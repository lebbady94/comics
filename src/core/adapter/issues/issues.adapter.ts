import { IDetailsModel } from "../../models/issues/details";
import { IIssuesModel } from "../../models/issues/issues";
import { IIssueServiceResponse } from "../../services/issues/issues.service.types";

export interface IIssuesAdapter {
  adaptIssuesServiceToView: (issues: IIssueServiceResponse) => IIssuesModel;
  adaptDetailsServiceToView: (issues: IIssueServiceResponse) => IDetailsModel;
}

//adapts response of the service, from api interface to model of the pages

export const adaptIssuesServiceToView: IIssuesAdapter['adaptIssuesServiceToView'] = (issues) => ({
  id: issues.id.toString(),
  name: issues.name,
  image: issues.cover_image
})

export const adaptDetailsServiceToView: IIssuesAdapter['adaptDetailsServiceToView'] = (issues) => ({
  id: issues.id.toString(),
  name: issues.name,
  image: issues.cover_image,
  description: issues.description,
})
