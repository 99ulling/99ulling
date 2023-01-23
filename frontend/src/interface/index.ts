export interface SignUp {
  address: string;
  latitude: number;
  longitude: number;
  nickname: string;
  userType: string;
}

export interface Search {
  latitude: number;
  longitude: number;
  transportation: string;
}
