export interface Job {
  companyId:          string;
  creatorId:          string;
  description:        string;
  descriptionPreview: string;
  details:            Details;
  helmetImageLink:    string;
  lastUpdate:         number;
  publishDate:        number;
  seoAlias:           string;
  skillsList:         SkillsList[];
  status:             Status;
  title:              string;
  smallCompany:       SmallCompany;
  _geoloc:            Geoloc[];
  id:                 string;
  createdAt?:         number;
  inSelections?:      InSelections;
  team?:              Team;
}

export interface Geoloc {
  lat: number;
  lng: number;
}

export interface Details {
  acceptRemote:          AcceptRemote;
  contract:              Contract;
  currency?:             string;
  places:                { [key: string]: Place };
  requiredExperience:    number;
  requiredExperiencePro: number;
  start:                 Start;
  salary?:               string;
}

export enum AcceptRemote {
  Never = "NEVER",
  Occasionally = "OCCASIONALLY",
  Regularly = "REGULARLY",
}

export enum Contract {
  Permanent = "permanent",
}

export interface Place {
  position:  number;
  updatedAt: number;
}

export enum Start {
  Asap = "asap",
  StartASAP = "ASAP",
  The03052021 = "03/05/2021",
}

export interface InSelections {
  latest_jobs: number;
}

export interface SkillsList {
  id?:             string;
  name:            string;
  tags?:           string[];
  imageUrl?:       string;
  value:           number;
  oldUrl?:         string;
  versions?:       Versions;
  categoryId?:     string;
  parentTechnoId?: string;
  oldSVGUrl?:      string;
  url?:            string;
}

export interface Versions {
  font: string[];
  svg:  string[];
}

export interface SmallCompany {
  companyName:   string;
  logoImageLink: string;
  id:            string;
  seoAlias:      string;
  gallery:       Gallery;
}

export interface Gallery {
  imageImageLink: string;
}

export enum Status {
  JobPublished = "JOB_PUBLISHED",
}

export interface Team {
  management: string;
  technical:  string;
}
