import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/loginDto';
import { RegisterDto } from './dto/registerDto';

@Injectable()
export class AuthService {
    
    login(loginDto:LoginDto){
        return loginDto;
    }

    register(registerDto : RegisterDto){
        return registerDto;
    }
}
