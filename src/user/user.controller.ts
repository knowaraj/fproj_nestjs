import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';

@Controller('users')
export class UserController {
    
    @Get()
    findAll(@Query('location') location:string){
        return ({location})
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return({id})
    }

    @Post()
    create(@Body() createUserDto : CreateUserDto){
        return {
            name: createUserDto.name,
        }
    }
}
