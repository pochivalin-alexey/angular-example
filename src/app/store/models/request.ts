export enum RequestType {
  INFORMATION = 0, // Изменить информацию
  SOCKET = 1, // Изменить сокет
  DELETE = 2, // Удалить объект
}

export interface Request {
  id: number; // ID заявки
  stationId: string; // ID станции
  type: RequestType; // Тип заявки
  data: { [key: string]: string | number }; // Измененная информация
}
