import { Module } from '@nestjs/common';
import { EducationService } from './education.service';
import { EducationController } from './education.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [EducationController],
  providers: [EducationService, PrismaService],
})
export class EducationModule { }
