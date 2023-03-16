export enum EUrls {
  postLogin = 'https://jsonplaceholder.typicode.com/users/<userId>',
}

export interface IGetUser {
  id: Number,
  name: string,
  username: string,
  email: string,
  address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
          lat: string,
          lng: string
      }
  },
  phone: string,
  website: string,
  company: {
      name: string,
      catchPhrase: string,
      bs: string
  }
}
