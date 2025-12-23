import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Controller('users')
export class UserController {
    constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
    @Get()
    findAll(@Query('location') location:string){
        return ({location})
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return({id})
    }

    @Post()
    async create(@Body() createUserDto : CreateUserDto){
        const user = this.userRepository.create(createUserDto);
        await this.userRepository.save(user);
        return user;
    }
}
