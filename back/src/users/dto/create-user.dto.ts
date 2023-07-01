
export class CreateUserDto {
    user_id: number;
    name: string;
    birth_date: Date;
    phone: number;
    email: string;
    password: string;
    removed: boolean;
    isAdmin: boolean;
  }