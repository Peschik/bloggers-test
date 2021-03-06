export interface IBlogger {
  id: number;
  name: string;
  company: ICompany;
}
export interface ICompany {
  name: string;
}

export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}
