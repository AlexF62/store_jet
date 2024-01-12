import { ApiProperty } from "@nestjs/swagger";
import { EnumOrderStatus } from "@prisma/client";
import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsEnum, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";

export class OrderDto {
    @ApiProperty()
    @IsOptional()
    @IsEnum(EnumOrderStatus)
    status: EnumOrderStatus

     @ApiProperty()
     @IsArray()
     @ValidateNested({each: true})
     @Type(() => OrderItemDto)
    items: OrderItemDto[]

}

export class OrderItemDto {
    @ApiProperty()
    @IsNumber()
    quantity: number

    @ApiProperty()
    @IsNumber()
    price: number

    @ApiProperty()
    @IsNumber()
    productId: number
}