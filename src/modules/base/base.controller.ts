import { Body, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { IBaseService } from "./base.interface";

export class BaseController<T>{

	constructor(private readonly baseService: IBaseService<T>) {}

    @Get()
	// @ApiResponse({ status: 200, description: 'Ok'})
	async getAll(): Promise<T[]> {
	  return await this.baseService.getAll();
	}


	@Post()
	// @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
	// @ApiResponse({ status: 403, description: 'Forbidden.'})
	// @ApiResponse({ status: 400, description: 'Bad Request.'})
	async create(@Body() data: any): Promise<T> {
		return await this.baseService.createOne(data);
	}


    @Get(':id')
	// @ApiResponse({ status: 200, description: 'Entity retrieved successfully.'})
	// @ApiResponse({ status: 404, description: 'Entity does not exist'})
	async getOneById(@Param('id') id: number): Promise<T> {
	  return await this.baseService.getOneById(id)
	}

    @Delete(':id')
	// @ApiResponse({ status: 200, description: 'Entity deleted successfully.'})
	// @ApiResponse({ status: 400, description: 'Bad Request.'})
	async delete(@Param('id') id: number) {
	  return await this.baseService.deleteOneById(id);
	}

	@Put(':id')
	// @ApiResponse({ status: 400, description: 'Bad Request.'})
	// @ApiResponse({ status: 200, description: 'Entity deleted successfully.'})
	async update( @Param('id') id: number, @Body() data: any): Promise<T> {
	  return this.baseService.updateOneById(id, data);
	}
}