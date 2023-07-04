import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body) {
    console.log(body)
    return this.authService.validateUser(body.email, body.password);
  }

  @Post('refresh')
  reauthenticate(@Body() body) {
    return this.authService.reauthenticate(body); //este método será implementado abaixo, portanto é esperado que de erro.
  }

}
