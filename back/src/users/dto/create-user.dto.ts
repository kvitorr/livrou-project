
export class CreateUserDto {
    user_id: number;
    name: string;
    birth_date: Date;
    phone: string;
    email: string;
    password: string;
    removed: boolean;
    isAdmin: boolean;
  }