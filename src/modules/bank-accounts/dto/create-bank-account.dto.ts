import { IsNotEmpty, IsNumber } from 'class-validator';
import { UpdateBankAccountDto } from './update-bank-account.dto';

export class CreateBankAccountDto extends UpdateBankAccountDto {
  @IsNumber()
  @IsNotEmpty()
  initialBalance: number;
}
