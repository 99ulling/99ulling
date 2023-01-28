export interface Search {
  latitude: number;
  longitude: number;
  transportation: string;
}

export interface Reservation {
  farmId: number;
  ggulCount: number;
  nickname: string;
}

export interface GetReservation {
  address: string;
  farmImage: string;
  farmName: string;
  phoneNumber: string;
  reservationCount: number;
  reservationId: number;
}
