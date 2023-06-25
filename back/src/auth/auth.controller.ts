import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('auth/login')
  async login(@Body() body) {
    console.log(body)
    return this.authService.validateUser(body.email, body.password);
  }

  @Post('auth/refresh')
  reauthenticate(@Body() body) {
    return this.authService.reauthenticate(body); //este método será implementado abaixo, portanto é esperado que de erro.
  }

}
