import { IsEnum, IsHexColor, IsNotEmpty, IsString } from 'class-validator';
import { BankAccountType } from '../entities/BankAccount';

export class UpdateBankAccountDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEnum(BankAccountType)
  type: BankAccountType;

  @IsString()
  @IsNotEmpty()
  @IsHexColor()
  color: string;
}
