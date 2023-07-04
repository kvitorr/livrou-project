import { Injectable, NotAcceptableException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(username);

    if (!user) {
      throw new UnauthorizedException('Usuário ou Senha Inválidos');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      return await this.generateToken(user);
    }

    throw new UnauthorizedException('Usuário ou Senha Inválidos');
  }

  async generateToken(payload: User) {
    const accessToken = this.jwtService.sign(
      { email: payload.email,
      user_id: payload.user_id },
      {
        secret: process.env.SECRET_KEY,
        expiresIn: '3000s',
      },
    );

    const refreshToken = this.jwtService.sign(
      { email: payload.email },
      {
        secret: process.env.SECRET_KEY_REFRESH,
        expiresIn: '60s',
      },
    );
    return { access_token: accessToken, refresh_token: refreshToken };
  }

async reauthenticate(body: any): Promise<any> {
  const payload: User = await this.verifyRefreshToken(body);
  return this.generateToken(payload);
}

private async verifyRefreshToken(body: any): Promise<User> {
  const refreshToken: string = body.refresh_token;

  if (!refreshToken) {
    throw new NotFoundException('Usuário não encontrado');
  }

  const email: string = this.jwtService.decode(refreshToken)['email'];
  const usuario: User = await this.usersService.findOneByEmail(email);

  if (!usuario) {
    throw new NotFoundException('Usuário não encontrado');
  }

  try {
    this.jwtService.verify(refreshToken, {
      secret: process.env.SECRET_KEY_REFRESH,
    });
    return usuario;
  } catch (err) {
    if (err.name === 'JsonWebTokenError') {
      throw new UnauthorizedException('Assinatura Inválida');
    }
    if (err.name === 'TokenExpiredError') {
      throw new UnauthorizedException('Token Expirado');
    }
    throw new UnauthorizedException(err.name);
  }
}



}
